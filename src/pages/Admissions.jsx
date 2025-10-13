// src/pages/Admissions.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Send } from "lucide-react";

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

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
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

  const ready =
    form.name &&
    form.dob &&
    form.address &&
    form.phone &&
    form.email &&
    form.program;

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* ===== Styles (scoped) ===== */}
      <style>{`
        /* Smooth, subtle movement of the background gradient */
        @keyframes nicGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <Navbar />

      {/* ===== HERO (no negative z-index; high contrast) ===== */}
      <header className="relative overflow-hidden">
        {/* Base gradient (z-0) */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(120deg,#0a1a2f,#0d2f57,#11539a,#0d2f57,#0a1a2f)",
            backgroundSize: "240% 240%",
            animation: "nicGradient 18s ease-in-out infinite",
          }}
          aria-hidden
        />
        {/* Soft radial glow (z-0 overlay) */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(900px 360px at 50% 12%, rgba(255,255,255,0.16), transparent 60%)",
          }}
          aria-hidden
        />
        {/* Fine grid (z-0 overlay) */}
        <div
          className="absolute inset-0 z-0 opacity-[0.15] mix-blend-screen  "
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
          aria-hidden
        />

        {/* Content (z-10) */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-16 sm:pt-18 sm:pb-18 2xl:pt-24 2xl:pb-24 text-center ">
          <h1 className="text-white tracking-tight font-extrabold">
            <span className="block text-3xl sm:text-5xl leading-tight">
              Admission Form
            </span>
            <span className="block mt-1 text-xl sm:text-3xl text-sky-100 leading-tight">
              National Integrated College
            </span>
          </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-sky-50/90">
  Please fill out the form carefully with your correct details.
</p>


          {/* Underline accent */}
          <div className="mx-auto mt-6 h-[3px] w-44 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 shadow-[0_0_12px_rgba(56,189,248,0.35)]" />
        </div>

        {/* White wave separator (z-10 so it sits above bg) */}
        
      </header>

      {/* ===== FORM CARD (same fields, refined spacing) ===== */}
      <main className="-mt-10 mb-20 px-4 pt-5">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-bold text-sky-900 tracking-tight">
            Apply for Admission
          </h2>

          <form onSubmit={onSubmit} className="mt-6 space-y-8">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Full Name *"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Enter your full name"
              />
              <Field
                label="Date of Birth *"
                type="date"
                name="dob"
                value={form.dob}
                onChange={onChange}
              />
              <Field
                className="sm:col-span-2"
                label="Permanent Address *"
                name="address"
                value={form.address}
                onChange={onChange}
                placeholder="Dillibazar, Kathmandu, Nepal"
              />
              <Field
                label="Phone Number *"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="98XXXXXXXX"
              />
              <Field
                label="Email Address *"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
              />
              <div>
                <Label>Program Applied For *</Label>
                <select
                  name="program"
                  value={form.program}
                  onChange={onChange}
                  className="mt-1 w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 focus:border-sky-500 focus:ring-sky-500"
                  required
                >
                  <option value="">Select a program</option>
                  <option>+2 Science</option>
                  <option>+2 Management</option>
                  <option>+2 Law</option>
                  <option>BCA</option>
                  <option>BBS</option>
                  <option>BSW</option>
                </select>
              </div>
              <Field
                label="Guardian’s Name"
                name="guardian"
                value={form.guardian}
                onChange={onChange}
                placeholder="Parent or Guardian’s full name"
              />
              <Field
                label="Previous School"
                name="school"
                value={form.school}
                onChange={onChange}
                placeholder="Name of your last school"
              />
              <Field
                label="GPA / Grade"
                name="grade"
                value={form.grade}
                onChange={onChange}
                placeholder="e.g., 3.75 / A+"
              />
            </div>

            <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              I confirm the information provided is true and correct to the best of my knowledge.
            </p>

            <div className="text-center">
              <button
                type="submit"
                disabled={!ready}
                className="inline-flex items-center gap-2 rounded-2xl bg-sky-700 px-8 py-3 font-semibold text-white shadow-lg hover:bg-sky-800 active:scale-[0.99] disabled:opacity-60"
              >
                <Send className="w-5 h-5" />
                Submit Your Form
              </button>
           <p className="mt-2 text-xs text-slate-500">
  Please make sure all details are filled in correctly before submitting.
</p>
            </div>
          </form>
        </div>
      </main>

      {/* ===== OG NIC Footer (diamond pattern + dark) ===== */}
      <footer className="relative mt-auto text-white">
        <div className="absolute inset-0 bg-[#0b1320]" aria-hidden />
        <div className="absolute inset-0 opacity-25" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="nicDiamonds" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M14 0 28 14 14 28 0 14Z" fill="#0f1a2b" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#nicDiamonds)" />
          </svg>
        </div>
        <div className="relative border-t border-white/10">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

/* ===== Helpers ===== */
function Label({ children }) {
  return (
    <label className="block text-sm font-medium text-slate-700">{children}</label>
  );
}
function Field({ label, name, type = "text", className = "", ...rest }) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        {...rest}
        className="mt-1 w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 focus:border-sky-500 focus:ring-sky-500"
        required={label.includes("*")}
      />
    </div>
  );
}
