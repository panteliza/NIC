import React, { useMemo } from "react";

/** === edit your content here === */
const DIRECTORS = [
  { name: "Prof. Anil Shrestha", role: `Chairman\nFormer Principal, NIC College\nAcademic Council Head` },
  { name: "Dr. Meera Koirala", role: `Executive Director\nResearch Coordinator\nBoard Member, NIC Foundation` },
  { name: "Mr. Ramesh Adhikari", role: `Director\nFinance Committee Head\nLecturer, Management Department` },
  { name: "Mrs. Pooja Gurung", role: `Director\nAlumni Coordinator\nCultural Program Advisor` },
  { name: "Dr. Sandeep Maharjan", role: `Director\nProfessor, Computer Science\nInnovation Hub Mentor` },
  { name: "Ms. Kritika Joshi", role: `Director\nStudent Welfare Council\nCareer Development Officer` },
  { name: "Mr. Prabin Tamang", role: `Director\nSports Committee Coordinator` },
];

const BoardOfDirectors = () => {
  // lightweight particle positions (generated once)
  const particles = useMemo(() => {
    const N = 30;
    return Array.from({ length: N }, () => ({
      left: Math.random() * 100,          // %
      size: 2 + Math.random() * 3,        // px
      delay: -Math.random() * 12,         // s
      duration: 10 + Math.random() * 14,  // s
      opacity: 0.15 + Math.random() * 0.25,
    }));
  }, []);

  return (
    <section className="relative overflow-hidden py-14 px-4 sm:px-8 lg:px-16">
      {/* Base gradient */}
      <div className="absolute inset-0 -z-40"
           style={{ background: "linear-gradient(180deg,#0a1328 0%,#0e1f44 55%,#0b1734 100%)" }} />

      {/* Animated diagonal light beams */}
      <div className="absolute inset-0 -z-30 pointer-events-none beams">
        <span className="beam b1" />
        <span className="beam b2" />
        <span className="beam b3" />
      </div>

      {/* Moving hex mesh (SVG) */}
      <div className="absolute inset-0 -z-20 pointer-events-none hex-wrap">
        <svg className="hex-svg" viewBox="0 0 1200 800" aria-hidden="true">
          <defs>
            <pattern id="hex" width="60" height="52" patternUnits="userSpaceOnUse"
                     patternTransform="translate(0,0)">
              {/* hexagon path (stroke only) */}
              <path d="M30 2 L58 15 L58 37 L30 50 L2 37 L2 15 Z"
                    fill="none" stroke="rgba(160,180,210,0.18)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#hex)" />
        </svg>
      </div>

      {/* Rising particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Board of Directors
        </h2>
        <p className="mt-2 text-center text-slate-200/85 text-sm">
          Experienced leadership, student-first decisions.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {DIRECTORS.map((d, i) => (
            <div key={i} className="group rounded-xl p-[1px] bg-gradient-to-br from-sky-300/20 via-indigo-300/10 to-emerald-300/20">
              <div className="rounded-xl bg-white/95 p-6 shadow-md transition-transform duration-400 md:group-hover:-translate-y-1">
                <h3 className="text-slate-900 font-semibold text-lg">{d.name}</h3>
                <p className="mt-2 text-sm text-slate-700 whitespace-pre-line">{d.role}</p>
                {/* calm top glow line */}
                <span className="mt-4 block h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400/60 to-transparent animate-line" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles (scoped) */}
      <style>{`
        /* accessibility */
        @media (prefers-reduced-motion: reduce) {
          .beams .beam, .hex-wrap .hex-svg, .particle, .animate-line { animation: none !important; }
        }

        /* beams */
        .beams { overflow: hidden; }
        .beam {
          position: absolute;
          top: -20%;
          height: 140%;
          width: 22%;
          filter: blur(18px);
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(148,163,184,0.35) 50%, rgba(255,255,255,0) 100%);
          transform: rotate(-18deg);
          opacity: 0.35;
          will-change: transform, opacity;
          animation: beam-scan 14s ease-in-out infinite;
        }
        .beam.b1 { left: -10%; animation-duration: 16s; }
        .beam.b2 { left: 25%;  animation-duration: 18s; animation-direction: reverse; opacity: .28; }
        .beam.b3 { left: 60%;  animation-duration: 20s; }

        @keyframes beam-scan {
          0%   { transform: rotate(-18deg) translateX(-6%); opacity: .28; }
          50%  { transform: rotate(-18deg) translateX(6%);  opacity: .42; }
          100% { transform: rotate(-18deg) translateX(-6%); opacity: .28; }
        }

        /* hex mesh slow drift */
        .hex-wrap { overflow: hidden; opacity: .9; mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent); }
        .hex-svg { width: 140%; height: 140%; position: absolute; left: -20%; top: -20%; animation: hex-pan 40s linear infinite; }
        @keyframes hex-pan {
          0%   { transform: translate3d(0, 0, 0) }
          50%  { transform: translate3d(3%, 3%, 0) }
          100% { transform: translate3d(0, 0, 0) }
        }

        /* particles */
        .particle {
          position: absolute;
          bottom: -10px;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.9), rgba(255,255,255,.1));
          box-shadow: 0 0 10px rgba(255,255,255,.15);
          animation: rise linear infinite;
          will-change: transform, opacity;
        }
        @keyframes rise {
          0%   { transform: translateY(0) translateX(0); opacity: .05; }
          10%  { opacity: .35; }
          100% { transform: translateY(-110%) translateX(-6px); opacity: 0; }
        }

        /* line sweep on cards */
        @keyframes line-sweep {
          0%   { transform: translateX(-20%); opacity: .25; }
          50%  { transform: translateX(0%);   opacity: .85; }
          100% { transform: translateX(20%);  opacity: .25; }
        }
        .animate-line { animation: line-sweep 3.8s ease-in-out infinite; }

        /* small polish for touch devices */
        @media (hover: none) {
          .md\\:group-hover\\:-translate-y-1 { transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default BoardOfDirectors;
