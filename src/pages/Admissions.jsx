// src/pages/Admissions.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Send, Calendar, Mail, Phone, User2, GraduationCap, Building2 } from "lucide-react";

export default function Admissions() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    program: "",
    guardian: "",
    school: "",
    grade: "",
  });
  const set = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  // Parallax for glow blobs
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 28;
      const y = (e.clientY / window.innerHeight - 0.5) * 28;
      document.documentElement.style.setProperty("--p-x", `${x}px`);
      document.documentElement.style.setProperty("--p-y", `${y}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const body = `
National Integrated College (NIC) – Admission Application

Full Name: ${form.name}
Date of Birth: ${form.dob}
Address: ${form.address}
Phone: ${form.phone}
Email: ${form.email}

Program Applied For: ${form.program}

Guardian's Name: ${form.guardian}
Previous School: ${form.school}
GPA / Grade: ${form.grade}

Submitted from: NIC Admission Page
    `.trim();

    const mailto = `mailto:info@nic.edu.np?subject=${encodeURIComponent(
      `NIC Admission Application – ${form.name || "Student"}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 relative overflow-hidden">
      {/* keyframes + motion-safety */}
      <style>{`
        @keyframes nicGradient { 
          0%{background-position:0% 0%} 50%{background-position:100% 60%} 100%{background-position:0% 0%}
        }
        @keyframes nicBeam {
          0% { transform: translateX(-35%) rotate(10deg); opacity:.35 }
          50% { transform: translateX(15%) rotate(10deg); opacity:.6 }
          100% { transform: translateX(45%) rotate(10deg); opacity:.35 }
        }
        @keyframes nicFloat { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-16px,0)} }
        @keyframes nicStars { 0%{transform:translateY(0);opacity:0} 10%{opacity:.45} 90%{opacity:.45} 100%{transform:translateY(-120%);opacity:0} }
        @keyframes nicSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @media (prefers-reduced-motion: reduce){
          * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
        }
      `}</style>

      <Navbar />

      {/* ===== HERO with high-visibility animation ===== */}
      <section className="relative">
        {/* 1) animated gradient base */}
        <div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage:
              "radial-gradient(1000px 520px at 12% 18%, #06b6d4 15%, transparent 62%), radial-gradient(1200px 600px at 88% 10%, #22d3ee 12%, transparent 60%), linear-gradient(120deg,#082f49 0%, #0c4a6e 36%, #0369a1 70%, #083044 100%)",
            backgroundSize: "160% 160%",
            animation: "nicGradient 14s ease-in-out infinite",
          }}
        />

        {/* 2) sweeping beams */}
        <div
          className="pointer-events-none absolute -inset-x-1 -top-24 h-80 -z-30"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,.14), transparent)", transform: "rotate(10deg)", animation: "nicBeam 12s ease-in-out infinite" }}
        />
        <div
          className="pointer-events-none absolute -inset-x-1 -top-10 h-72 -z-30"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,.10), transparent)", transform: "rotate(10deg)", animation: "nicBeam 16s ease-in-out infinite reverse" }}
        />

        {/* 3) parallax glow blobs */}
        <div
          className="absolute -top-28 -left-24 w-[42rem] h-[42rem] rounded-full bg-cyan-300/30 blur-3xl -z-20"
          style={{ transform: "translate(var(--p-x), var(--p-y))", animation: "nicFloat 12s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-32 -right-24 w-[36rem] h-[36rem] rounded-full bg-sky-200/30 blur-3xl -z-20"
          style={{ transform: "translate(calc(var(--p-x)*-0.6), calc(var(--p-y)*-0.6))", animation: "nicFloat 15s ease-in-out infinite" }}
        />

        {/* 4) rotating halo ring */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <svg width="560" height="560" viewBox="0 0 560 560" className="opacity-30">
            <defs>
              <linearGradient id="halo" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#67e8f9" /><stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <g style={{ animation: "nicSpin 24s linear infinite" }}>
              <circle cx="280" cy="280" r="220" fill="none" stroke="url(#halo)" strokeWidth="2" />
              <circle cx="280" cy="280" r="250" fill="none" stroke="url(#halo)" strokeOpacity=".5" strokeWidth="1" />
            </g>
          </svg>
        </div>

        {/* 5) star particles */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {Array.from({ length: 46 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/70"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
                animation: `nicStars ${8 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        {/* hero copy */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-28 text-center text-white">
          <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs uppercase tracking-wide">
            <GraduationCap className="w-4 h-4" /> Official NIC Admission
          </span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold drop-shadow-[0_8px_20px_rgba(0,0,0,.35)]">
            Admission Form – National Integrated College
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">
            Submit the form and your mail app opens with all details pre-filled to <b>info@nic.edu.np</b>.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-white/90">
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
              <Calendar className="w-4 h-4" /> Rolling Admissions
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
              <Phone className="w-4 h-4" /> 01-4234567
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
              <Mail className="w-4 h-4" /> info@nic.edu.np
            </span>
          </div>
        </div>
      </section>

      {/* ===== FORM (unchanged structure; glass look) ===== */}
      <section className="-mt-16 mb-16 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 p-6 sm:p-10">
          <div className="relative mb-8">
            <div className="absolute -inset-x-6 -top-6 h-20 bg-gradient-to-r from-sky-100/60 via-white/40 to-cyan-100/60 blur-xl rounded-3xl" />
            <div className="relative flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-extrabold text-sky-900">Apply for Admission</h2>
              <div className="hidden sm:flex items-center gap-2 text-slate-500">
                <Building2 className="w-4 h-4" /> Dillibazar, Kathmandu
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-10">
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full Name *" name="name" placeholder="Enter your full name" value={form.name} onChange={set} required />
              <Field label="Date of Birth *" type="date" name="dob" value={form.dob} onChange={set} required />
              <Field className="md:col-span-2" label="Permanent Address *" name="address" placeholder="Dillibazar, Kathmandu, Nepal" value={form.address} onChange={set} required />
              <Field label="Phone Number *" name="phone" placeholder="98XXXXXXXX" value={form.phone} onChange={set} pattern="[0-9+ \\-]{7,}" required />
              <Field label="Email Address *" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={set} required />
            </div>

            {/* program tiles */}
            <div>
              <Label>Program Applied For *</Label>
              <div className="mt-3 grid sm:grid-cols-3 gap-3">
                {["+2 Science", "+2 Management", "+2 Law", "BCA", "BBS", "BSW"].map((p) => {
                  const active = form.program === p;
                  return (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setForm((s) => ({ ...s, program: p }))}
                      className={`group relative overflow-hidden rounded-2xl border px-4 py-3 text-left transition ${
                        active ? "border-sky-500 bg-sky-50 shadow" : "border-slate-200 bg-white hover:border-sky-300"
                      }`}
                    >
                      <span className={`font-semibold ${active ? "text-sky-800" : "text-slate-800"}`}>{p}</span>
                      <span className={`absolute -right-6 -top-6 w-20 h-20 rounded-full ${active ? "bg-sky-200/60" : "bg-slate-100/60"}`} />
                    </button>
                  );
                })}
              </div>
              <input type="hidden" name="program" value={form.program} />
              {!form.program && <p className="mt-2 text-sm text-rose-600">Please select one program.</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Guardian’s Name" name="guardian" placeholder="Parent or Guardian’s full name" value={form.guardian} onChange={set} />
              <Field label="Previous School" name="school" placeholder="Name of your last school" value={form.school} onChange={set} />
              <Field label="GPA / Grade" name="grade" placeholder="e.g., 3.75 / A+" value={form.grade} onChange={set} />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              I confirm the information provided is true and correct to the best of my knowledge.
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={!form.name || !form.dob || !form.address || !form.phone || !form.email || !form.program}
                className="inline-flex items-center gap-2 rounded-2xl bg-sky-700 px-8 py-3 font-semibold text-white shadow-lg hover:bg-sky-800 active:scale-[.99] disabled:opacity-60"
              >
                <Send className="w-5 h-5" />
                Submit & Open Email
              </button>
              <p className="mt-2 text-xs text-slate-500 flex items-center justify-center gap-2">
                <User2 className="w-3 h-3" />
                Your mail app will open with everything filled in to <b>info@nic.edu.np</b>.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* footer */}
      <footer className="relative bg-slate-900 text-white mt-auto">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footerPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 0 40 20 20 40 0 20Z" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerPattern)" />
          </svg>
        </div>
        <div className="relative z-10">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

/* Helpers */
function Label({ children }) {
  return <label className="block text-sm font-medium text-slate-700">{children}</label>;
}
function Field({ label, name, type = "text", className = "", ...rest }) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        {...rest}
        className="mt-1 w-full rounded-2xl border border-slate-300 bg-white/90 focus:border-sky-500 focus:ring-sky-500 px-4 py-2.5"
      />
    </div>
  );
}
