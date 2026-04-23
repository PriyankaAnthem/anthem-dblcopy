

"use client";

import { useState, useRef, useEffect, useCallback } from "react";

function generateId() {
  return Math.random().toString(36).slice(2, 10);
}

const QUICK_PROMPTS = [
  "What services do you offer?",
  "Get a quote",
  "Contact details",
  "View portfolio",
];

const INITIAL_MESSAGE = {
  id: "init",
  role: "assistant",
  content:
    "👋 Hi! I'm Anthem's AI assistant. I can help you learn about our services, industries we serve, or connect you with our team. How can I help you today?",
};

// ── Markdown Parser ───────────────────────────────────────────────────────────
// function parseMarkdown(text) {
//   return text
//     .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
//     .replace(/\*(.*?)\*/g, "<em>$1</em>")
//     .replace(
//       /`(.*?)`/g,
//       '<code style="background:#e0e7ff;color:#4338ca;padding:1px 5px;border-radius:4px;font-size:12px;">$1</code>'
//     )
//     .replace(/\n/g, "<br/>");
// }
function parseMarkdown(text) {
  return text
    // Strip ```json or ``` code fences if Claude sneaks them in
    .replace(/^```[\w]*\n?/gm, "")
    .replace(/```$/gm, "")
    // Claude's __text__ link format → bold (no URL available)
    .replace(/__(.*?)__/g, "<strong>$1</strong>")
    // Bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Italic (only if not inside a word, to avoid breaking URLs)
    .replace(/(?<!\w)\*(?!\s)(.*?)(?<!\s)\*(?!\w)/g, "<em>$1</em>")
    // Inline code
    .replace(
      /`(.*?)`/g,
      '<code style="background:#e0e7ff;color:#4338ca;padding:1px 5px;border-radius:4px;font-size:12px;">$1</code>'
    )
    // Clickable links: [text](url) — must come BEFORE bare URL rule
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#4f46e5;text-decoration:underline;font-weight:500;">$1</a>'
    )
    // Bare URLs (not already inside an href)
    .replace(
      /(?<!href=")(https?:\/\/[^\s<"]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" style="color:#4f46e5;text-decoration:underline;font-weight:500;">$1</a>'
    )
    // Bullet points: lines starting with •
    .replace(
      /(^|\n)(•\s.*?)(?=\n|$)/g,
      '$1<div style="display:flex;gap:6px;margin:3px 0;"><span style="color:#6366f1;flex-shrink:0;">•</span><span>$2</span></div>'
    )
    // Clean up the raw • from the bullet text after wrapping
    .replace(/<span>• /g, "<span>")
    // Double newlines → paragraph break
    .replace(/\n\n/g, '<div style="height:8px"></div>')
    // Single newlines → line break
    .replace(/\n/g, "<br/>");
}
// ── Thinking Dots ─────────────────────────────────────────────────────────────
function ThinkingDots() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "4px 0" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#a5b4fc",
            display: "inline-block",
            animation: "anthemBounce 0.8s ease-in-out infinite",
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}

function SendIcon({ active }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13" stroke={active ? "white" : "#94a3b8"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke={active ? "white" : "#94a3b8"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon({ color = "#64748b" }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6L18 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Message Bubble ────────────────────────────────────────────────────────────
function MessageBubble({ message }) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div style={{ display: "flex", justifyContent: "flex-end", animation: "anthemSlideUp 0.25s ease" }}>
        <div
          className="anthem-msg-user"
          style={{
            maxWidth: "78%",
            padding: "10px 14px",
            borderRadius: "18px 18px 4px 18px",
            background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
            color: "white",
            fontSize: 13,
            lineHeight: 1.65,
            wordBreak: "break-word",
            boxShadow: "0 2px 12px rgba(99,102,241,0.25)",
            fontFamily: '"Open Sans", sans-serif',
          }}
          dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }}
        />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 8, animation: "anthemSlideUp 0.3s ease" }}>
      <div
        className="anthem-msg-bot"
        style={{
          maxWidth: "78%",
          padding: "10px 14px",
          borderRadius: "18px 18px 18px 4px",
          color: "#1e293b",
          fontSize: 13,
          lineHeight: 1.65,
          wordBreak: "break-word",
          border: "1px solid #e2e8f0",
          fontFamily: '"Open Sans", sans-serif',
        }}
        dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }}
      />
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // ── Fix hydration error: only render client-side state after mount
  useEffect(() => {
    setIsMounted(true);
    setHasNotification(true);
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setHasNotification(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleTextareaInput = useCallback((e) => {
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 96) + "px";
  }, []);

  const sendMessage = useCallback(
    async (text) => {
      const content = (text ?? input).trim();
      if (!content || isLoading) return;

      const userMessage = { id: generateId(), role: "user", content };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      if (inputRef.current) inputRef.current.style.height = "auto";

      try {
        const allMessages = [...messages, userMessage];
        const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL;
        const response = await fetch(`${API_URL}/api/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: allMessages.map((m) => ({ role: m.role, content: m.content })),
          }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Request failed");
        setMessages((prev) => [
          ...prev,
          { id: generateId(), role: "assistant", content: data.reply },
        ]);
      } catch (err) {
        setMessages((prev) => [
          ...prev,
          {
            id: generateId(),
            role: "assistant",
            content:
              "Something went wrong. Please try again or contact us at info@antheminfotech.com or +91 9815-34-0123.",
          },
        ]);
        console.error("Chat error:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, messages]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    },
    [sendMessage]
  );

  const canSend = input.trim().length > 0 && !isLoading;

  // ── Prevent SSR/client mismatch (fixes React hydration error #418)
  if (!isMounted) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap');

        @keyframes anthemSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes anthemWindowIn {
          from { opacity: 0; transform: translateY(20px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes anthemPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.5); }
          50%      { box-shadow: 0 0 0 14px rgba(99,102,241,0); }
        }
        @keyframes anthemBounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }

        // .anthem-chat-wrapper {
        //   position: fixed !important;
        //   bottom: 28px !important;
        //   right: 28px !important;
        //   z-index: 99999 !important;
        //   display: flex !important;
        //   flex-direction: column !important;
        //   align-items: flex-end !important;
        //   gap: 12px !important;
        //   pointer-events: none !important;
        //   font-family: "Open Sans", sans-serif !important;
        // }

        .anthem-chat-wrapper {
  position: fixed !important;
  z-index: 99999 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  pointer-events: none !important;
  font-family: "Open Sans", sans-serif !important;
}
        .anthem-chat-wrapper > * {
          pointer-events: all !important;
        }

        .anthem-toggle-btn {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 58px !important;
          height: 58px !important;
          border-radius: 50% !important;
          padding: 0 !important;
          line-height: 1 !important;
          cursor: pointer !important;
          border: none !important;
          outline: none !important;
          position: relative !important;
          transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        }
        .anthem-toggle-btn:hover  { transform: scale(1.08) !important; }
        .anthem-toggle-btn:active { transform: scale(0.95) !important; }
        .anthem-pulse { animation: anthemPulse 2.4s ease-in-out infinite !important; }
        .anthem-window { animation: anthemWindowIn 0.32s cubic-bezier(0.34,1.4,0.64,1) forwards; }

        .anthem-messages-scroll {
          flex: 1 1 0 !important;
          min-height: 0 !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          padding: 16px !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
          background: #ffffff !important;
          scroll-behavior: smooth !important;
        }
        .anthem-messages-scroll::-webkit-scrollbar { width: 4px; }
        .anthem-messages-scroll::-webkit-scrollbar-track { background: #f8fafc; border-radius: 4px; }
        .anthem-messages-scroll::-webkit-scrollbar-thumb { background: #c7d2fe; border-radius: 4px; }
        .anthem-messages-scroll::-webkit-scrollbar-thumb:hover { background: #a5b4fc; }

        .anthem-textarea {
          flex: 1;
          resize: none;
          font-family: "Open Sans", sans-serif;
          font-size: 13px;
          line-height: 1.5;
          color: #1e293b;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 6px 12px;
          max-height:60px;
          min-height: 45px; 
          overflow-y: hidden;
          caret-color: #6366f1;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
        }


      
}
        .anthem-textarea:focus {
          border-color: #6366f1 !important;
          background: #fafbff !important;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.1) !important;
        }
        .anthem-textarea::placeholder { color: #94a3b8; }

        .anthem-quick-btn {
          font-size: 11px;
          padding: 5px 11px;
          border-radius: 20px;
          border: 1.5px solid #c7d2fe;
          background: #eef2ff;
          color: #4338ca;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
          font-family: "Open Sans", sans-serif;
          font-weight: 500;
        }
        .anthem-quick-btn:hover:not(:disabled) {
          background: #e0e7ff;
          border-color: #a5b4fc;
          transform: translateY(-1px);
        }
        .anthem-quick-btn:disabled { opacity: 0.45; cursor: not-allowed; }

        .anthem-send-btn {
          width: 38px !important;
          height: 38px !important;
          border-radius: 50% !important;
          border: none !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;
          cursor: pointer !important;
          transition: all 0.15s ease !important;
          padding: 0 !important;
          outline: none !important;
        }
        .anthem-send-btn:hover:not(:disabled) { transform: scale(1.08) !important; }
        .anthem-send-btn:disabled { cursor: not-allowed !important; }

        .anthem-close-btn {
          width: 30px !important;
          height: 30px !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          transition: all 0.15s ease !important;
          padding: 0 !important;
          flex-shrink: 0 !important;
          border: 1.5px solid #e2e8f0 !important;
          background: rgba(0,0,0,0.04) !important;
          outline: none !important;
        }
        .anthem-close-btn:hover { background: rgba(0,0,0,0.08) !important; }

        /* Markdown styling inside bubbles */
        .anthem-msg-bot strong  { color: #4338ca; font-weight: 600; }
        .anthem-msg-bot em      { color: #6366f1; font-style: italic; }
        .anthem-msg-user strong { color: #e0e7ff; font-weight: 600; }
        .anthem-msg-user em     { color: #c7d2fe; font-style: italic; }
        .anthem-msg-bot a       { color: #4f46e5; text-decoration: underline; font-weight: 500; }
        .anthem-msg-bot a:hover { color: #4338ca; }
        .anthem-msg-user a      { color: #e0e7ff; text-decoration: underline; }
        .anthem-msg-user a:hover { color: #ffffff; }

/* 📱 Mobile Responsive Fix */
@media (max-width: 768px) {
  .anthem-chat-wrapper {
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    transform: none !important;
    align-items: stretch !important;
    justify-content: flex-end !important;
  }

  .anthem-window {
    width: 100% !important;
    height: 100% !important;
    border-radius: 0 !important;
    max-width: 100% !important;
  }

  .anthem-messages-scroll {
    padding: 12px !important;
  }

  .anthem-textarea {
    font-size: 14px !important;
  }

  /* Hide floating button when chat is open on mobile */
  .anthem-toggle-btn {
    position: fixed !important;
    bottom: 16px !important;
    right: 16px !important;
  }

  .anthem-window + .anthem-toggle-btn {
    display: none !important;
  }
}










      `}
      
      
      
      
      
      
      </style>

      <>
  {/* Overlay */}
  {isOpen && (
    <div
      onClick={() => setIsOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.3)",
        zIndex: 99998,
      }}
    />
  )}

  <div
    className="anthem-chat-wrapper"
    style={{
      ...(isOpen
        ? {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            alignItems: "center",
          }
        : {
            bottom: "28px",
            right: "28px",
            alignItems: "flex-end",
          }),
    }}
  >

    {/* ── Chat Window ── */}
    {isOpen && (
      <div
        className="anthem-window"
        onClick={(e) => e.stopPropagation()} // ✅ prevent close on inside click
        // style={{
        //   width: 720,
        //   height: 540,
        //   display: "flex",
        //   flexDirection: "column",
        //   background: "#ffffff",
        //   borderRadius: 24,
        //   border: "1px solid #e2e8f0",
        //   boxShadow:
        //     "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(99,102,241,0.1)",
        //   overflow: "hidden",
        // }}

        style={{
  width: "720px",
  height: "540px",
  maxWidth: "100%",
  maxHeight: "100%",
  display: "flex",
  flexDirection: "column",
  background: "#ffffff",
  borderRadius: 24,
  border: "1px solid #e2e8f0",
  boxShadow:
    "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(99,102,241,0.1)",
  overflow: "hidden",
}}
      >
        {/* Header */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            background: "#ffffff",
            borderBottom: "1px solid #e2e8f0",
            flexShrink: 0,
          }}
        >
          <img
            src="/images/logo/logo.webp"
            alt="Anthem Infotech"
            style={{
              height: 36,
              width: "auto",
              maxWidth: "calc(100% - 50px)",
              objectFit: "contain",
              objectPosition: "left center",
              display: "block",
            }}
          />

         

          <button
            className="anthem-close-btn"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon color="#64748b" />
          </button>
        </div>

        {/* Messages */}
        <div
          ref={messagesContainerRef}
          className="anthem-messages-scroll"
        >
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}

          {isLoading && (
            <div style={{ display: "flex", gap: 8 }}>
              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: "18px 18px 18px 4px",
                  background: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                }}
              >
                <ThinkingDots />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick Prompts */}
        <div
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            padding: "10px 14px 6px",
            borderTop: "1px solid #f1f5f9",
            background: "#fafbff",
          }}
        >
          {QUICK_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => sendMessage(prompt)}
              disabled={isLoading}
              className="anthem-quick-btn"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 8,
            padding: "10px 14px 14px",
            background: "#ffffff",
            borderTop: "1px solid #f1f5f9",
          }}
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onInput={handleTextareaInput}
            placeholder="Type your message..."
            rows={1}
            className="anthem-textarea"
          />

          <button
            onClick={() => sendMessage()}
            disabled={!canSend}
            className="anthem-send-btn"
            style={{
              background: canSend
                ? "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)"
                : "#f1f5f9",
            }}
          >
            <SendIcon active={canSend} />
          </button>
        </div>
      </div>
    )}

    {/* Toggle Button */}
    <button
      onClick={() => setIsOpen((v) => !v)}
      className={`anthem-toggle-btn ${!isOpen ? "anthem-pulse" : ""}`}
      style={{
        background: isOpen
          ? "#f1f5f9"
          : "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
      }}
    >
      {isOpen ? (
        <CloseIcon color="#64748b" />
      ) : (
        <img
          src="/images/chatbot.webp"
          alt="AI"
          style={{ width: 34, height: 34 }}
        />
      )}
    </button>

  </div>
</>
    </>
  );
}