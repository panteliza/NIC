import React, { useEffect } from "react";
import graduateImg from "../assets/bws.jpg";      // keep
import groupStudentsImg from "../assets/bca.png"; // keep

const ServicesComponent = () => {
  useEffect(() => {
    // reveal-on-scroll for items
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible"));
      },
      { threshold: 0.25 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // NIC-specific highlights
  const features = [
    "Three Programs at NIC: BSW, BCA, and BBS with strong academic foundations.",
    "Industry-Aligned Curriculum: projects, labs, case studies, and real-world problem solving.",
    "Modern Facilities: computer labs, library resources, and collaborative learning spaces.",
    "Career Cell: internships, placement guidance, and interview prep.",
    "Student Success Support: mentoring, tutoring, and counseling.",
    "Clubs & Events: tech, business, and social impact communities.",
    "Scholarship & Aid: merit-based and need-based opportunities.",
    "Inclusive Campus Culture: safe, diverse, and growth-focused environment.",
  ];

  return (
    <section
      className="relative overflow-hidden py-16 px-6"
      aria-labelledby="nic-services-title"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {/* deep blue gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0f1730] to-[#0e1326]" />
        {/* gentle grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[length:42px_42px] bg-[linear-gradient(#ffffff_6%,transparent_6%),linear-gradient(90deg,#ffffff_6%,transparent_6%)]" />
        {/* floating blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="lg:w-1/2 reveal card-fade">
          <h2
            id="nic-services-title"
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Build Your Future at{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
              National Integrated College
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-blue-100/90">
            NIC empowers students through practical learning, mentorship, and an
            industry-aligned path across <strong>BSW</strong>, <strong>BCA</strong>, and{" "}
            <strong>BBS</strong>.
          </p>

          <ul className="mt-8 space-y-3">
            {features.map((item, i) => (
              <li key={i} className="reveal list-fade flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-xs shadow">
                  ✓
                </span>
                <span className="text-blue-50/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="reveal mt-8 inline-flex items-center gap-3">
            <a
              href="/bca"
              className="btn-primary"
            >
              Explore Programs
            </a>
            <a
              href="/contact"
              className="btn-ghost"
            >
              Contact NIC
            </a>
          </div>
        </div>

        {/* Images */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="reveal img-pop relative h-64 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <img
              src={graduateImg}
              alt="NIC students in social work (BSW)"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* overlay & caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-blue-800 shadow">
                BSW • Community Impact
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="reveal img-pop relative h-64 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 md:mt-10">
            <img
              src={groupStudentsImg}
              alt="NIC computer applications (BCA)"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-blue-800 shadow">
                BCA • Code. Build. Innovate.
              </span>
            </div>
          </div>

          {/* Decorative accent card (auto layout fills gap on md) */}
          <div className="reveal card-fade relative md:col-span-2 mt-2 rounded-2xl px-6 py-5 bg-white/5 backdrop-blur-sm ring-1 ring-white/10">
            <p className="text-blue-100 text-sm md:text-base">
              <strong>BBS</strong> at NIC develops managerial thinking with finance, marketing,
              HR, and analytics — powered by case studies and practical exposure.
            </p>
          </div>
        </div>
      </div>

      {/* Inline CSS for animations & buttons */}
      <style>{`
        /* reveal base */
        .reveal { opacity: 0; transform: translateY(18px); transition: all .9s cubic-bezier(.2,.65,.2,1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        /* specialized reveal variants */
        .card-fade { transition-duration: 1s; }
        .list-fade { transition-duration: .8s; }
        .img-pop { transform: translateY(12px) scale(.98); transition: transform .9s ease, box-shadow .9s ease; }
        .img-pop.visible { transform: translateY(0) scale(1); }
        .img-pop:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 25px 50px -12px rgba(0,0,0,.35); }

        /* CTA buttons */
        .btn-primary{
          --ring: rgba(56,189,248,.45);
          display:inline-flex;align-items:center;gap:.5rem;
          background-image: linear-gradient(90deg,#3b82f6 0%,#06b6d4 100%);
          color:#fff;padding:.75rem 1.1rem;border-radius:9999px;
          font-weight:700;box-shadow:0 10px 25px -10px var(--ring);
          transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
        }
        .btn-primary:hover{ transform: translateY(-2px); filter: brightness(1.05); box-shadow:0 18px 38px -12px var(--ring);}
        .btn-ghost{
          display:inline-flex;align-items:center;
          color:#93c5fd;background:transparent;border:1px solid rgba(147,197,253,.35);
          padding:.7rem 1rem;border-radius:9999px;font-weight:700;
          transition: background .2s ease, color .2s ease, border-color .2s ease;
        }
        .btn-ghost:hover{ background:rgba(147,197,253,.1); color:#bfdbfe; border-color:rgba(191,219,254,.6);}

        /* Floating gradient blobs */
        .blob{position:absolute;filter: blur(50px);opacity:.35;mix-blend:screen; border-radius:9999px;}
        .blob-1{width:420px;height:420px;left:-120px;top:-80px;
          background: radial-gradient(closest-side, rgba(59,130,246,.9), rgba(99,102,241,.6), transparent 70%);
          animation: float1 18s ease-in-out infinite alternate;
        }
        .blob-2{width:380px;height:380px;right:-120px;top:20%;
          background: radial-gradient(closest-side, rgba(6,182,212,.9), rgba(59,130,246,.6), transparent 70%);
          animation: float2 22s ease-in-out infinite alternate;
        }
        .blob-3{width:420px;height:420px;left:30%;bottom:-160px;
          background: radial-gradient(closest-side, rgba(147,197,253,.9), rgba(99,102,241,.6), transparent 70%);
          animation: float3 20s ease-in-out infinite alternate;
        }
        @keyframes float1 { from { transform: translateY(0) translateX(0) scale(1); } to { transform: translateY(40px) translateX(30px) scale(1.08); } }
        @keyframes float2 { from { transform: translateY(10px) translateX(0) scale(1); } to { transform: translateY(-30px) translateX(-40px) scale(1.05); } }
        @keyframes float3 { from { transform: translateY(0) scale(1); } to { transform: translateY(-30px) scale(1.07); } }
      `}</style>
    </section>
  );
};

export default ServicesComponent;
