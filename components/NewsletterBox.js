"use client";

import { useState } from "react";

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim() || !agreed) return;
    setSubmitted(true);
  }

  return (
    <div className="mag-newsletter">
      <h3>Subscribe Newsletter</h3>
      {!submitted ? (
        <>
          <p>Be the first to know about our newest articles by subscribing to our newsletter!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit" className="btn btn-primary">Sign Up Now</button>
            <label>
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
              />
              <span>I have read and agree to the terms &amp; conditions</span>
            </label>
          </form>
        </>
      ) : (
        <p className="newsletter-success">
          Thanks for subscribing! You&apos;re on the list.
        </p>
      )}
    </div>
  );
}
