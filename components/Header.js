"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSubscribe } from "@/lib/SubscribeContext";
import SideMenu from "./SideMenu";
import SearchOverlay from "./SearchOverlay";
import NewsTicker from "./NewsTicker";
import TrendingStrip from "./TrendingStrip";
import SocialIcons from "./SocialIcons";

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
  const { open: openSubscribe } = useSubscribe();

  return (
    <>
      <div className="reference-topline">
        <div className="wrap reference-topline-inner">
          <span className="reference-date">August 20, 2026</span>
          <span className="reference-breadcrumb" aria-label="Categories">
            <span>Thursday</span>
          </span>
          <SocialIcons className="reference-socials" links />
        </div>
      </div>

      <header className="reference-header">
        <div className="wrap reference-brand-row">
          <button className="reference-menu" aria-label="Open menu" onClick={() => setMenuOpen(true)}><span /><span /><span /><span /></button>
          <Link href="/" className="reference-logo"><Image src="/logo.svg" alt="PopPulse" width={154} height={34} priority /></Link>
          <div className="reference-utilities">
            <Link href="/about">Advertise</Link>
            <Link href="/contact">Deal</Link>
            <Link href="/contact">Contact</Link>
            <button onClick={openSubscribe}>Newsletter</button>
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
    </>
  );
}
