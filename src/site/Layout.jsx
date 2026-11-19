import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { sidebar, social } from "./content";

export const ink = "text-[#161616]";
export const muted = "text-[#252525]/50";
export const underline =
  "underline underline-offset-[3px] decoration-1 hover:text-[#161616] transition-colors duration-200";

// Internal paths go through the router, everything else opens in a new tab.
export const Go = ({ to, className = "", children }) => {
  if (to.startsWith("/")) return <Link to={to} className={className}>{children}</Link>;
  if (to.startsWith("mailto:")) return <a href={to} className={className}>{children}</a>;
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
};

// Soft frosted circle that trails the pointer.
const Cursor = () => {
  const ref = useRef(null);
  const [enabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches
  );

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    let x = -100, y = -100, cx = x, cy = y, scale = 1, target = 1, raf;
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      target = e.target.closest?.("a, button") ? 2 : 1;
    };
    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      scale += (target - scale) * 0.15;
      el.style.transform = `translate3d(${cx - 12}px, ${cy - 12}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 h-6 w-6 rounded-full bg-[#faf7f5]/10 backdrop-blur-[3px] shadow-[0_0_10px_rgba(0,0,0,0.08)]"
    />
  );
};

const SideLink = ({ item, sub }) => {
  const cls = `block text-[#eeedec]/80 hover:text-white transition-colors duration-200 ${
    sub ? "pl-[10px] text-[13.5px] leading-[21px]" : "text-[14px] leading-[22px]"
  }`;
  const target = item.to || item.href;
  if (!target) return <p className={cls}>{item.label}</p>;
  return <Go to={target} className={cls}>{item.label}</Go>;
};

const NavGroups = () =>
  sidebar.map((g) => (
    <div key={g.label}>
      <SideLink item={g} />
      {g.children?.map((c) => <SideLink key={c.label} item={c} sub />)}
    </div>
  ));

// Scroll to #hash after route changes, or to the top on a new page.
const useHashScroll = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const t = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return () => clearTimeout(t);
  }, [pathname, hash]);
};

let introPlayed = false;

const Layout = ({ children, cards = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playIntro] = useState(() => !introPlayed);
  useHashScroll();
  useEffect(() => {
    introPlayed = true;
  }, []);

  return (
    <div id="top" className="min-h-screen bg-black text-[#faf7f5] font-helvetica">
      <Cursor />

      <header className="relative z-20 flex items-center justify-between px-6 h-[60px]">
        <Link to="/" className="text-[20px] md:text-[24px] leading-none">
          <span className="hidden md:inline">Arish Shahab</span>
          <span className="md:hidden">AS</span>
        </Link>
        <nav className="flex items-center gap-4 text-[13.6px]">
          {social.map((s) => (
            <Go key={s.label} to={s.href} className="hover:opacity-60 transition-opacity">
              {s.label}
            </Go>
          ))}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden ml-1 text-[12px]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`inline-block transition-transform ${menuOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4" onClick={() => setMenuOpen(false)}>
          <NavGroups />
        </div>
      )}

      <div className="md:flex">
        <motion.aside
          initial={playIntro ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="hidden md:block w-[220px] shrink-0"
        >
          <div className="sticky top-0 px-6 pt-[34px] space-y-4">
            <NavGroups />
          </div>
        </motion.aside>

        <motion.main
          initial={playIntro ? { y: "100vh" } : { opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={
            playIntro
              ? { duration: 1.1, delay: 0.35, ease: [0.65, 0, 0.35, 1] }
              : { duration: 0.35 }
          }
          className={`flex-1 min-w-0 md:mr-4 md:mb-4 ${cards ? "space-y-[10px]" : ""}`}
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export const Card = ({ className = "", children }) => (
  <div
    className={`bg-[#faf7f5] text-[#252525] rounded-t-[10px] md:rounded-[16px] px-6 md:px-10 ${className}`}
  >
    {children}
  </div>
);

export default Layout;
