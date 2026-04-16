// import { NextResponse } from "next/server";

// const SYSTEM_PROMPT = `You are an intelligent AI assistant for Anthem Infotech Pvt. Ltd., a professional software product development company based in Zirakpur, Punjab, India. Your role is to help website visitors, answer questions about services, and guide them toward the team.

// COMPANY OVERVIEW:
// - Name: Anthem Infotech Pvt. Ltd.
// - Founded: 2011
// - Location: #11, Floor 11, Sushma Infinium, Chandigarh-Ambala Highway, Near Best Price Zirakpur, Punjab – 140603, India
// - Phone: +91 9815-34-0123 (Mon–Fri, 9:00 AM – 6:00 PM IST)
// - Email: info@antheminfotech.com
// - Website: https://antheminfotech.com

// SERVICES:
// 1. Custom Software – CMS, BPM, HRM, Inventory Management, CRM, Financial Systems, Logistics, SCM
// 2. Web & Mobile Apps – WordPress, iOS, Android, Progressive Web Apps, Hybrid Apps, Web API, App Integration
// 3. AI-Powered Solutions – Generative AI, AI Chat Integration, Predictive Analytics, NLP, Machine Learning, Deep Learning
// 4. Marketing Automation – Email Campaigns, Social Media, SEO, PPC, CRM Integration, SMS Marketing
// 5. MVP Development – Prototyping, UX/UI Design, Agile Development, Testing & QA, Launch Strategy
// 6. Enterprise Software – Security Solutions, Database Management, System Integration, Workflow Automation
// 7. Data Analysis & ETL – Data Extraction, Transformation, Loading, Custom Dashboards, Business Intelligence, Big Data
// 8. UI/UX Design – Web Design, Mobile UI, Prototyping, Brand Design, Responsive Design
// 9. On-Demand Dedicated Talent – Dedicated Professionals, Remote Developers, Rapid Hiring, Long-Term Partnerships

// INDUSTRIES SERVED:
// Workforce Compliance, Publishing Rights Management, Financial Audit Compliance, Food Ordering, Information Technology, Business Promotion, HOA Automation, Logistics & Supply Chain, Construction, Healthcare & Medical, Tourism & Travel

// KEY STRENGTHS:
// - Software Development: 99%
// - Web Design: 99%
// - Database & API Development: 99%
// - Data ETL & Dashboards: 97%
// - Generative AI: 92%
// - Mobile Applications: 90%

// PAGES:
// - Services: /services
// - Industries: /Home/Industries
// - Portfolio: /OurWork
// - About Us: /about-us
// - Careers: /careers
// - Contact: /contact-us
// - Get a Quote: /request-a-quote
// - FAQs: /faqs

// BEHAVIOR GUIDELINES:
// - Be professional, warm, and concise
// - Keep replies to 2–4 sentences unless more detail is needed
// - Always encourage visitors to get in touch or request a quote for pricing
// - For pricing queries: explain it depends on project scope and guide them to /request-a-quote
// - Mention real contact details (phone/email) when relevant
// - Never make up facts about the company not listed above`;

// export async function POST(req) {
//   try {
//     const { messages } = await req.json();

//     if (!messages || !Array.isArray(messages)) {
//       return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
//     }

//     const apiKey = process.env.ANTHROPIC_API_KEY;
//     if (!apiKey) {
//       return NextResponse.json({ error: "API key not configured" }, { status: 500 });
//     }

//     const response = await fetch("https://api.anthropic.com/v1/messages", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-api-key": apiKey,
//         "anthropic-version": "2023-06-01",   
//       },
//       body: JSON.stringify({
//         model: "claude-sonnet-4-5",
//         max_tokens: 1000,
//         system: SYSTEM_PROMPT,
//         messages: messages.map((m) => ({
//           role: m.role,
//           content: m.content,
//         })),
//       }),
//     });

//     if (!response.ok) {
//       const error = await response.json();
//       return NextResponse.json(
//         { error: error.error?.message || "API error" },
//         { status: response.status }
//       );
//     }

//     const data = await response.json();
//     const reply =
//       data?.content?.find((b) => b.type === "text")?.text ||
//       "Sorry, I couldn't generate a response. Please try again.";

//     return NextResponse.json({ reply });
//   } catch (error) 
//   {
//     console.error("Chat API error:", error);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";
import { QdrantClient } from "@qdrant/js-client-rest";
import { pipeline } from "@xenova/transformers";

// ── Qdrant client (singleton) ──────────────────────────────
const qdrant = new QdrantClient({
  url: process.env.QDRANT_URL || "http://localhost:6333",
  apiKey: process.env.QDRANT_API_KEY,          // undefined = local, fine
});

const COLLECTION = "anthem_qa";

// ── Embedding model (lazy singleton) ──────────────────────
let _embedder = null;
async function getEmbedder() {
  if (!_embedder) {
    _embedder = await pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2"
    );
  }
  return _embedder;
}

// ── Embed a string → float[] ───────────────────────────────
async function embed(text) {
  const embedder = await getEmbedder();
  const out = await embedder(text, { pooling: "mean", normalize: true });
  return Array.from(out.data);
}

// ── Qdrant semantic search → top-k Q&A hits ───────────────
async function searchQdrant(query, topK = 3) {
  try {
    const vector = await embed(query);
    const results = await qdrant.search(COLLECTION, {
      vector,
      limit: topK,
      with_payload: true,
      score_threshold: 0.45,   // ignore low-confidence matches
    });
    return results.map((r) => r.payload);
  } catch (err) {
    console.error("Qdrant search error:", err.message);
    return [];   // graceful fallback — Claude still answers from system prompt
  }
}

// ── Base system prompt ─────────────────────────────────────
const BASE_SYSTEM_PROMPT = `You are an intelligent AI assistant for Anthem Infotech Pvt. Ltd., a professional software product development company based in Zirakpur, Punjab, India. Your role is to help website visitors, answer questions about services, and guide them toward the team.

COMPANY OVERVIEW:
- Name: Anthem Infotech Pvt. Ltd.
- Founded: 2011
- Location: #11, Floor 11, Sushma Infinium, Chandigarh-Ambala Highway, Near Best Price Zirakpur, Punjab – 140603, India
- Phone: +91 9815-34-0123 (Mon–Fri, 9:00 AM – 6:00 PM IST)
- Email: info@antheminfotech.com
- Website: https://antheminfotech.com

SERVICES:
1. Custom Software – CMS, BPM, HRM, Inventory Management, CRM, Financial Systems, Logistics, SCM
2. Web & Mobile Apps – WordPress, iOS, Android, Progressive Web Apps, Hybrid Apps, Web API, App Integration
3. AI-Powered Solutions – Generative AI, AI Chat Integration, Predictive Analytics, NLP, Machine Learning, Deep Learning
4. Marketing Automation – Email Campaigns, Social Media, SEO, PPC, CRM Integration, SMS Marketing
5. MVP Development – Prototyping, UX/UI Design, Agile Development, Testing & QA, Launch Strategy
6. Enterprise Software – Security Solutions, Database Management, System Integration, Workflow Automation
7. Data Analysis & ETL – Data Extraction, Transformation, Loading, Custom Dashboards, Business Intelligence, Big Data
8. UI/UX Design – Web Design, Mobile UI, Prototyping, Brand Design, Responsive Design
9. On-Demand Dedicated Talent – Dedicated Professionals, Remote Developers, Rapid Hiring, Long-Term Partnerships

INDUSTRIES SERVED:
Workforce Compliance, Publishing Rights Management, Financial Audit Compliance, Food Ordering, Information Technology, Business Promotion, HOA Automation, Logistics & Supply Chain, Construction, Healthcare & Medical, Tourism & Travel

KEY STRENGTHS:
- Software Development: 99%
- Web Design: 99%
- Database & API Development: 99%
- Data ETL & Dashboards: 97%
- Generative AI: 92%
- Mobile Applications: 90%

PAGES:
- Services: /services
- Industries: /Home/Industries
- Portfolio: /OurWork
- About Us: /about-us
- Careers: /careers
- Contact: /contact-us
- Get a Quote: /request-a-quote
- FAQs: /faqs

BEHAVIOR GUIDELINES:
- Be professional, warm, and concise
- Keep replies to 2–4 sentences unless more detail is needed
- Always encourage visitors to get in touch or request a quote for pricing
- For pricing queries: explain it depends on project scope and guide them to /request-a-quote
- Mention real contact details (phone/email) when relevant
- Never make up facts about the company not listed above
- If RELEVANT KNOWLEDGE BASE entries are provided below, prioritize them in your answer
 - Always provide full clickable hyperlinks (e.g. https://antheminfotech.com/contact-us) instead of just page names when directing users to any page  // ← ADD THIS
- When suggesting to contact the team, always include both the link AND phone/email together  // ← ADD THIS`;


// ── Build final system prompt with injected RAG context ───
function buildSystemPrompt(hits) {
  if (!hits || hits.length === 0) return BASE_SYSTEM_PROMPT;

  const context = hits
    .map(
      (h, i) =>
        `[${i + 1}] Q: ${h.question}\n    A: ${h.answer}`
    )
    .join("\n\n");

  return `${BASE_SYSTEM_PROMPT}

──────────────────────────────────────
RELEVANT KNOWLEDGE BASE (from company Q&A database):
${context}
──────────────────────────────────────
Use the above entries to give accurate, specific answers. If the answer is there, use it directly.`;
}

// ── POST handler ───────────────────────────────────────────
export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // ── RAG: find the user's latest message and search Qdrant
    const lastUserMsg = [...messages]
      .reverse()
      .find((m) => m.role === "user");

    const hits = lastUserMsg
      ? await searchQdrant(lastUserMsg.content, 3)
      : [];

    const systemPrompt = buildSystemPrompt(hits);

    // ── Call Claude ────────────────────────────────────────
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5",
        max_tokens: 1000,
        system: systemPrompt,          // ← now includes RAG context
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.error?.message || "API error" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const reply =
      data?.content?.find((b) => b.type === "text")?.text ||
      "Sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}