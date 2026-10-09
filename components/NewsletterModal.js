"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function NewsletterModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const inputRef = useRef(null);

  // focus input, lock page scroll, close on Escape
  useEffect(() => {
    if (!open) {
      setEmail("");
      setStatus("idle");
      return;
    }
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      // TODO: replace with your real endpoint / provider
      // await fetch("/api/subscribe", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="nl-overlay" onClick={onClose}>
      <div
        className="nl-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nl-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="nl-close" aria-label="Close" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.2" />
            <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>

        <Image src="/favicon.svg" alt="PopPulse" width={50} height={48} className="nl-logo" />

        <h2 id="nl-title" className="nl-title">Keep reading, weekly.</h2>
        <p className="nl-text">
          One email, every Friday: the five PopPulse stories worth your time,
          chosen by the desk — not an algorithm.
        </p>

        {status === "success" ? (
          <p className="nl-success">Thanks! You&apos;re subscribed. See you Friday.</p>
        ) : (
          <form onSubmit={handleSubmit} className="nl-form">
            <input
              ref={inputRef}
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="nl-input"
            />
            <button type="submit" className="nl-submit" disabled={status === "loading"}>
              {status === "loading" ? "Subscribing…" : "Subscribe for free"}
            </button>
            {status === "error" && (
              <p className="nl-error">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}