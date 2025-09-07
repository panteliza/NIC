import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import logo from "../assets/logo.png";
import logo1 from "../assets/logo.png"; // sidebar logo
import img1 from "../assets/facebook.png";
import img2 from "../assets/googlemap.png";
import img3 from "../assets/whatsapp.png";

import slide2 from "../assets/bbs.png";
import slide3 from "../assets/bca.png";
import slide4 from "../assets/bws.jpg";

// NAV DATA
const abroad = [
  { path: "/bsw", label: "Bachelor in Social Work (BSW)" },
  { path: "/bbs", label: " Bachelor in Business Studies (BBS)" },
  { path: "/bca", label: "Bachelor in Computer Application (BCA)" },
];

const navLinks = [
  { path: "/contact", label: "CONTACT US" },
  { path: "/gallery", label: "GALLERY" },
  { path: "/notice", label: "NOTICE" },
];

const images = [slide2, slide3, slide4];

export default function NavbarWithSliderOverlay() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);

  // for slide-in motion
  const [drawerMounted, setDrawerMounted] = useState(false);
  const drawerRef = useRef(null);

  const closeSidebar = () => setShowSidebar(false);
  const toggleDropdown1 = () => setShowDropdown1((s) => !s);

  // Body scroll lock when sidebar is open
  useEffect(() => {
    if (showSidebar) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setDrawerMounted(true);
      return () => {
        document.body.style.overflow = prev;
        setDrawerMounted(false);
      };
    }
  }, [showSidebar]);

  // optional: focus first interactive element in drawer
  useEffect(() => {
    if (showSidebar && drawerRef.current) {
      const first = drawerRef.current.querySelector("a,button,[tabindex]");
      first && first.focus?.();
    }
  }, [showSidebar]);

  const renderStudyAbroadDropdown = () => (
    <div className="flex flex-col gap-2">
      {abroad.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className="block px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 transition-all duration-200"
          onClick={closeSidebar}
        >
          {label}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* HERO SLIDER (stays visible even when sidebar opens) */}
      <Swiper
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        modules={[Autoplay]}
        className="w-full h-screen absolute top-0 left-0 z-0"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Darken for readability */}
              <div className="absolute inset-0 bg-black/60" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Top Navbar */}
      <nav className="absolute top-0 left-0 w-full px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center z-10">
        <Link to="/" onClick={() => window.location.reload()}>
          <img
            src={logo}
            alt="Logo"
            className="w-[60px] sm:w-[100px] md:w-[130px] cursor-pointer"
          />
        </Link>

        <div className="hidden lg:flex gap-8 items-center text-md text-white font-extrabold">
          <Link to="/" className="hover:text-blue-300">HOME</Link>
          <Link to="/about" className="hover:text-blue-300">ABOUT</Link>

          <div
            className="relative cursor-pointer"
            onClick={() => setShowDropdown((s) => !s)}
          >
            <div className="flex items-center gap-1 hover:text-blue-300">
              ACADEMIC PROGRAM {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showDropdown && (
              <div className="absolute top-8 bg-white text-gray-800 shadow-md rounded-md mt-2 w-64 z-50">
                {abroad.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block px-4 py-2 hover:bg-[#07A2BB] hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} className="hover:text-blue-300">
              {label}
            </Link>
          ))}

          <div className="flex gap-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={img1} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              <img src={img2} alt="Map" className="h-8 w-8" />
            </a>
            <a href="https://wa.me/+9779801125262" target="_blank" rel="noreferrer">
              <img src={img3} alt="WhatsApp" className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <FiAlignJustify
          className="text-3xl text-white lg:hidden"
          onClick={() => setShowSidebar(true)}
        />
      </nav>

      {/* ===================================== */}
      {/*  OVERLAY + ANIMATED GLASSY SIDEBAR   */}
      {/* ===================================== */}
      {showSidebar && (
        <div className="fixed inset-0 z-[60]">
          {/* Visual animated backdrop (does NOT capture clicks) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* keep background visible with semi-transparency */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f44]/60 via-[#0f3a7b]/55 to-[#0a1f44]/60" />
            {/* animated blobs */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/25 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
            {/* subtle moving grid */}
            <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:24px_24px] animate-grid" />
          </div>

          {/* Click-away area (transparent; blocks page interaction but keeps it visible) */}
          <div
            className="absolute inset-0 bg-transparent"
            onClick={closeSidebar}
            aria-hidden="true"
          />

          {/* Drawer */}
          <aside
            role="dialog"
            aria-modal="true"
            ref={drawerRef}
            className={`relative h-full w-[320px] bg-white/12 backdrop-blur-xl border-r border-white/20 shadow-2xl pointer-events-auto transform transition-transform duration-300 ease-out ${
              drawerMounted ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Neon top edge */}
            <div className="absolute -top-[1px] left-0 right-0 h-[2px] from-cyan-400 via-blue-400 to-indigo-400 bg-gradient-to-r blur-[1px]" />

            <MdOutlineClose
              className="absolute top-4 right-4 text-3xl text-white/90 hover:text-red-400 transition cursor-pointer"
              onClick={closeSidebar}
              aria-label="Close menu"
            />

            {/* Header */}
            <div className="flex items-center gap-3 px-5 pt-6 pb-4 border-b border-white/10">
              <img src={logo1} alt="NIC Logo" className="h-[60px] object-contain rounded-md" />
              <div>
                <h3 className="text-white font-semibold">National Integrated College</h3>
                <p className="text-xs text-white/60">Tribhuvan University • Dillibazar</p>
              </div>
            </div>

            {/* Nav */}
            <nav className="px-4 py-4 flex flex-col gap-2">
              <Link
                to="/"
                className="group flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 transition-all"
                onClick={closeSidebar}
              >
                <span>Home</span>
              
              </Link>

              <Link
                to="/about"
                className="group flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 transition-all"
                onClick={closeSidebar}
              >
                <span>About</span>
               
              </Link>

              {/* Courses dropdown */}
              <div className="rounded-xl bg-white/5 border border-white/10">
                <button
                  onClick={toggleDropdown1}
                  className="w-full flex items-center justify-between px-4 py-3 text-white"
                >
                  <span>Courses</span>
                  {showDropdown1 ? <AiOutlineUp /> : <AiOutlineDown />}
                </button>

                {showDropdown1 && <div className="px-3 pb-3">{renderStudyAbroadDropdown()}</div>}
              </div>

              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 transition-all"
                  onClick={closeSidebar}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Social + CTA */}
            <div className="mt-auto px-5 pb-6 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition"
                  >
                    <img src={img1} alt="Facebook" className="h-5 w-5 object-contain" />
                  </a>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition"
                  >
                    <img src={img2} alt="Map" className="h-5 w-5 object-contain" />
                  </a>
                  <a
                    href="https://wa.me/+9779800000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition"
                  >
                    <img src={img3} alt="WhatsApp" className="h-5 w-5 object-contain" />
                  </a>
                </div>

              
              </div>
            </div>
          </aside>

          {/* Inline keyframes for animations */}
          <style>{`
            @keyframes blob {
              0%   { transform: translate(0,0) scale(1); }
              33%  { transform: translate(30px,-20px) scale(1.1); }
              66%  { transform: translate(-20px,20px) scale(0.9); }
              100% { transform: translate(0,0) scale(1); }
            }
            .animate-blob { animation: blob 18s infinite; }
            .animation-delay-2000 { animation-delay: 2s; }
            .animation-delay-4000 { animation-delay: 4s; }

            @keyframes grid-move {
              0% { background-position: 0 0, 0 0; }
              100% { background-position: 24px 24px, 24px 24px; }
            }
            .animate-grid { animation: grid-move 10s linear infinite; }
          `}</style>
        </div>
      )}
    </div>
  );
}
