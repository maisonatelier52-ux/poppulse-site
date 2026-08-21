"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const SubscribeContext = createContext(null);

export function SubscribeProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Show the popup once per session after a short delay, so it reads
  // as editorial timing rather than an ambush on page load.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.sessionStorage.getItem("poppulse_subscribe_seen");
    if (seen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      window.sessionStorage.setItem("poppulse_subscribe_seen", "1");
    }, 18000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SubscribeContext.Provider value={{ isOpen, open, close }}>
      {children}
    </SubscribeContext.Provider>
  );
}

export function useSubscribe() {
  const ctx = useContext(SubscribeContext);
  if (!ctx) throw new Error("useSubscribe must be used within SubscribeProvider");
  return ctx;
}
