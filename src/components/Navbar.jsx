// src/components/NICSideNavbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FiChevronRight,
  FiChevronDown,
  FiChevronLeft,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

import logo from "../assets/logo.png"; // NIC logo

// ------- MENU (edit labels/paths as needed) -------
const MENU = [
  { label: "Home", to: "/home" },
  { label: "About NIC", to: "/about" },
  {
    label: "Academic Programs",
    to: "/academics",
    children: [
      { label: "Bachelor in Social Work (BSW)", to: "/bsw" },
      { label: "Bachelor in Business Studies (BBS)", to: "/bbs" },
      { label: "Bachelor in Computer Application (BCA)", to: "/bca" },
      { label: "+2 in Science", to: "/plus2-science" },
      { label: "+2 in Management", to: "/plus2-management" },
      { label: "+2 in Law", to: "/plus2-law" },
    ],
  },
  { label: "Programs", to: "/programs" },
  { label: "Student Life", to: "/student-life" },
  { label: "Admission", to: "/admission" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(false); // desktop collapse -> floating minimizer
  const [drawerOpen, setDrawerOpen] = useState(false); // mobile drawer
  const [openAcc, setOpenAcc] = useState({});
  const { pathname } = useLocation();

  // --- refs to manage the 6s auto-peek behavior ---
  const autoTimer = useRef(null);
  const userTouched = useRef(false);

  // close mobile on route change
  useEffect(() => {
    setDrawerOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // lock body scroll when drawer open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = drawerOpen ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev);
  }, [drawerOpen]);

  // ========= DESKTOP AUTO-PEEK: show full sidebar for 6s on first load, then collapse =========
  useEffect(() => {
    const isDesktop =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(min-width: 1024px)").matches
        : true;

    if (!isDesktop) return; // skip on mobile/tablet

    // Start expanded
    setCollapsed(false);

    // Collapse after 6s, unless the user interacts
    autoTimer.current = setTimeout(() => {
      if (!userTouched.current) setCollapsed(true);
    }, 6000);

    return () => {
      if (autoTimer.current) clearTimeout(autoTimer.current);
    };
  }, []);

  // when user toggles collapse manually, cancel auto-timer
  const handleCollapseToggle = () => {
    userTouched.current = true;
    if (autoTimer.current) {
      clearTimeout(autoTimer.current);
      autoTimer.current = null;
    }
    setCollapsed((v) => !v);
  };

  // NIC blue palette
  const nicBlue = {
    base: "#0E71B9",
    dark: "#0A4E86",
    soft: "#E6F2FB",
  };

  // Helpers
  const isActive = (to) => {
    if (to === "/home") return pathname === "/" || pathname.startsWith("/home");
    return pathname.startsWith(to);
  };

  // ------- Reusable panel (desktop & mobile) -------
  const Panel = ({ mobile = false }) => (
    <aside
      className={
        mobile
          ? "relative h-full w-[86%] max-w-[372px] rounded-r-2xl shadow-[0_8px_40px_rgba(0,0,0,0.22)] overflow-hidden"
          : `relative w-[296px] ${
              collapsed ? "md:w-[86px]" : ""
            } rounded-r-2xl shadow-[0_8px_40px_rgba(0,0,0,0.22)] overflow-hidden`
      }
      aria-label="Site navigation"
    >
      {/* Aurora / Nebula glow behind the panel */}
      <div className="absolute -inset-14 -z-10">
        <div className="aurora-layer" />
      </div>

      {/* Glass surface */}
      <div className="backdrop-blur-xl bg-white/80 dark:bg-white/75 h-full">
        {/* Header */}
        <div className="relative">
          <div className="p-4 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="NIC"
                className={`${
                  collapsed ? "h-10 w-10" : "h-16 w-16"
                } object-contain transition-transform duration-300 group-hover:scale-[1.03]`}
              />
              {!collapsed && (
                <div className="leading-tight">
                  <div className="text-[11px] text-slate-600">
                    National Integrated
                  </div>
                  <div className="text-base font-extrabold text-slate-900 tracking-tight">
                    College
                  </div>
                </div>
              )}
            </Link>

            {mobile && (
              <button
                className="ml-auto p-2 rounded-full hover:bg-slate-100 active:scale-95 transition"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <FiX className="text-2xl" />
              </button>
            )}
          </div>

          {/* distinct collapse toggle (desktop only) */}
          {!mobile && (
            <button
              onClick={handleCollapseToggle}
              className="absolute -right-3 top-3 h-9 w-9 grid place-items-center rounded-full
                         bg-white text-slate-900 shadow-lg border border-slate-200
                         ring-2 ring-[#0E71B9]/70 hover:ring-[#0E71B9]
                         hover:shadow-xl active:scale-95 transition"
              title={collapsed ? "Expand" : "Collapse"}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <FiChevronRight
                  size={20}
                  className="drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]"
                />
              ) : (
                <FiChevronLeft
                  size={20}
                  className="drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]"
                />
              )}
            </button>
          )}
        </div>

        {/* blue strip (animated tagline with shine) */}
        {!collapsed && (
          <div
            className="relative text-[13px] font-medium italic px-4 py-2 text-center overflow-hidden select-none border-y border-white/40"
            style={{ backgroundColor: nicBlue.base }}
            aria-hidden="true"
          >
            <span className="relative inline-block bg-gradient-to-r from-white via-[#bfe4ff] to-white bg-[length:200%_100%] bg-clip-text text-transparent font-semibold tracking-wide animate-shimmer">
              Support System that ushers intrinsic motivation in students
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shine" />
            </span>
          </div>
        )}

        {/* SCROLLABLE MENU AREA */}
        <div
          className="px-0 nic-scroll"
          style={{
            maxHeight: "calc(100vh - 198px)", // header + blue strip + socials space
            overflowY: "auto",
          }}
          role="menu"
        >
          {MENU.map((m) => {
            const hasKids = !!m.children?.length;
            const open = !!openAcc[m.to];
            const active = isActive(m.to);

            return (
              <div key={m.to} className="w-full">
                <Link
                  to={m.to || "#"}
                  onClick={(e) => {
                    if (hasKids) {
                      e.preventDefault();
                      setOpenAcc((s) => ({ ...s, [m.to]: !s[m.to] }));
                      userTouched.current = true;
                      if (autoTimer.current) {
                        clearTimeout(autoTimer.current);
                        autoTimer.current = null;
                      }
                    } else {
                      userTouched.current = true;
                    }
                  }}
                  className={`group relative flex items-center justify-between w-full px-4 py-3 font-semibold tracking-wide transition
                    ${active ? "ring-1 ring-inset ring-[#0E71B9]/20" : ""}
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E71B9]/60
                  `}
                  style={{
                    backgroundColor: active
                      ? "rgba(14,113,185,0.09)"
                      : nicBlue.base,
                    color: active ? nicBlue.dark : "white",
                  }}
                  aria-haspopup={hasKids ? "true" : "false"}
                  aria-expanded={hasKids ? open : undefined}
                  role="menuitem"
                >
                  {/* left accent bar (active) + elegant hover shimmer */}
                  <span
                    className={`absolute left-0 top-0 h-full w-[3px] transition-all ${
                      active
                        ? "bg-[#0E71B9]"
                        : "bg-transparent group-hover:bg-white/80"
                    }`}
                    aria-hidden="true"
                  />
                  {/* label with subtle lift on hover (professional) */}
                  <span
                    className={`flex-1 text-left transition-transform duration-200 group-hover:translate-x-[2px]
                                ${active ? "opacity-90" : "opacity-100"}`}
                  >
                    {m.label}
                  </span>

                  {/* right chevron behavior */}
                  {hasKids ? (
                    <span
                      className={`shrink-0 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    >
                      <FiChevronDown
                        className={`${
                          active ? "opacity-80" : "opacity-95"
                        } transition-transform group-hover:translate-x-[1px]`}
                      />
                    </span>
                  ) : (
                    <FiChevronRight className="opacity-0 group-hover:opacity-100 transition group-hover:translate-x-[2px]" />
                  )}

                  {/* subtle overlay on hover for polish */}
                  <span
                    className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-[0.10] transition
                                ${active ? "bg-[#0E71B9]" : "bg-white"}`}
                    aria-hidden="true"
                  />
                </Link>

                {/* CHILDREN (Dropdown) */}
                {hasKids && open && (
                  <div className="bg-white/92 backdrop-blur-sm text-slate-700 border-b border-slate-100">
                    {m.children.map((c) => {
                      const childActive = isActive(c.to);
                      return (
                        <Link
                          key={c.to}
                          to={c.to}
                          className={`group/link relative flex items-center gap-2 px-6 py-2 border-t border-slate-100 transition
                                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E71B9]/40 focus-visible:ring-offset-0
                                      ${
                                        childActive
                                          ? "bg-[rgba(14,113,185,0.08)] text-[#0A4E86] font-semibold"
                                          : "hover:bg-[rgba(14,113,185,0.06)]"
                                      }`}
                          onClick={() => {
                            userTouched.current = true;
                            if (autoTimer.current) {
                              clearTimeout(autoTimer.current);
                              autoTimer.current = null;
                            }
                          }}
                          role="menuitem"
                        >
                          {/* professional hover effect: tiny dot + slide */}
                          <span
                            className={`relative -ml-1 h-1.5 w-1.5 rounded-full transition
                                        ${childActive ? "bg-[#0A4E86]" : "bg-[#0E71B9]/60 group-hover/link:bg-[#0E71B9]"}`}
                            aria-hidden="true"
                          />
                          <span className="flex-1 transition-transform duration-150 group-hover/link:translate-x-[2px]">
                            {c.label}
                          </span>
                          <FiChevronRight className="opacity-0 group-hover/link:opacity-100 transition group-hover/link:translate-x-[2px] text-slate-400" />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Socials */}
        <div className="px-4 py-3 border-t border-white/60 bg-white/70 backdrop-blur">
          <div className={`text-[11px] ${collapsed ? "sr-only" : "block"} text-slate-600`}>
            Connect with NIC
          </div>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://www.facebook.com/niccollege/"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 grid place-items-center rounded-full text-white hover:scale-105 active:scale-95 transition"
              style={{ backgroundColor: nicBlue.base }}
              title="Facebook"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/explore/locations/1028785082/national-integrated-college/"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 grid place-items-center rounded-full text-white hover:scale-105 active:scale-95 transition"
              style={{ backgroundColor: nicBlue.base }}
              title="Instagram"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/channel/UCUrC5dzkGPoKMPOMEY0T4qA"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 grid place-items-center rounded-full text-white hover:scale-105 active:scale-95 transition"
              style={{ backgroundColor: nicBlue.base }}
              title="YouTube"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="https://wa.me/+9779840830551"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 grid place-items-center rounded-full bg-green-600 text-white hover:scale-105 active:scale-95 transition"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* Global CSS: aurora, shimmer, custom scrollbar, reduced-motion */}
      <style>{`
        /* Aurora backdrop */
        .aurora-layer {
          position: absolute;
          inset: -20%;
          filter: blur(36px);
          background:
            radial-gradient(40% 28% at 20% 30%, rgba(14,113,185,0.50) 0%, transparent 60%),
            radial-gradient(38% 30% at 80% 20%, rgba(10,78,134,0.55) 0%, transparent 60%),
            radial-gradient(34% 30% at 50% 80%, rgba(0,163,255,0.40) 0%, transparent 60%),
            conic-gradient(from 180deg at 50% 50%, rgba(14,113,185,0.08), rgba(0,0,0,0) 70%);
          animation: auroraMove 18s ease-in-out infinite alternate;
          opacity: 0.9;
        }
        @keyframes auroraMove {
          0%   { transform: translate3d(-8px, -6px, 0) scale(1); }
          50%  { transform: translate3d(8px, 10px, 0) scale(1.03); }
          100% { transform: translate3d(-6px, 8px, 0) scale(1.01); }
        }

        /* shimmer effect */
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 6s linear infinite;
        }
        /* shine highlight sweep */
        @keyframes shine {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
          background-size: 50% 100%;
          mix-blend-mode: screen;
        }

        /* Firefox scrollbar */
        .nic-scroll { scrollbar-width: thin; scrollbar-color: ${nicBlue.dark} ${nicBlue.soft}; }
        /* WebKit scrollbar */
        .nic-scroll::-webkit-scrollbar { width: 10px; }
        .nic-scroll::-webkit-scrollbar-track { background: ${nicBlue.soft}; border-left: 1px solid rgba(0,0,0,0.05); }
        .nic-scroll::-webkit-scrollbar-thumb { background: ${nicBlue.dark}; border-radius: 8px; border: 2px solid ${nicBlue.soft}; }
        .nic-scroll::-webkit-scrollbar-thumb:hover { background: ${nicBlue.base}; }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .aurora-layer, .animate-shimmer, .animate-shine {
            animation: none !important;
          }
        }
      `}</style>

      {/* ===== FLOATING MINIMIZER (shows when collapsed on desktop) ===== */}
      {collapsed && (
        <button
          className="fixed top-20 left-3 z-[75] hidden lg:grid place-items-center"
          onClick={handleCollapseToggle}
          aria-label="Open sidebar"
          title="Open menu"
        >
          <div className="h-12 w-12 rounded-xl bg-white/90 backdrop-blur shadow-2xl grid place-items-center ring-1 ring-slate-200 hover:scale-105 active:scale-95 transition">
            {/* red hamburger bars */}
            <div className="space-y-[5px]">
              <span className="block h-[3px] w-7 rounded bg-[#b10f0f]" />
              <span className="block h-[3px] w-7 rounded bg-[#b10f0f]" />
              <span className="block h-[3px] w-7 rounded bg-[#b10f0f]" />
            </div>
          </div>
        </button>
      )}

      {/* ===== DESKTOP SIDE PANEL with halo ===== */}
      <div className="hidden lg:block fixed top-0 left-0 z-[60] h-full">
        <div className="relative h-full">
          {/* soft halo behind the whole sidebar for depth */}
          <div className="absolute -left-8 top-10 h-[80%] w-[260px] blur-2xl rounded-3xl bg-[rgba(14,113,185,0.12)] pointer-events-none -z-10" />
          {!collapsed && <Panel />}
        </div>
      </div>

      {/* ===== MOBILE HAMBURGER ===== */}
      <button
        className="fixed top-4 left-4 z-[70] lg:hidden p-2 rounded-md bg-white/95 shadow ring-1 ring-slate-200 active:scale-95 transition"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open menu"
      >
        <FiMenu className="text-2xl" />
      </button>

      {/* ===== MOBILE DRAWER ===== */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Panel mobile />
          </div>
        </div>
      )}

      {/* hidden search input (for focus helper) */}
      <input id="site-search" type="text" className="sr-only" aria-hidden="true" />
    </>
  );
}
