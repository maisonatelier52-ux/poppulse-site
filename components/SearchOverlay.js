"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { searchPosts, getCategoryBySlug, formatDate } from "@/lib/data";
import { photo } from "@/lib/images";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const results = searchPosts(query);

  return (
    <div className="search-overlay" role="dialog" aria-label="Search">
      <div className="wrap">
        <div className="search-overlay-top">
          <button className="icon-btn" aria-label="Close search" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.4" />
              <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>

        <div className="search-input-row">
          <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
            <line x1="11.2" y1="11.2" x2="15" y2="15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search posts and topics…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="search-results-wrap">
          {query.trim() === "" && (
            <p className="search-hint">Start typing to search the archive</p>
          )}

          {query.trim() !== "" && (
            <p className="search-hint">
              {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
            </p>
          )}

          {query.trim() !== "" && results.length === 0 && (
            <p className="search-empty">Nothing matched that search. Try a different word or a category name.</p>
          )}

          {results.map((post) => {
            const cat = getCategoryBySlug(post.category);
            return (
              <Link
                href={`/${post.category}/${post.slug}`}
                key={post.slug}
                className="search-result-row"
                onClick={onClose}
              >
                <div className="search-result-media">
                  <Image src={photo(post.image, 200, 200)} alt={post.imageAlt || ""} width={84} height={84} />
                </div>
                <div>
                  <span className="tag" style={{ color: cat?.tint }}>{cat?.name}</span>
                  <h3 className="article-card-title" style={{ fontSize: 18, margin: "6px 0 4px" }}>
                    {post.title}
                  </h3>
                  <span className="meta-row">{formatDate(post.date)}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
