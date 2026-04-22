// "use client";
// import { useEffect, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useSession, signOut, signIn } from "next-auth/react";

// const BACKEND = process.env.NEXT_PUBLIC_CHAT_API_URL;
// const ADMIN_TOKEN = process.env.NEXT_PUBLIC_ADMIN_SECRET_TOKEN;

// const adminHeaders = {
//   "Content-Type": "application/json",
//   "x-admin-token": ADMIN_TOKEN,
// };

// function AdminPanel() {
//   const { data: session, status } = useSession();
//   const params = useSearchParams();
//   const highlight = params.get("highlight");

//   const [tab, setTab] = useState("unanswered");
//   const [unanswered, setUnanswered] = useState([]);
//   const [knowledge, setKnowledge] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [modal, setModal] = useState(null);
//   const [form, setForm] = useState({});
//   const [saving, setSaving] = useState(false);
//   const [msg, setMsg] = useState("");

//   useEffect(() => {
//     if (status === "unauthenticated") {
//       signIn("google", { callbackUrl: window.location.href });
//     }
//   }, [status]);

//   useEffect(() => {
//     if (status === "authenticated") fetchAll();
//   }, [status]);

//   async function fetchAll() {
//     setLoading(true);
//     try {
//       const [u, k] = await Promise.all([
//         fetch(`${BACKEND}/api/admin/unanswered`, { headers: adminHeaders }).then((r) => r.json()),
//         fetch(`${BACKEND}/api/admin/knowledge`, { headers: adminHeaders }).then((r) => r.json()),
//       ]);
//       setUnanswered(Array.isArray(u) ? u : []);
//       setKnowledge(Array.isArray(k) ? k : []);
//     } catch (e) {
//       console.error("Fetch error:", e);
//       setMsg("❌ Failed to load data from backend");
//     }
//     setLoading(false);
//   }

//   function openAdd(item) {
//     setForm({
//       unansweredId: item.id,
//       question: item.question,
//       answer: "",
//       category: "",
//       tags: "",
//       sourceUrl: "",
//     });
//     setModal({ mode: "add" });
//   }

//   function openEdit(item) {
//     setForm({
//       id: item.id,
//       question: item.question,
//       answer: item.answer,
//       category: item.category || "",
//       tags: item.tags || "",
//       sourceUrl: item.source_url || "",
//     });
//     setModal({ mode: "edit" });
//   }

//   async function handleSave() {
//     setSaving(true);
//     setMsg("");
//     try {
//       const method = modal.mode === "edit" ? "PUT" : "POST";
//       const res = await fetch(`${BACKEND}/api/admin/unanswered`, {
//         method,
//         headers: adminHeaders,
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       if (data.success) {
//         setMsg("✅ Saved successfully!");
//         setModal(null);
//         fetchAll();
//       } else {
//         setMsg("❌ Error: " + (data.error || "Unknown"));
//       }
//     } catch (e) {
//       setMsg("❌ " + e.message);
//     }
//     setSaving(false);
//   }

//   async function handleDelete(id, type) {
//     if (!confirm("Delete this entry? This also removes it from Qdrant.")) return;
//     try {
//       // ✅ knowledge tab deletes from ChatKnowledge, unanswered tab just marks resolved
//       const endpoint = type === "knowledge"
//         ? `${BACKEND}/api/admin/knowledge`
//         : `${BACKEND}/api/admin/unanswered`;

//       const res = await fetch(endpoint, {
//         method: "DELETE",
//         headers: adminHeaders,
//         body: JSON.stringify({ id }),
//       });
//       const data = await res.json();
//       if (data.success) {
//         setMsg("✅ Deleted");
//         fetchAll();
//       } else {
//         setMsg("❌ Error: " + (data.error || "Unknown"));
//       }
//     } catch (e) {
//       setMsg("❌ " + e.message);
//     }
//   }

//   // ✅ Auto-clear message after 3 seconds
//   useEffect(() => {
//     if (msg) {
//       const t = setTimeout(() => setMsg(""), 3000);
//       return () => clearTimeout(t);
//     }
//   }, [msg]);

//   if (status === "loading" || (status === "authenticated" && loading))
//     return (
//       <div style={styles.center}>
//         <div style={styles.spinner} />
//       </div>
//     );

//   return (
//     <div style={styles.page}>
//       {/* Sidebar */}
//       <aside style={styles.sidebar}>
//         <div style={styles.logo}>🤖 Admin</div>
//         <nav>
//           {["unanswered", "knowledge"].map((t) => (
//             <button
//               key={t}
//               onClick={() => setTab(t)}
//               style={{ ...styles.navBtn, ...(tab === t ? styles.navActive : {}) }}
//             >
//               {t === "unanswered" ? "📭 Unanswered" : "📚 Knowledge Base"}
//             </button>
//           ))}
//         </nav>
//         <div style={styles.user}>
//           <div style={styles.avatar}>{session?.user?.name?.[0]}</div>
//           <div style={{ minWidth: 0 }}>
//             <div style={{ fontSize: 12, fontWeight: 500, color: "#e2e8f0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//               {session?.user?.name}
//             </div>
//             <div style={{ fontSize: 11, color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//               {session?.user?.email}
//             </div>
//           </div>
//           <button
//             onClick={() => signOut({ callbackUrl: "/",redirect: true })}
//             style={styles.signOut}
//             title="Sign out"
//           >
//             ↩
//           </button>
//         </div>
//       </aside>

//       {/* Main */}
//       <main style={styles.main}>
//         {msg && <div style={styles.toast}>{msg}</div>}

//         {tab === "unanswered" && (
//           <>
//             <div style={styles.header}>
//               <h1 style={styles.h1}>Unanswered Queries</h1>
//               <span style={styles.badge}>
//                 {unanswered.filter((u) => u.status === "pending").length} pending
//               </span>
//             </div>
//             <div style={styles.table}>
//               <div style={styles.tableHead}>
//                 <span style={{ flex: 3 }}>Question</span>
//                 <span style={{ flex: 1 }}>Status</span>
//                 <span style={{ flex: 1 }}>Date</span>
//                 <span style={{ flex: 1 }}>Actions</span>
//               </div>
//               {unanswered.length === 0 && (
//                 <div style={styles.empty}>No unanswered queries</div>
//               )}
//               {unanswered.map((item) => (
//                 <div
//                   key={item.id}
//                   style={{
//                     ...styles.tableRow,
//                     ...(String(item.id) === highlight ? styles.highlight : {}),
//                   }}
//                 >
//                   <span style={{ flex: 3, fontSize: 13, color: "#e2e8f0" }}>
//                     {item.question}
//                   </span>
//                   <span style={{ flex: 1 }}>
//                     <span style={{
//                       ...styles.pill,
//                       ...(item.status === "pending" ? styles.pillAmber : styles.pillGreen),
//                     }}>
//                       {item.status}
//                     </span>
//                   </span>
//                   <span style={{ flex: 1, fontSize: 12, color: "#64748b" }}>
//                     {new Date(item.createdAt).toLocaleDateString()}
//                   </span>
//                   <span style={{ flex: 1, display: "flex", gap: 6 }}>
//                     {item.status === "pending" && (
//                       <button onClick={() => openAdd(item)} style={styles.btnPrimary}>
//                         + Answer
//                       </button>
//                     )}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {tab === "knowledge" && (
//           <>
//             <div style={styles.header}>
//               <h1 style={styles.h1}>Knowledge Base</h1>
//               <span style={styles.badge}>{knowledge.length} entries</span>
//             </div>
//             <div style={styles.table}>
//               <div style={styles.tableHead}>
//                 <span style={{ flex: 3 }}>Question</span>
//                 <span style={{ flex: 3 }}>Answer</span>
//                 <span style={{ flex: 1 }}>Category</span>
//                 <span style={{ flex: 1 }}>Actions</span>
//               </div>
//               {knowledge.length === 0 && (
//                 <div style={styles.empty}>No entries</div>
//               )}
//               {knowledge.map((item) => (
//                 <div key={item.id} style={styles.tableRow}>
//                   <span style={{ flex: 3, fontSize: 13, color: "#e2e8f0" }}>
//                     {item.question}
//                   </span>
//                   <span style={{
//                     flex: 3, fontSize: 13, color: "#94a3b8",
//                     overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
//                   }}>
//                     {item.answer}
//                   </span>
//                   <span style={{ flex: 1, fontSize: 12, color: "#64748b" }}>
//                     {item.category}
//                   </span>
//                   <span style={{ flex: 1, display: "flex", gap: 6 }}>
//                     <button onClick={() => openEdit(item)} style={styles.btnSecondary}>
//                       Edit
//                     </button>
//                     <button onClick={() => handleDelete(item.id, "knowledge")} style={styles.btnDanger}>
//                       Del
//                     </button>
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </main>

//       {/* Modal */}
//       {modal && (
//         <div style={styles.overlay}>
//           <div style={styles.modalBox}>
//             <h2 style={{ color: "#f1f5f9", fontSize: 18, marginBottom: 20 }}>
//               {modal.mode === "add" ? "Answer Question" : "Edit Entry"}
//             </h2>
//             {["question", "answer", "category", "tags", "sourceUrl"].map((field) => (
//               <div key={field} style={{ marginBottom: 14 }}>
//                 <label style={styles.label}>{field}</label>
//                 {field === "answer" || field === "question" ? (
//                   <textarea
//                     rows={field === "answer" ? 4 : 2}
//                     style={styles.textarea}
//                     value={form[field] || ""}
//                     onChange={(e) => setForm({ ...form, [field]: e.target.value })}
//                   />
//                 ) : (
//                   <input
//                     style={styles.input}
//                     value={form[field] || ""}
//                     onChange={(e) => setForm({ ...form, [field]: e.target.value })}
//                   />
//                 )}
//               </div>
//             ))}
//             <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 20 }}>
//               <button onClick={() => setModal(null)} style={styles.btnSecondary}>
//                 Cancel
//               </button>
//               <button onClick={handleSave} disabled={saving} style={styles.btnPrimary}>
//                 {saving ? "Saving..." : "Save & Sync"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // ✅ Suspense wrapper required for useSearchParams in Next.js 15
// export default function AdminPanelPage() {
//   return (
//     <Suspense fallback={<div style={styles.center}><div style={styles.spinner} /></div>}>
//       <AdminPanel />
//     </Suspense>
//   );
// }

// const styles = {
//   page: { display: "flex", minHeight: "100vh", background: "#0f172a", fontFamily: "system-ui, sans-serif" },
//   sidebar: { width: 220, background: "#1e293b", display: "flex", flexDirection: "column", padding: "24px 0", borderRight: "1px solid #334155" },
//   logo: { fontSize: 18, fontWeight: 700, color: "#f1f5f9", padding: "0 20px 24px", borderBottom: "1px solid #334155" },
//   navBtn: { display: "block", width: "100%", textAlign: "left", background: "none", border: "none", color: "#94a3b8", padding: "12px 20px", fontSize: 13, cursor: "pointer", borderLeft: "3px solid transparent" },
//   navActive: { color: "#e2e8f0", background: "#0f172a", borderLeftColor: "#6366f1" },
//   user: { marginTop: "auto", padding: "16px 20px", borderTop: "1px solid #334155", display: "flex", alignItems: "center", gap: 10 },
//   avatar: { width: 32, height: 32, borderRadius: "50%", background: "#6366f1", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 14, flexShrink: 0 },
//   signOut: { marginLeft: "auto", background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: 16 },
//   main: { flex: 1, padding: "32px 40px", overflowY: "auto" },
//   header: { display: "flex", alignItems: "center", gap: 14, marginBottom: 24 },
//   h1: { fontSize: 22, fontWeight: 600, color: "#f1f5f9", margin: 0 },
//   badge: { background: "#312e81", color: "#a5b4fc", fontSize: 12, padding: "4px 10px", borderRadius: 20 },
//   table: { background: "#1e293b", borderRadius: 10, overflow: "hidden", border: "1px solid #334155" },
//   tableHead: { display: "flex", padding: "12px 16px", background: "#0f172a", fontSize: 12, fontWeight: 500, color: "#64748b", textTransform: "uppercase", letterSpacing: 1 },
//   tableRow: { display: "flex", alignItems: "center", padding: "14px 16px", borderTop: "1px solid #334155", gap: 12 },
//   highlight: { background: "#1e3a5f", borderLeft: "3px solid #6366f1" },
//   empty: { padding: "32px 16px", color: "#64748b", textAlign: "center", fontSize: 14 },
//   pill: { display: "inline-block", fontSize: 11, padding: "3px 8px", borderRadius: 12, fontWeight: 500 },
//   pillAmber: { background: "#451a03", color: "#fbbf24" },
//   pillGreen: { background: "#052e16", color: "#4ade80" },
//   btnPrimary: { background: "#6366f1", color: "#fff", border: "none", borderRadius: 6, padding: "6px 12px", fontSize: 12, cursor: "pointer", fontWeight: 500 },
//   btnSecondary: { background: "#334155", color: "#e2e8f0", border: "none", borderRadius: 6, padding: "6px 12px", fontSize: 12, cursor: "pointer" },
//   btnDanger: { background: "#7f1d1d", color: "#fca5a5", border: "none", borderRadius: 6, padding: "6px 12px", fontSize: 12, cursor: "pointer" },
//   overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 },
//   modalBox: { background: "#1e293b", borderRadius: 12, padding: "32px", width: "100%", maxWidth: 560, border: "1px solid #334155" },
//   label: { display: "block", fontSize: 12, color: "#94a3b8", marginBottom: 6, textTransform: "capitalize" },
//   input: { width: "100%", background: "#0f172a", border: "1px solid #334155", borderRadius: 6, padding: "8px 12px", color: "#f1f5f9", fontSize: 13, boxSizing: "border-box" },
//   textarea: { width: "100%", background: "#0f172a", border: "1px solid #334155", borderRadius: 6, padding: "8px 12px", color: "#f1f5f9", fontSize: 13, resize: "vertical", boxSizing: "border-box" },
//   toast: { background: "#1e3a5f", color: "#93c5fd", padding: "10px 16px", borderRadius: 8, marginBottom: 20, fontSize: 13 },
//   center: { display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "#0f172a" },
//   spinner: { width: 32, height: 32, border: "3px solid #334155", borderTopColor: "#6366f1", borderRadius: "50%", animation: "spin 0.8s linear infinite" },
// };



"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useSession, signOut, signIn } from "next-auth/react";

const BACKEND = process.env.NEXT_PUBLIC_CHAT_API_URL;
const ADMIN_TOKEN = process.env.NEXT_PUBLIC_ADMIN_SECRET_TOKEN;

const adminHeaders = {
  "Content-Type": "application/json",
  "x-admin-token": ADMIN_TOKEN,
};

const styles = {
  page: { display: "flex", minHeight: "100vh", background: "#0f172a", fontFamily: "system-ui, sans-serif" },
  sidebar: { width: 220, background: "#1e293b", display: "flex", flexDirection: "column", padding: "24px 0", borderRight: "1px solid #334155" },
  logo: { fontSize: 18, fontWeight: 700, color: "#f1f5f9", padding: "0 20px 24px", borderBottom: "1px solid #334155" },
  navBtn: { display: "block", width: "100%", textAlign: "left", background: "none", border: "none", color: "#94a3b8", padding: "12px 20px", fontSize: 13, cursor: "pointer", borderLeft: "3px solid transparent" },
  navActive: { color: "#e2e8f0", background: "#0f172a", borderLeftColor: "#6366f1" },
  user: { marginTop: "auto", padding: "16px 20px", borderTop: "1px solid #334155", display: "flex", alignItems: "center", gap: 10 },
  avatar: { width: 32, height: 32, borderRadius: "50%", background: "#6366f1", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 14, flexShrink: 0 },
  signOut: { marginLeft: "auto", background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: 16 },
  main: { flex: 1, padding: "32px 40px", overflowY: "auto" },
  header: { display: "flex", alignItems: "center", gap: 14, marginBottom: 24 },
  h1: { fontSize: 22, fontWeight: 600, color: "#f1f5f9", margin: 0 },
  badge: { background: "#312e81", color: "#a5b4fc", fontSize: 12, padding: "4px 10px", borderRadius: 20 },
  table: { background: "#1e293b", borderRadius: 10, overflow: "hidden", border: "1px solid #334155" },
  tableHead: { display: "flex", padding: "12px 16px", background: "#0f172a", fontSize: 12, fontWeight: 500, color: "#64748b", textTransform: "uppercase", letterSpacing: 1 },
  tableRow: { display: "flex", alignItems: "center", padding: "14px 16px", borderTop: "1px solid #334155", gap: 12 },
  highlight: { background: "#1e3a5f", borderLeft: "3px solid #6366f1" },
  empty: { padding: "32px 16px", color: "#64748b", textAlign: "center", fontSize: 14 },
  pill: { display: "inline-block", fontSize: 11, padding: "3px 8px", borderRadius: 12, fontWeight: 500 },
  pillAmber: { background: "#451a03", color: "#fbbf24" },
  pillGreen: { background: "#052e16", color: "#4ade80" },
  btnPrimary: { background: "#6366f1", color: "#fff", border: "none", borderRadius: 6, padding: "6px 12px", fontSize: 12, cursor: "pointer", fontWeight: 500 },
  btnSecondary: { background: "#334155", color: "#e2e8f0", border: "none", borderRadius: 6, padding: "6px 12px", fontSize: 12, cursor: "pointer" },
  btnDanger: { background: "#7f1d1d", color: "#fca5a5", border: "none", borderRadius: 6, padding: "6px 12px", fontSize: 12, cursor: "pointer" },
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 },
  modalBox: { background: "#1e293b", borderRadius: 12, padding: "32px", width: "100%", maxWidth: 560, border: "1px solid #334155" },
  label: { display: "block", fontSize: 12, color: "#94a3b8", marginBottom: 6, textTransform: "capitalize" },
  input: { width: "100%", background: "#0f172a", border: "1px solid #334155", borderRadius: 6, padding: "8px 12px", color: "#f1f5f9", fontSize: 13, boxSizing: "border-box" },
  textarea: { width: "100%", background: "#0f172a", border: "1px solid #334155", borderRadius: 6, padding: "8px 12px", color: "#f1f5f9", fontSize: 13, resize: "vertical", boxSizing: "border-box" },
  toast: { background: "#1e3a5f", color: "#93c5fd", padding: "10px 16px", borderRadius: 8, marginBottom: 20, fontSize: 13 },
  center: { display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "#0f172a" },
  spinner: { width: 32, height: 32, border: "3px solid #334155", borderTopColor: "#6366f1", borderRadius: "50%", animation: "spin 0.8s linear infinite" },
};
function AdminPanel() {
  const { data: session, status } = useSession();
  const params = useSearchParams();
  const highlight = params.get("highlight");

  const [tab, setTab] = useState("unanswered");
  const [unanswered, setUnanswered] = useState([]);
  const [knowledge, setKnowledge] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  // ✅ Prevent browser back-button showing cached admin page after signout
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  // ✅ Redirect to Google login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("google", { callbackUrl: window.location.href });
    }
  }, [status]);

  useEffect(() => {
    if (status === "authenticated") fetchAll();
  }, [status]);

  async function fetchAll() {
    setLoading(true);
    try {
      const [u, k] = await Promise.all([
        fetch(`${BACKEND}/api/admin/unanswered`, { headers: adminHeaders }).then((r) => r.json()),
        fetch(`${BACKEND}/api/admin/knowledge`, { headers: adminHeaders }).then((r) => r.json()),
      ]);
      setUnanswered(Array.isArray(u) ? u : []);
      setKnowledge(Array.isArray(k) ? k : []);
    } catch (e) {
      console.error("Fetch error:", e);
      setMsg("❌ Failed to load data from backend");
    }
    setLoading(false);
  }

  function openAdd(item) {
    setForm({ unansweredId: item.id, question: item.question, answer: "", category: "", tags: "", sourceUrl: "" });
    setModal({ mode: "add" });
  }

  function openEdit(item) {
    setForm({ id: item.id, question: item.question, answer: item.answer, category: item.category || "", tags: item.tags || "", sourceUrl: item.source_url || "" });
    setModal({ mode: "edit" });
  }

  async function handleSave() {
    setSaving(true);
    setMsg("");
    try {
      const method = modal.mode === "edit" ? "PUT" : "POST";
      const res = await fetch(`${BACKEND}/api/admin/unanswered`, {
        method,
        headers: adminHeaders,
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setMsg("✅ Saved successfully!");
        setModal(null);
        fetchAll();
      } else {
        setMsg("❌ Error: " + (data.error || "Unknown"));
      }
    } catch (e) {
      setMsg("❌ " + e.message);
    }
    setSaving(false);
  }

  async function handleDelete(id, type) {
    if (!confirm("Delete this entry? This also removes it from Qdrant.")) return;
    try {
      const endpoint = type === "knowledge"
        ? `${BACKEND}/api/admin/knowledge`
        : `${BACKEND}/api/admin/unanswered`;
      const res = await fetch(endpoint, {
        method: "DELETE",
        headers: adminHeaders,
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) { setMsg("✅ Deleted"); fetchAll(); }
      else setMsg("❌ Error: " + (data.error || "Unknown"));
    } catch (e) {
      setMsg("❌ " + e.message);
    }
  }

  useEffect(() => {
    if (msg) {
      const t = setTimeout(() => setMsg(""), 3000);
      return () => clearTimeout(t);
    }
  }, [msg]);

  // ✅ Show spinner while loading session
  if (status === "loading")
    return <div style={styles.center}><div style={styles.spinner} /></div>;

  // ✅ Show nothing while redirecting to Google login
  if (status === "unauthenticated")
    return null;

  // ✅ Show spinner while fetching data
  if (loading)
    return <div style={styles.center}><div style={styles.spinner} /></div>;

  return (
    <div style={styles.page}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.logo}>🤖 Admin</div>
        <nav>
          {["unanswered", "knowledge"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{ ...styles.navBtn, ...(tab === t ? styles.navActive : {}) }}
            >
              {t === "unanswered" ? "📭 Unanswered" : "📚 Knowledge Base"}
            </button>
          ))}
        </nav>
        <div style={styles.user}>
          <div style={styles.avatar}>{session?.user?.name?.[0]}</div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: "#e2e8f0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {session?.user?.name}
            </div>
            <div style={{ fontSize: 11, color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {session?.user?.email}
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/", redirect: true })}
            style={styles.signOut}
            title="Sign out"
          >
            ↩
          </button>
        </div>
      </aside>

      {/* Main */}
      <main style={styles.main}>
        {msg && <div style={styles.toast}>{msg}</div>}

        {tab === "unanswered" && (
          <>
            <div style={styles.header}>
              <h1 style={styles.h1}>Unanswered Queries</h1>
              <span style={styles.badge}>
                {unanswered.filter((u) => u.status === "pending").length} pending
              </span>
            </div>
            <div style={styles.table}>
              <div style={styles.tableHead}>
                <span style={{ flex: 3 }}>Question</span>
                <span style={{ flex: 1 }}>Status</span>
                <span style={{ flex: 1 }}>Date</span>
                <span style={{ flex: 1 }}>Actions</span>
              </div>
              {unanswered.length === 0 && <div style={styles.empty}>No unanswered queries</div>}
              {unanswered.map((item) => (
                <div key={item.id} style={{ ...styles.tableRow, ...(String(item.id) === highlight ? styles.highlight : {}) }}>
                  <span style={{ flex: 3, fontSize: 13, color: "#e2e8f0" }}>{item.question}</span>
                  <span style={{ flex: 1 }}>
                    <span style={{ ...styles.pill, ...(item.status === "pending" ? styles.pillAmber : styles.pillGreen) }}>
                      {item.status}
                    </span>
                  </span>
                  <span style={{ flex: 1, fontSize: 12, color: "#64748b" }}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                  <span style={{ flex: 1, display: "flex", gap: 6 }}>
                    {item.status === "pending" && (
                      <button onClick={() => openAdd(item)} style={styles.btnPrimary}>+ Answer</button>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "knowledge" && (
          <>
            <div style={styles.header}>
              <h1 style={styles.h1}>Knowledge Base</h1>
              <span style={styles.badge}>{knowledge.length} entries</span>
            </div>
            <div style={styles.table}>
              <div style={styles.tableHead}>
                <span style={{ flex: 3 }}>Question</span>
                <span style={{ flex: 3 }}>Answer</span>
                <span style={{ flex: 1 }}>Category</span>
                <span style={{ flex: 1 }}>Actions</span>
              </div>
              {knowledge.length === 0 && <div style={styles.empty}>No entries</div>}
              {knowledge.map((item) => (
                <div key={item.id} style={styles.tableRow}>
                  <span style={{ flex: 3, fontSize: 13, color: "#e2e8f0" }}>{item.question}</span>
                  <span style={{ flex: 3, fontSize: 13, color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.answer}</span>
                  <span style={{ flex: 1, fontSize: 12, color: "#64748b" }}>{item.category}</span>
                  <span style={{ flex: 1, display: "flex", gap: 6 }}>
                    <button onClick={() => openEdit(item)} style={styles.btnSecondary}>Edit</button>
                    <button onClick={() => handleDelete(item.id, "knowledge")} style={styles.btnDanger}>Del</button>
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Modal */}
      {modal && (
        <div style={styles.overlay}>
          <div style={styles.modalBox}>
            <h2 style={{ color: "#f1f5f9", fontSize: 18, marginBottom: 20 }}>
              {modal.mode === "add" ? "Answer Question" : "Edit Entry"}
            </h2>
            {["question", "answer", "category", "tags", "sourceUrl"].map((field) => (
              <div key={field} style={{ marginBottom: 14 }}>
                <label style={styles.label}>{field}</label>
                {field === "answer" || field === "question" ? (
                  <textarea
                    rows={field === "answer" ? 4 : 2}
                    style={styles.textarea}
                    value={form[field] || ""}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  />
                ) : (
                  <input
                    style={styles.input}
                    value={form[field] || ""}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  />
                )}
              </div>
            ))}
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 20 }}>
              <button onClick={() => setModal(null)} style={styles.btnSecondary}>Cancel</button>
              <button onClick={handleSave} disabled={saving} style={styles.btnPrimary}>
                {saving ? "Saving..." : "Save & Sync"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminPanelPage() {
  return (
    <Suspense fallback={<div style={styles.center}><div style={styles.spinner} /></div>}>
      <AdminPanel />
    </Suspense>
  );
}

