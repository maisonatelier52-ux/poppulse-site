"use client";

import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data";
import { useSubscribe } from "@/lib/SubscribeContext";
import SocialIcons from "./SocialIcons";

export default function SideMenu({ open, onClose }) {
  const { open: openSubscribe } = useSubscribe();

  return (
    <>
      <div
        className={`side-menu-overlay${open ? " is-open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`side-menu-panel${open ? " is-open" : ""}`}
        aria-label="Site menu"
      >
        <div className="side-menu-top">
          <Image src="/logo-inverse.svg" alt="PopPulse" width={118} height={25} />
          <button className="side-menu-close" aria-label="Close menu" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.4" />
              <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>

        <nav className="side-menu-nav" onClick={onClose}>
          <Link href="/">Home</Link>
          <Link href="/authors">Authors</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div>
          <div className="side-menu-section-title">Sections</div>
          <div className="side-menu-categories" onClick={onClose}>
            {categories.map((c) => (
              <Link key={c.slug} href={`/${c.slug}`}>
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="side-menu-footer">
          <button
            className="btn btn-outline-paper"
            onClick={() => {
              onClose();
              openSubscribe();
            }}
          >
            Subscribe
          </button>
          <SocialIcons className="side-menu-social" links />
        </div>
      </aside>
    </>
  );
}
