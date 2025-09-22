// src/components/NICSideNavbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiSearch,
  FiChevronRight,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png"; // NIC logo

// ------- MENU (edit labels/paths as needed) -------
const MENU = [
  { label: "Academic Calendar +2", to: "/calendar" },
  { label: "Club Membership", to: "/clubs" },
  { label: "Grade XI Orientation Program", to: "/orientation" },
  { label: "First Term Exam", to: "/first-term-exam" },
  { label: "About NIC", to: "/about" },
  {
    label: "Academic Programs",
    to: "/academics",
    children: [
      { label: "Bachelor in Social Work (BSW)", to: "/bsw" },
      { label: "Bachelor in Business Studies (BBS)", to: "/bbs" },
      { label: "Bachelor in Computer Application (BCA)", to: "/bca" },
    ],
  },
  { label: "Student Life", to: "/student-life" },
  { label: "Admission", to: "/admission" },
];

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(false); // desktop collapse -> floating minimizer
  const [drawerOpen, setDrawerOpen] = useState(false); // mobile drawer
  const [openAcc, setOpenAcc] = useState({});
  const { pathname } = useLocation();

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

  // NIC blue palette
  const nicBlue = {
    base: "#0E71B9",
    dark: "#0A4E86",
    soft: "#E6F2FB",
  };

  // ------- Reusable panel (desktop & mobile) -------
  const Panel = ({ mobile = false }) => (
    <aside
      className={
        mobile
          ? "h-full w-[86%] max-w-[368px] bg-white rounded-r-2xl shadow-xl overflow-hidden"
          : `w-[286px] ${collapsed ? "md:w-[86px]" : ""} bg-white/95 rounded-r-2xl shadow-xl overflow-hidden`
      }
    >
      {/* Header */}
      <div className="relative">
        <div className="p-4 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="NIC"
              className={`${collapsed ? "h-10 w-10" : "h-16 w-16"} object-contain`}
            />
            {!collapsed && (
              <div className="leading-tight">
                <div className="text-xs text-slate-600">National Integrated</div>
                <div className="text-base font-bold text-slate-900">College</div>
              </div>
            )}
          </Link>

          {mobile && (
            <button
              className="ml-auto p-2 rounded-full hover:bg-slate-100"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <FiX className="text-2xl" />
            </button>
          )}
        </div>

        {/* tiny collapse toggle (desktop only) */}
        {!mobile && (
          <button
            onClick={() => setCollapsed((v) => !v)}
            className="absolute -right-3 top-3 h-7 w-7 grid place-items-center rounded-full bg-white text-[#b10f0f] shadow-lg border border-slate-200"
            title={collapsed ? "Expand" : "Collapse"}
          >
            {collapsed ? "›" : "‹"}
          </button>
        )}
      </div>

      {/* blue strip */}
      {!collapsed && (
        <div
          className="text-[13px] font-medium text-white px-4 py-2"
          style={{ backgroundColor: nicBlue.base }}
        >
          Education for the Future
        </div>
      )}

      {/* Search row */}
      <button
        className="w-full flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-100"
        onClick={() => document.getElementById("site-search")?.focus()}
      >
        <FiSearch />
        {!collapsed && <span>Search</span>}
      </button>

      {/* SCROLLABLE MENU AREA */}
      <div
        className="px-0"
        style={{
          maxHeight: "calc(100vh - 188px)", // header + blue strip + search + socials space
          overflowY: "auto",
        }}
      >
        {MENU.map((m) => {
          const hasKids = !!m.children?.length;
          const open = !!openAcc[m.to];

          return (
            <div key={m.to} className="w-full">
              <Link
                to={m.to || "#"}
                onClick={(e) => {
                  if (hasKids) {
                    e.preventDefault();
                    setOpenAcc((s) => ({ ...s, [m.to]: !s[m.to] }));
                  }
                }}
                className="group flex items-center justify-between w-full px-4 py-3 font-medium tracking-wide transition"
                style={{ backgroundColor: nicBlue.base, color: "white" }}
              >
                <span className="flex-1 text-left">{m.label}</span>
                {hasKids ? (
                  open ? (
                    <FiChevronDown className="shrink-0 opacity-90" />
                  ) : (
                    <FiChevronRight className="shrink-0 opacity-90" />
                  )
                ) : (
                  <FiChevronRight className="opacity-0 group-hover:opacity-100 transition" />
                )}
              </Link>

              {hasKids && open && (
                <div className="bg-white text-slate-700">
                  {m.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="block px-6 py-2 border-t border-slate-100 hover:bg-[rgba(14,113,185,0.06)]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Socials */}
      <div className="px-4 py-3 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 grid place-items-center rounded-full text-white"
            style={{ backgroundColor: nicBlue.base }}
            title="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 grid place-items-center rounded-full text-white"
            style={{ backgroundColor: nicBlue.base }}
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 grid place-items-center rounded-full text-white"
            style={{ backgroundColor: nicBlue.base }}
            title="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="ml-auto h-9 w-9 grid place-items-center rounded-full bg-slate-900 text-white"
            title="Find us"
          >
            <FaMapMarkerAlt />
          </a>
          <a
            href="https://wa.me/+9779801125262"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 grid place-items-center rounded-full bg-green-600 text-white"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* ===== FLOATING MINIMIZER (Trinity style) - shows when collapsed ===== */}
      {collapsed && (
        <button
          className="fixed top-20 left-3 z-[75] hidden lg:grid place-items-center"
          onClick={() => setCollapsed(false)}
          aria-label="Open sidebar"
          title="Open menu"
        >
          <div className="h-12 w-12 rounded-md bg-white shadow-xl grid place-items-center">
            {/* red hamburger bars */}
            <div className="space-y-[5px]">
              <span className="block h-[3px] w-7 rounded bg-[#b10f0f]" />
              <span className="block h-[3px] w-7 rounded bg-[#b10f0f]" />
              <span className="block h-[3px] w-7 rounded bg-[#b10f0f]" />
            </div>
          </div>
        </button>
      )}

      {/* ===== DESKTOP SIDE PANEL ===== */}
      <div className="hidden lg:block fixed top-0 left-0 z-[60] h-full">
        {!collapsed && <Panel />}
      </div>

      {/* ===== MOBILE HAMBURGER ===== */}
      <button
        className="fixed top-4 left-4 z-[70] lg:hidden p-2 rounded-md bg-white/95 shadow"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open menu"
      >
        <FiMenu className="text-2xl" />
      </button>

      {/* ===== MOBILE DRAWER ===== */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-black/50"
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
