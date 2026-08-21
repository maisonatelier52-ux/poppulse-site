"use client";

import { useEffect, useRef } from "react";

/*
 * Section-contained sticky card.
 *
 * The card is fixed only while its own section is in the active scroll range.
 * The wrapper keeps the column's footprint, while the complete card moves as
 * one unit. State changes are applied only when the card crosses a boundary;
 * this avoids the visible flicker/jump caused by resetting position on every
 * scroll frame.
 */
export default function SectionContainedSticky({ children, top = 92, className = "" }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content || window.innerWidth < 1000) return;

    const section = wrapper.closest("[data-contained-sticky-section]");
    if (!section) return;

    let raf = 0;
    let active = true;
    let mode = "normal";

    const clearInline = () => {
      content.style.position = "relative";
      content.style.left = "";
      content.style.top = "";
      content.style.width = "100%";
      content.style.transform = "none";
      content.style.zIndex = "";
    };

    const setMode = (nextMode, rect, height, stop, wrapperTop) => {
      if (mode === nextMode && nextMode !== "fixed") return;
      mode = nextMode;

      if (nextMode === "normal") {
        clearInline();
        return;
      }

      if (nextMode === "fixed") {
        content.style.position = "fixed";
        content.style.left = `${Math.round(rect.left)}px`;
        content.style.top = `${top}px`;
        content.style.width = `${Math.round(rect.width)}px`;
        content.style.transform = "translate3d(0, 0, 0)";
        content.style.zIndex = "20";
        return;
      }

      // Bottom state: keep the entire card inside its own section.
      const localTop = Math.max(0, stop - wrapperTop);
      content.style.position = "absolute";
      content.style.left = "0";
      content.style.top = "0";
      content.style.width = "100%";
      content.style.transform = `translate3d(0, ${Math.round(localTop)}px, 0)`;
      content.style.zIndex = "20";
    };

    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!active || window.innerWidth < 1000) return;

        const sectionRect = section.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();
        const height = Math.ceil(contentRect.height);
        if (!height || !wrapperRect.width) return;

        // Preserve the grid column footprint while the card is fixed.
        if (wrapper.offsetHeight !== height) {
          wrapper.style.height = `${height}px`;
        }

        const scrollY = window.scrollY || window.pageYOffset;
        const sectionBottom = sectionRect.bottom + scrollY;
        const wrapperTop = wrapperRect.top + scrollY;

        // Start only when the actual card column reaches the sticky offset.
        const start = wrapperTop - top;
        // Stop early enough that the card's bottom remains inside the section.
        const stop = sectionBottom - height - top;

        let nextMode = "normal";
        if (scrollY >= start && scrollY < stop) nextMode = "fixed";
        else if (scrollY >= stop && sectionBottom > wrapperTop + height) nextMode = "bottom";

        setMode(nextMode, wrapperRect, height, stop, wrapperTop);

        // While fixed, keep the card aligned if a responsive/layout change
        // changes its column width or horizontal position.
        if (nextMode === "fixed") {
          content.style.left = `${Math.round(wrapperRect.left)}px`;
          content.style.width = `${Math.round(wrapperRect.width)}px`;
        }
      });
    };

    const onScroll = () => update();
    const onResize = () => {
      if (window.innerWidth < 1000) {
        mode = "normal";
        clearInline();
        wrapper.style.height = "";
        return;
      }
      mode = "resize";
      clearInline();
      update();
    };

    const observer = new ResizeObserver(update);
    observer.observe(section);
    observer.observe(content);

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      active = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearInline();
      wrapper.style.height = "";
    };
  }, [top]);

  return (
    <div ref={wrapperRef} className={`contained-sticky-wrap ${className}`}>
      <div ref={contentRef} className="contained-sticky-content">
        {children}
      </div>
    </div>
  );
}
