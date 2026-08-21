"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSubscribe } from "@/lib/SubscribeContext";

export default function SubscribePopup() {
  const { isOpen, close } = useSubscribe();
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") close();
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setEmail("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <div className="popup-overlay" role="dialog" aria-modal="true" onClick={close}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" aria-label="Close" onClick={close}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.4" />
            <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>

        <div className="popup-mark">
          <Image src="/favicon.svg" alt="" width={40} height={40} />
        </div>

        {!submitted ? (
          <>
            <h3 className="popup-title">Keep reading, weekly.</h3>
            <p className="popup-copy">
              One email, every Friday: the five PopPulse stories worth your time, chosen by
              the desk — not an algorithm.
            </p>
            <form className="popup-form" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Subscribe for free
              </button>
            </form>
          </>
        ) : (
          <>
            <h3 className="popup-title">You&rsquo;re on the list.</h3>
            <p className="popup-success">
              Look out for the next Friday dispatch in your inbox.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
