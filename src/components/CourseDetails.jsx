// src/components/CourseDetails.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// === IMAGES (Bachelor cards) ===
import bswImg from "../assets/bws.webp";
import bcaImg from "../assets/bca.webp";
import bbsImg from "../assets/bbs.webp";

// === ICONS (small round) ===
import logoIcon from "../assets/logo.png";

const CourseDetails = () => {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisible((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
          }
        });
      },
      { threshold: 0.25 }
    );
    const cards = document.querySelectorAll(".destination-card");
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // --------- NIC programs (includes +2 with animated visuals) ---------
  const cards = [
    // TU programs (with images)
    {
      image: bswImg,
      icon: logoIcon,
      title: "BSW (Bachelor of Social Work)",
      description:
        "Develop the skills to work with individuals, groups, and communities. BSW at NIC blends fieldwork, research, and ethics to prepare socially responsible professionals.",
      link: "/bsw",
    },
    {
      image: bcaImg,
      icon: logoIcon,
      title: "BCA (Bachelor of Computer Applications)",
      description:
        "Build strong foundations in programming, database systems, web/app development, and problem-solving with hands-on projects aligned to industry needs.",
      link: "/bca",
    },
    {
      image: bbsImg,
      icon: logoIcon,
      title: "BBS (Bachelor of Business Studies)",
      description:
        "Learn accounting, finance, marketing, HR, and analytics. BBS at NIC emphasizes case studies and practical exposure for business decision-making.",
      link: "/bbs",
    },

    // +2 programs (animated, no images)
    {
      kind: "science",
      icon: logoIcon,
      title: "+2 in Science",
      description:
        "Physics, Chemistry, Biology/Computer & Mathematics with labs and practicals to build a solid STEM base.",
      link: "/plus2-science",
    },
    {
      kind: "management",
      icon: logoIcon,
      title: "+2 in Management",
      description:
        "Business studies, accounting, economics & computer to prep you for BBA/BBS/BCA and entrepreneurial paths.",
      link: "/plus2-management",
    },
    {
      kind: "law",
      icon: logoIcon,
      title: "+2 in Law",
      description:
        "Foundations in jurisprudence, civil/criminal basics, legal writing, debating and moots.",
      link: "/plus2-law",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 py-14 px-4 scroll-smooth">
      {/* Section title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-white animate-fadeIn">
          Explore <span className="text-cyan-300">NIC Programs</span>
        </h2>
        <p className="text-blue-100 mt-2">
          Choose from our undergraduate programs and +2 pathways designed for growth and real-world impact
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {cards.map((c, index) => {
          const hasImage = !!c.image;
          return (
            <Link to={c.link} key={index} className="block">
              <div
                data-index={index}
                className={`destination-card relative group rounded-2xl overflow-hidden shadow-md transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                  hasImage ? "bg-white" : "bg-slate-900"
                } ${visible.includes(index) ? "animate-zoomIn opacity-100" : "opacity-0"}`}
              >
                {/* Header visual */}
                <div className="relative">
                  {hasImage ? (
                    <img src={c.image} alt={c.title} className="w-full h-48 object-cover" />
                  ) : (
                    <AnimatedVisual kind={c.kind} />
                  )}

                  {/* round icon badge */}
                  <div
                    className={`absolute -bottom-6 right-5 rounded-full p-1 shadow-lg border-4 ${
                      hasImage ? "bg-white border-slate-100" : "bg-slate-900 border-slate-800"
                    }`}
                  >
                    <img
                      src={c.icon}
                      alt={`${c.title} icon`}
                      className="w-12 h-12 rounded-full object-contain"
                    />
                  </div>

                  {/* dark overlay on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      hasImage ? "bg-black/60" : "bg-black/40"
                    } flex items-center justify-center`}
                  >
                    <span className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-full shadow">
                      Learn more
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 pt-8 text-center ${hasImage ? "" : "text-slate-200"}`}>
                  <h3 className={`text-xl font-bold ${hasImage ? "text-blue-800" : "text-sky-200"}`}>
                    {c.title}
                  </h3>
                  <div
                    className={`mx-auto mt-2 mb-4 h-1 w-16 rounded-full ${
                      hasImage
                        ? "bg-gradient-to-r from-blue-600 to-cyan-400"
                        : "bg-gradient-to-r from-sky-400 to-cyan-300"
                    }`}
                  />
                  <p className={`${hasImage ? "text-slate-700" : "text-slate-300"}`}>{c.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(0.92); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn { animation: zoomIn 0.8s ease-out forwards; }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }

        /* ===== SCIENCE: atom orbits ===== */
        .atom-wrap {
          position: relative; width: 100%; height: 12rem;
          background:
            radial-gradient(60% 80% at 30% 20%, rgba(56,189,248,0.35) 0%, rgba(56,189,248,0) 60%),
            linear-gradient(135deg, #0ea5e9, #0369a1);
        }
        .atom-core { position: absolute; inset: 0; display: grid; place-items: center; }
        .atom-nucleus {
          width: 26px; height: 26px; border-radius: 9999px; background: white;
          box-shadow: 0 0 24px rgba(255,255,255,0.7);
        }
        .orbit {
          position: absolute; left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          border: 1.5px solid rgba(255,255,255,0.45);
          border-radius: 9999px; transform-origin: center;
          animation: orbitTilt 8s ease-in-out infinite;
        }
        .orbit--1 { width: 180px; height: 90px; animation-delay: 0s; }
        .orbit--2 { width: 210px; height: 110px; animation-delay: .3s; }
        .orbit--3 { width: 240px; height: 130px; animation-delay: .6s; }
        @keyframes orbitTilt {
          0%   { transform: translate(-50%, -50%) rotateX(50deg) rotateZ(0deg); }
          50%  { transform: translate(-50%, -50%) rotateX(60deg) rotateZ(180deg); }
          100% { transform: translate(-50%, -50%) rotateX(50deg) rotateZ(360deg); }
        }
        .electron {
          position: absolute; top: 50%; left: 50%;
          width: 10px; height: 10px; border-radius: 9999px; background: #e0f2fe;
          box-shadow: 0 0 12px rgba(224,242,254,0.9);
          transform-origin: -90px 0; animation: electronSpin 3.2s linear infinite;
        }
        .orbit--2 .electron { transform-origin: -105px 0; animation-duration: 4.2s; }
        .orbit--3 .electron { transform-origin: -120px 0; animation-duration: 5.2s; }
        @keyframes electronSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* ===== MANAGEMENT: animated bars ===== */
        .bars-wrap {
          position: relative; width: 100%; height: 12rem;
          background:
            radial-gradient(60% 80% at 70% 30%, rgba(251,113,133,0.35) 0%, rgba(251,113,133,0) 60%),
            linear-gradient(135deg, #f97316, #be185d);
          overflow: hidden;
        }
        .bars-grid {
          position: absolute; inset: 12px;
          display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; align-items: end;
        }
        .bar {
          width: 100%;
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.25));
          border-radius: 10px 10px 4px 4px; box-shadow: 0 6px 16px rgba(0,0,0,0.25);
          transform: translateY(8px); animation: barRise 1.4s ease-out forwards;
        }
        .bar:nth-child(1) { height: 25%; animation-delay: .1s; }
        .bar:nth-child(2) { height: 45%; animation-delay: .2s; }
        .bar:nth-child(3) { height: 35%; animation-delay: .3s; }
        .bar:nth-child(4) { height: 70%; animation-delay: .4s; }
        .bar:nth-child(5) { height: 55%; animation-delay: .5s; }
        .bar:nth-child(6) { height: 85%; animation-delay: .6s; }
        @keyframes barRise { 0% { transform: translateY(16px) scaleY(0.6); opacity: 0; } 100% { transform: translateY(0) scaleY(1); opacity: 1; } }
        .ticker {
          position: absolute; left: 0; right: 0; height: 2px; background: rgba(255,255,255,0.35);
          top: 22%; animation: tickerMove 5s ease-in-out infinite alternate;
        }
        @keyframes tickerMove { 0% { top: 22%; opacity: .6; } 100% { top: 78%; opacity: .3; } }

        /* ===== LAW: SVG sway (more reliable across layouts) ===== */
        .law-sway { transform-origin: 50% 70px; animation: lawWobble 5.2s ease-in-out infinite; }
        @keyframes lawWobble {
          0% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
          100% { transform: rotate(-4deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .law-sway { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default CourseDetails;

/* ---------- Visuals ---------- */
function AnimatedVisual({ kind }) {
  if (kind === "science") {
    return (
      <div className="atom-wrap">
        <div className="atom-core">
          <div className="atom-nucleus" />
          <div className="orbit orbit--1"><span className="electron" /></div>
          <div className="orbit orbit--2"><span className="electron" /></div>
          <div className="orbit orbit--3"><span className="electron" /></div>
        </div>
      </div>
    );
  }

  if (kind === "management") {
    return (
      <div className="bars-wrap">
        <div className="bars-grid">
          <div className="bar" /><div className="bar" /><div className="bar" />
          <div className="bar" /><div className="bar" /><div className="bar" />
        </div>
        <div className="ticker" />
      </div>
    );
  }

  if (kind === "law") {
    // Inline SVG: crisp + reliable; gentle sway via .law-sway
    return (
      <div className="w-full h-48 bg-gradient-to-br from-indigo-500 to-slate-800 relative">
        <svg viewBox="0 0 400 190" className="absolute inset-0 w-full h-full law-sway" aria-hidden="true">
          {/* beam + pillar + ropes + pans */}
          <g transform="translate(200,70)">
            {/* beam */}
            <rect x="-120" y="-3" width="240" height="6" rx="3" fill="rgba(255,255,255,0.9)" />
            {/* pillar */}
            <rect x="-3" y="3" width="6" height="78" rx="3" fill="rgba(255,255,255,0.75)" />
            {/* left ropes */}
            <rect x="-86" y="3" width="2" height="54" fill="rgba(255,255,255,0.85)" />
            <rect x="-66" y="3" width="2" height="54" fill="rgba(255,255,255,0.85)" />
            {/* right ropes */}
            <rect x="64" y="3" width="2" height="54" fill="rgba(255,255,255,0.85)" />
            <rect x="84" y="3" width="2" height="54" fill="rgba(255,255,255,0.85)" />
            {/* left pan */}
            <g transform="translate(-76,58)">
              <rect x="-40" y="0" width="80" height="20" rx="10" fill="rgba(255,255,255,0.95)" />
              <ellipse cx="0" cy="0" rx="46" ry="6" fill="rgba(255,255,255,0.25)" />
            </g>
            {/* right pan */}
            <g transform="translate(76,58)">
              <rect x="-40" y="0" width="80" height="20" rx="10" fill="rgba(255,255,255,0.95)" />
              <ellipse cx="0" cy="0" rx="46" ry="6" fill="rgba(255,255,255,0.25)" />
            </g>
          </g>
          {/* soft glow under beam */}
          <ellipse cx="200" cy="70" rx="180" ry="55" fill="rgba(255,255,255,0.12)" />
        </svg>
      </div>
    );
  }

  // Fallback
  return <div className="w-full h-48 bg-gradient-to-br from-sky-500 to-blue-700" />;
}
