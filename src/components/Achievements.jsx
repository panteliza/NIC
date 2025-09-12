import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaBriefcase, FaGlobe, FaUserTie, FaUsers } from "react-icons/fa";

/* ===== NIC stats (edit values) ===== */
const stats = [
  { icon: <FaUsers size={28} />,        label: "Active Students",            value: 1800, suffix: "+", color: "bg-slate-700" },
  { icon: <FaUserGraduate size={28} />, label: "Programs (BSW • BCA • BBS)",  value: 3,    suffix: "",  color: "bg-slate-700" },
  { icon: <FaBriefcase size={28} />,    label: "Placement / Internship",      value: 82,   suffix: "%", color: "bg-slate-700" },
  { icon: <FaGlobe size={28} />,        label: "Partners & MoUs",             value: 40,   suffix: "+", color: "bg-slate-700" },
  { icon: <FaUserTie size={28} />,      label: "Faculty Mentors",             value: 45,   suffix: "+", color: "bg-slate-700" },
];

/* animated counter */
const CountUp = ({ end, suffix, triggerKey }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const startTime = performance.now();
    const duration = 900;
    const tick = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const val = end * p;
      setCount(p < 1 ? val : end);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [triggerKey, end]);

  const isPercent = suffix === "%";
  const display =
    Number.isInteger(end) || suffix === "+"
      ? Math.round(count)
      : isPercent
      ? Math.round(count)
      : count.toFixed(2);

  return (
    <span className="text-slate-900 text-[clamp(1.25rem,2.5vw,1.75rem)] font-extrabold">
      {display}{suffix}
    </span>
  );
};

/* diamond card */
const AchievementCard = ({ icon, label, value, suffix, color, delay }) => {
  const [countKey, setCountKey] = useState(0);
  return (
    <motion.div
      className="
        relative w-full
        max-w-[150px] xs:max-w-[160px] sm:max-w-[180px]
        h-[170px] xs:h-[180px] sm:h-[200px]
        mx-auto
        transition-transform
        md:hover:scale-105
      "
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5, once: false }}
      transition={{ duration: 0.5, delay }}
      onViewportEnter={() => setCountKey((k) => k + 1)}
    >
      {/* diamond bg */}
      <div className="absolute inset-0 rotate-45 rounded-xl shadow-xl bg-gradient-to-br from-white to-slate-50" />
      {/* upright content */}
      <div className="absolute inset-0 -rotate-45 flex flex-col items-center justify-center px-3 text-center">
        <div className={`p-3 sm:p-4 rounded-full shadow mb-2 sm:mb-3 text-white ${color}`}>
          {icon}
        </div>
        <h3 className="text-[11px] sm:text-xs font-medium text-slate-600 leading-snug">
          {label}
        </h3>
        <div className="mt-1.5 sm:mt-2">
          <CountUp end={value} suffix={suffix} triggerKey={countKey} />
        </div>
      </div>
    </motion.div>
  );
};

const AchievementSection = () => {
  // Determine density based on viewport (runs once; simple & cheap)
  const [density, setDensity] = useState({ bubbles: 16, drops: 10 });
  useEffect(() => {
    const w = window.innerWidth;
    if (w < 400) setDensity({ bubbles: 10, drops: 6 });
    else if (w < 640) setDensity({ bubbles: 12, drops: 8 });
    else if (w < 1024) setDensity({ bubbles: 16, drops: 10 });
    else setDensity({ bubbles: 22, drops: 16 });
  }, []);

  /* generate once per mount for stable positions/timing */
  const bubbles = useMemo(() => {
    const N = density.bubbles;
    return Array.from({ length: N }, () => ({
      left: Math.random() * 100,                    // %
      size: 8 + Math.random() * 18,                 // px
      duration: 16 + Math.random() * 20,            // s (a bit longer for smoothness on phones)
      delay: -Math.random() * 20,                   // s (negative to desync)
      opacity: 0.08 + Math.random() * 0.10,
      sway: 4 + Math.random() * 10,                 // px
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [density.bubbles]);

  const drops = useMemo(() => {
    const N = density.drops;
    return Array.from({ length: N }, () => ({
      left: Math.random() * 100,
      length: 18 + Math.random() * 28,              // px
      duration: 9 + Math.random() * 11,             // s
      delay: -Math.random() * 12,                   // s
      opacity: 0.10 + Math.random() * 0.10,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [density.drops]);

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 px-3 sm:px-4 text-center">
      {/* Layered, premium background + bubbles & raindrops */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* 1) Deep navy base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0b1224] to-[#0b1020]" />

        {/* 2) Isometric grid (very faint) */}
        <div
          className="absolute inset-0 opacity-[0.06] max-sm:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(30deg, #ffffff 1px, transparent 1px), linear-gradient(150deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "center",
          }}
        />

        {/* 3) Sliding ribbon (diagonal sheen) */}
        <div
          className="absolute -top-24 left-[-10%] w-[120%] h-32 sm:h-40 opacity-[0.08] max-sm:opacity-[0.06]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(148,163,184,0.45) 50%, rgba(255,255,255,0) 100%)",
            transform: "rotate(-6deg)",
            animation: "slideRibbon 18s ease-in-out infinite",
          }}
        />

        {/* 4) Contour lines */}
        <svg className="absolute top-6 sm:top-10 left-2 sm:left-6 w-[300px] sm:w-[460px] h-[170px] sm:h-[260px] opacity-[0.14] max-sm:opacity-[0.10]" viewBox="0 0 460 260" fill="none">
          <path className="dash" d="M0 180 Q 115 70 230 180 T 460 180" stroke="#9fb0c3" strokeWidth="1.2" />
          <path className="dash" d="M0 120 Q 115 10 230 120 T 460 120" stroke="#9fb0c3" strokeWidth="1.2" />
        </svg>
        <svg className="absolute -bottom-6 -right-2 w-[320px] sm:w-[520px] h-[180px] sm:h-[280px] opacity-[0.12] max-sm:opacity-[0.08]" viewBox="0 0 520 280" fill="none" style={{ transform: "rotate(180deg)" }}>
          <path className="dash" d="M0 200 Q 130 90 260 200 T 520 200" stroke="#8ca0b3" strokeWidth="1.2" />
          <path className="dash" d="M0 140 Q 130 30 260 140 T 520 140" stroke="#8ca0b3" strokeWidth="1.2" />
        </svg>

        {/* 5) Center spotlight */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,.07) 0%, rgba(255,255,255,0) 55%)",
          }}
        />

        {/* 6) Floating orbs */}
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3 max-sm:hidden" /> {/* hide one on very small screens */}

        {/* 7) Bubbles (soft circles, drift down + sway) */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          {bubbles.map((b, i) => (
            <span
              key={`b-${i}`}
              className="bubble"
              style={{
                left: `${b.left}%`,
                "--size": `${b.size}px`,
                "--dur": `${b.duration}s`,
                "--delay": `${b.delay}s`,
                "--sway": `${b.sway}px`,
                opacity: b.opacity,
              }}
            >
              <span className="bubble-dot" />
            </span>
          ))}
        </div>

        {/* 8) Raindrop streaks (thin lines falling) */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          {drops.map((d, i) => (
            <span
              key={`d-${i}`}
              className="drop"
              style={{
                left: `${d.left}%`,
                "--len": `${d.length}px`,
                "--dur": `${d.duration}s`,
                "--delay": `${d.delay}s`,
                opacity: d.opacity,
              }}
            />
          ))}
        </div>
      </div>

      <motion.h2
        className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold mb-2 sm:mb-3 text-white"
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: false }}
      >
        NIC <span className="text-slate-300">Achievements</span>
      </motion.h2>

      <p className="max-w-3xl mx-auto text-slate-300/90 mb-8 sm:mb-12 text-[clamp(.9rem,2.3vw,1rem)] px-2">
        Steady outcomes, experienced mentors, and strong linkages across BSW, BCA and BBS.
      </p>

      {/* Cards */}
      <div
        className="
          grid
          grid-cols-2 xs:grid-cols-3 md:grid-cols-5
          gap-4 xs:gap-6 md:gap-8
          max-w-6xl mx-auto
        "
      >
        {stats.map((item, i) => (
          <AchievementCard key={i} {...item} delay={i * 0.08} />
        ))}
      </div>

      {/* Animations + helpers */}
      <style>{`
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .dash,
          .orb,
          .bubble,
          .drop {
            animation: none !important;
          }
        }

        /* ribbon motion */
        @keyframes slideRibbon {
          0% { transform: translateX(-8%) rotate(-6deg); }
          100% { transform: translateX(8%) rotate(-6deg); }
        }

        /* dashed stroke motion */
        .dash { stroke-dasharray: 6 10; animation: dash 14s linear infinite; }
        @keyframes dash { to { stroke-dashoffset: -220; } }

        /* soft floating orbs */
        .orb { position:absolute; border-radius:9999px; filter: blur(28px); background: radial-gradient(circle at 30% 30%, rgba(148,163,184,.28), rgba(2,6,23,0) 60%); opacity:.18; }
        .orb1 { width:340px;height:340px;left:-100px;top:-60px; animation: floatA 22s ease-in-out infinite alternate; }
        .orb2 { width:300px;height:300px;right:-100px;top:18%;   animation: floatB 26s ease-in-out infinite alternate; opacity:.14; }
        .orb3 { width:380px;height:380px;left:25%;bottom:-130px; animation: floatC 24s ease-in-out infinite alternate; opacity:.12; }
        @media (min-width: 640px) {
          .orb1 { width:420px;height:420px;left:-120px;top:-80px; }
          .orb2 { width:380px;height:380px;right:-120px; }
          .orb3 { width:460px;height:460px;bottom:-160px; }
        }
        @keyframes floatA { from { transform: translateY(0) translateX(0) } to { transform: translateY(24px) translateX(20px) } }
        @keyframes floatB { from { transform: translateY(10px) translateX(0) } to { transform: translateY(-20px) translateX(-24px) } }
        @keyframes floatC { from { transform: translateY(0) } to { transform: translateY(-22px) } }

        /* BUBBLES */
        .bubble {
          position:absolute;
          top:-12vh;
          animation: drop var(--dur) linear infinite;
          animation-delay: var(--delay);
          will-change: transform, opacity;
        }
        .bubble-dot {
          display:block;
          width: var(--size);
          height: var(--size);
          border-radius:9999px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.45), rgba(255,255,255,.18) 45%, rgba(255,255,255,0) 70%);
          box-shadow: 0 0 12px rgba(255,255,255,.08);
          animation: sway calc(var(--dur) * 0.8) ease-in-out infinite alternate;
          filter: blur(.2px);
        }
        @keyframes drop {
          0%   { transform: translateY(-12vh); }
          100% { transform: translateY(112vh); }
        }
        @keyframes sway {
          from { transform: translateX(calc(var(--sway) * -1)); }
          to   { transform: translateX(var(--sway)); }
        }

        /* RAIN DROPS */
        .drop {
          position:absolute;
          top:-15vh;
          width: 2px;
          height: var(--len);
          background: linear-gradient(to bottom, rgba(255,255,255,.55), rgba(255,255,255,.05));
          border-radius: 9999px;
          filter: blur(.2px);
          animation: fall var(--dur) linear infinite;
          animation-delay: var(--delay);
          will-change: transform, opacity;
        }
        @keyframes fall {
          0%   { transform: translateY(-15vh); }
          100% { transform: translateY(115vh); }
        }
      `}</style>
    </section>
  );
};

export default AchievementSection;
