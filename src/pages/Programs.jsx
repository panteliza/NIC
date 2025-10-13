// src/pages/Programs.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Use your existing components
import Navbar from "../components/Navbar";
import FooterNIC from "../components/Footer";

// ====== IMAGES YOU ALREADY HAVE (Bachelor) ======
import bswImg from "../assets/bws.webp";   // BSW hero/image
import bcaImg from "../assets/bca.webp";   // BCA hero/image
import bbsImg from "../assets/bbs.webp";   // BBS hero/image

// Small round icons (reuse logo)
import programIcon from "../assets/logo.png";

export default function Programs() {
    useEffect(() => {
            // Scroll to the top when the page loads
            window.scrollTo(0, 0);
          }, []);
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

    const els = document.querySelectorAll(".program-card");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // --------- Data: Bachelor Programs ---------
  const bachelors = [
    {
      image: bcaImg,
      icon: programIcon,
      title: "BCA (Bachelor of Computer Applications)",
      description:
        "Programming, databases, networking, web & app dev, with hands-on projects aligned to industry.",
      link: "/bca",
    },
    {
      image: bswImg,
      icon: programIcon,
      title: "BSW (Bachelor of Social Work)",
      description:
        "Blend fieldwork, research, and ethics to serve communities with empathy and leadership.",
      link: "/bsw",
    },
    {
      image: bbsImg,
      icon: programIcon,
      title: "BBS (Bachelor of Business Studies)",
      description:
        "Accounting, finance, marketing & analytics with case studies for real business decision-making.",
      link: "/bbs",
    },
  ];

  // --------- Data: +2 Programs (now with custom animated visuals) ---------
  const plusTwo = [
    {
      key: "science",
      icon: programIcon,
      title: "+2 in Science",
      description:
        "Strong foundation in Physics, Chemistry, Biology/Computer & Mathematics with practicals.",
      link: "/plus2-science",
    },
    {
      key: "management",
      icon: programIcon,
      title: "+2 in Management",
      description:
        "Accounting, Economics, Business Studies & Computer for future BBA/BBS/BCA specializations.",
      link: "/plus2-management",
    },
    {
      key: "law",
      icon: programIcon,
      title: "+2 in Law",
      description:
        "Intro to jurisprudence, civil & criminal law basics, writing & debating with moot experiences.",
      link: "/plus2-law",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700" />
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(800px 400px at 20% -10%, rgba(14,113,185,0.35), transparent 60%), radial-gradient(700px 400px at 80% 110%, rgba(56,189,248,0.25), transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Explore Programs at{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              National Integrated College
            </span>
          </h1>
          <p className="mt-4 text-slate-200 max-w-2xl">
            From Tribhuvan University bachelor’s degrees to NEB +2 pathways, choose a program
            that matches your ambition—with guidance, projects, and industry exposure.
          </p>

          {/* Section jump pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#bachelor" className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 ring-1 ring-white/10">
              Bachelor Programs (TU)
            </a>
            <a href="#plus-two" className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 ring-1 ring-white/10">
              +2 Programs (NEB)
            </a>
          </div>
        </div>
      </section>

      {/* ===== BACHELOR SECTION ===== */}
      <section id="bachelor" className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 py-14 px-4">
        <Header
          title="Bachelor Programs (TU)"
          subtitle="Industry-aligned curricula, practical projects, and mentorship"
        />
        <CardsGrid items={bachelors} visible={visible} indexOffset={0} />
      </section>

      {/* ===== +2 SECTION (with custom animations) ===== */}
      <section id="plus-two" className="bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 py-14 px-4">
        <Header
          title="+2 Programs (NEB)"
          subtitle="Strong academic base with counseling, clubs, and competitions"
        />
        <CardsGrid items={plusTwo} visible={visible} indexOffset={100} isPlusTwo />
      </section>

      <FooterNIC />

      {/* Local animations (PLUS TWO) */}
      <style>{`
        /* Shared card reveals */
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
          position: relative;
          width: 100%;
          height: 12rem;
          background:
            radial-gradient(60% 80% at 30% 20%, rgba(56,189,248,0.35) 0%, rgba(56,189,248,0) 60%),
            linear-gradient(135deg, #0ea5e9, #0369a1);
        }
        .atom-core {
          position: absolute; inset: 0;
          display: grid; place-items: center;
        }
        .atom-nucleus {
          width: 28px; height: 28px; border-radius: 9999px;
          background: white; box-shadow: 0 0 24px rgba(255,255,255,0.7);
        }
        .orbit {
          position: absolute; left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          border: 1.5px solid rgba(255,255,255,0.45);
          border-radius: 9999px;
          animation: orbitTilt 8s ease-in-out infinite;
          transform-origin: center;
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
          transform-origin: -90px 0; /* matched to orbit radii */
          animation: electronSpin 3.2s linear infinite;
        }
        .orbit--2 .electron { transform-origin: -105px 0; animation-duration: 4.2s; }
        .orbit--3 .electron { transform-origin: -120px 0; animation-duration: 5.2s; }

        @keyframes electronSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

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
          display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px;
          align-items: end;
        }
        .bar {
          width: 100%;
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.25));
          border-radius: 10px 10px 4px 4px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.25);
          transform: translateY(8px);
          animation: barRise 1.4s ease-out forwards;
        }
        .bar:nth-child(1) { height: 25%; animation-delay: .1s; }
        .bar:nth-child(2) { height: 45%; animation-delay: .2s; }
        .bar:nth-child(3) { height: 35%; animation-delay: .3s; }
        .bar:nth-child(4) { height: 70%; animation-delay: .4s; }
        .bar:nth-child(5) { height: 55%; animation-delay: .5s; }
        .bar:nth-child(6) { height: 85%; animation-delay: .6s; }

        @keyframes barRise {
          0% { transform: translateY(16px) scaleY(0.6); opacity: 0; }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }

        /* subtle ticker line */
        .ticker {
          position: absolute; left: 0; right: 0; height: 2px; background: rgba(255,255,255,0.35);
          top: 22%;
          animation: tickerMove 5s ease-in-out infinite alternate;
        }
        @keyframes tickerMove {
          0% { top: 22%; opacity: .6; }
          100% { top: 78%; opacity: .3; }
        }

        /* ===== LAW: balancing scales ===== */
        .law-wrap {
          position: relative; width: 100%; height: 12rem;
          background:
            radial-gradient(60% 80% at 30% 70%, rgba(167,139,250,0.35) 0%, rgba(167,139,250,0) 60%),
            linear-gradient(135deg, #6366f1, #1e293b);
        }
        .scale {
          position: absolute; inset: 0; display: grid; place-items: center;
        }
        .beam {
          width: 200px; height: 4px; background: rgba(255,255,255,0.8);
          border-radius: 9999px;
          transform-origin: 50% 50%;
          animation: wobble 5s ease-in-out infinite;
          position: relative;
        }
        .pillar {
          position: absolute; left: 50%; transform: translateX(-50%);
          bottom: -44px; width: 6px; height: 70px; background: rgba(255,255,255,0.75);
          border-radius: 3px;
        }
        .rope {
          position: absolute; width: 2px; height: 48px; background: rgba(255,255,255,0.7);
          top: 2px;
        }
        .rope.left { left: 24px; transform-origin: top; }
        .rope.right { right: 24px; transform-origin: top; }
        .pan {
          position: absolute; width: 70px; height: 18px; background: rgba(255,255,255,0.92);
          bottom: -50px; border-radius: 10px; box-shadow: 0 6px 16px rgba(0,0,0,0.25);
        }
        .pan.left { left: -11px; }
        .pan.right { right: -11px; }

        @keyframes wobble {
          0% { transform: rotate(-6deg); }
          50% { transform: rotate(6deg); }
          100% { transform: rotate(-6deg); }
        }
      `}</style>
    </>
  );
}

/* ---------- Subcomponents ---------- */

function Header({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white animate-fadeIn">
        {title}
      </h2>
      <p className="text-blue-100 mt-2">{subtitle}</p>
    </div>
  );
}

/* Renders the header visual area for each card */
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
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <div className="ticker" />
      </div>
    );
  }
  if (kind === "law") {
    return (
      <div className="law-wrap">
        <div className="scale">
          <div className="beam">
            <span className="pillar" />
            <span className="rope left" />
            <span className="rope right" />
            <span className="pan left" />
            <span className="pan right" />
          </div>
        </div>
      </div>
    );
  }
  // Fallback gradient
  return <div className="w-full h-48 bg-gradient-to-br from-sky-500 to-blue-700" />;
}

function CardsGrid({ items, visible, indexOffset = 0, isPlusTwo = false }) {
  return (
    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {items.map((c, idx) => {
        const index = indexOffset + idx;
        const isVisible = visible.includes(index);

        // Derive visual kind for +2 cards
        const kind = isPlusTwo ? (c.key || inferKindFromTitle(c.title)) : null;

        return (
          <Link to={c.link} key={index} className="block">
            <div
              data-index={index}
              className={`program-card relative group rounded-2xl overflow-hidden shadow-md transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible ? "animate-zoomIn opacity-100" : "opacity-0"
              } ${isPlusTwo ? "bg-slate-900" : "bg-white"}`}
            >
              {/* Header visual: image or animated theme */}
              <div className="relative">
                {!isPlusTwo && c.image ? (
                  <img src={c.image} alt={c.title} className="w-full h-48 object-cover" />
                ) : (
                  <AnimatedVisual kind={kind} />
                )}

                {/* round icon badge */}
                <div
                  className={`absolute -bottom-6 right-5 rounded-full p-1 shadow-lg border-4 
                             ${isPlusTwo ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"}`}
                >
                  <img
                    src={c.icon}
                    alt={`${c.title} icon`}
                    className="w-12 h-12 rounded-full object-contain"
                  />
                </div>

                {/* overlay on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                              ${isPlusTwo ? "bg-black/40" : "bg-black/50"} flex items-center justify-center`}
                >
                  <span className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-full shadow">
                    Learn more
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 pt-8 text-center ${isPlusTwo ? "text-slate-200" : ""}`}>
                <h3 className={`text-xl font-bold ${isPlusTwo ? "text-sky-200" : "text-blue-800"}`}>
                  {c.title}
                </h3>
                <div
                  className={`mx-auto mt-2 mb-4 h-1 w-16 rounded-full 
                              ${isPlusTwo ? "bg-gradient-to-r from-sky-400 to-cyan-300" : "bg-gradient-to-r from-blue-600 to-cyan-400"}`}
                />
                <p className={`${isPlusTwo ? "text-slate-300" : "text-slate-700"}`}>{c.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function inferKindFromTitle(title = "") {
  const t = title.toLowerCase();
  if (t.includes("science")) return "science";
  if (t.includes("management")) return "management";
  if (t.includes("law")) return "law";
  return "science";
}
