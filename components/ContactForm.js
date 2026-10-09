"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 10 }}>Message sent</h2>
        <p style={{ color: "var(--slate)" }}>
          Thanks for writing in — the right desk will get back to you within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 520 }}>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>Name</span>
        <input
          required
          type="text"
          style={{ padding: "12px 14px", border: "1px solid var(--line)", borderRadius: 2, fontFamily: "var(--font-body)", fontSize: 15 }}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>Email</span>
        <input
          required
          type="email"
          style={{ padding: "12px 14px", border: "1px solid var(--line)", borderRadius: 2, fontFamily: "var(--font-body)", fontSize: 15 }}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>Message</span>
        <textarea
          required
          rows={6}
          style={{ padding: "12px 14px", border: "1px solid var(--line)", borderRadius: 2, fontFamily: "var(--font-body)", fontSize: 15, resize: "vertical" }}
        />
      </label>
      <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
        Send message
      </button>
    </form>
  );
}
