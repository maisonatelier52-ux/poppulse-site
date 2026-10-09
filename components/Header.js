"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SideMenu from "./SideMenu";
import SearchOverlay from "./SearchOverlay";
import NewsTicker from "./NewsTicker";
import TrendingStrip from "./TrendingStrip";
import SocialIcons from "./SocialIcons";
import NewsletterModal from "./NewsletterModal";

const navItems = [
  ["Home", "/"],
  ["Technology", "/technology"],
  ["Business", "/business"],
  ["Politics", "/politics"],
  ["Sports", "/sports"],
  ["World", "/world"],
  ["Finance", "/finance"],
  ["Entertainment", "/entertainment"],
  ["Authors", "/authors"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  return (
    <>
      <div className="reference-topline">
        <div className="wrap reference-topline-inner">
         <span className="reference-date">
  {new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })}
</span>

<span className="reference-breadcrumb" aria-label="Day">
  <span>
    {new Date().toLocaleDateString("en-US", {
      weekday: "long",
    })}
  </span>
</span>
          <SocialIcons className="reference-socials" />
        </div>
      </div>

      <header className="reference-header">
        <div className="wrap reference-brand-row">
          <button className="reference-menu" aria-label="Open menu" onClick={() => setMenuOpen(true)}><span /><span /><span /><span /></button>
          <Link href="/" className="reference-logo"><Image src="/logo.svg" alt="PopPulse" width={154} height={34} priority /></Link>
          <div className="reference-utilities">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
         <button onClick={() => setNewsletterOpen(true)}>Newsletter</button>
            <button className="reference-search" aria-label="Search" onClick={() => setSearchOpen(true)}>⌕</button>
          </div>
        </div>
        <div className="reference-nav-wrap">
          <nav className="wrap reference-nav">
            <button className="reference-grid-menu" aria-label="Open menu" onClick={() => setMenuOpen(true)}><span /><span /><span /><span /></button>
            {navItems.map(([label, href, dropdown], i) => (
              <Link key={`${href}-${label}`} href={href} className={i === 0 ? "active" : ""}>
                <span>{label}</span>{label === "New Look" && <small>Hot</small>}{dropdown && <b>⌄</b>}
              </Link>
            ))}
          
          </nav>
        </div>
        <NewsTicker />
        <TrendingStrip />
      </header>

      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
        <NewsletterModal open={newsletterOpen} onClose={() => setNewsletterOpen(false)} />
    </>
  );
}
