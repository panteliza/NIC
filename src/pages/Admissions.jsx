// src/pages/Admissions.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Send } from "lucide-react";

export default function Admissions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const [toast, setToast] = useState({ type: "", msg: "" });
  const [mailtoHref, setMailtoHref] = useState("");
  const mailtoRef = useRef(null);

  // Refs for focusing first missing field
  const refs = {
    name: useRef(null),
    dob: useRef(null),
    address: useRef(null),
    phone: useRef(null),
    email: useRef(null),
    program: useRef(null),
  };

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const requiredKeys = ["name", "dob", "address", "phone", "email", "program"];

  const missing = useMemo(
    () => requiredKeys.filter((k) => !String(form[k] || "").trim()),
    [form]
  );

  const ready = missing.length === 0;

  // Helper: CRLF for better formatting in many email clients
  const crlf = (s) => s.replace(/\n/g, "\r\n");

  const makeSubjectBody = () => {
    const f = Object.fromEntries(
      Object.entries(form).map(([k, v]) => [k, (v || "").trim()])
    );
    const subject = `NIC Admission Application – ${f.name || "Student"}`;
    const body = `
National Integrated College (NIC) – Admission Application

Full Name: ${f.name}
Date of Birth: ${f.dob}
Address: ${f.address}
Phone: ${f.phone}
Email: ${f.email}

Program Applied For: ${f.program}

Guardian's Name: ${f.guardian}
Previous School: ${f.school}
GPA / Grade: ${f.grade}

Submitted from: NIC Admission Page
`.trim();

    return { f, subject, body };
  };

  const openEmailClients = () => {
    const { subject, body } = makeSubjectBody();
    const to = "info@nic.edu.np";

    // Build Gmail compose and mailto
    const gmailURL =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const mailto =
      `mailto:${encodeURIComponent(to)}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(crlf(body))}`;

    // Store for visible fallback link
    setMailtoHref(mailto);

    // 1) Try Gmail in new tab (best on desktop where Gmail is primary)
    const win = window.open(gmailURL, "_blank", "noopener,noreferrer");

    // 2) If blocked or environment can’t open it, auto-click mailto (default mail app)
    if (!win || win.closed || typeof win.closed === "undefined") {
      // Create (or use) hidden anchor and click it
      if (mailtoRef.current) {
        mailtoRef.current.click();
      } else {
        // Super fallback
        window.location.href = mailto;
      }
      // Also surface a toast so the user knows what happened
      setToast({
        type: "info",
        msg: "Opening your default email app with the form prefilled.",
      });
    } else {
      setToast({
        type: "success",
        msg: "Gmail compose opened in a new tab.",
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!ready) {
      const firstMissing = missing[0];
      setToast({
        type: "error",
        msg:
          "Please complete the required fields: " +
          missing.map((k) => k.toUpperCase()).join(", "),
      });
      // Focus first missing field
      const ref = refs[firstMissing];
      if (ref && ref.current) ref.current.focus();
      return;
    }

    openEmailClients();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Styles */}
      <style>{`
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

      {/* HERO */}
      <header className="relative overflow-hidden">
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
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(900px 360px at 50% 12%, rgba(255,255,255,0.16), transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 z-0 opacity-[0.15] mix-blend-screen"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
          aria-hidden
        />

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

          <div className="mx-auto mt-6 h-[3px] w-44 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 shadow-[0_0_12px_rgba(56,189,248,0.35)]" />
        </div>
      </header>

      {/* FORM */}
      <main className="-mt-10 mb-20 px-4 pt-5">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-bold text-sky-900 tracking-tight">
            Apply for Admission
          </h2>

          {/* Toast */}
          {toast.msg && (
            <div
              className={`mt-4 rounded-2xl px-4 py-3 text-sm ${
                toast.type === "success"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : toast.type === "error"
                  ? "bg-rose-50 text-rose-700 border border-rose-200"
                  : "bg-sky-50 text-sky-700 border border-sky-200"
              }`}
            >
              {toast.msg}
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-6 space-y-8">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                refProp={refs.name}
                label="Full Name *"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Enter your full name"
              />
              <Field
                refProp={refs.dob}
                label="Date of Birth *"
                type="date"
                name="dob"
                value={form.dob}
                onChange={onChange}
              />
              <Field
                refProp={refs.address}
                className="sm:col-span-2"
                label="Permanent Address *"
                name="address"
                value={form.address}
                onChange={onChange}
                placeholder="Dillibazar, Kathmandu, Nepal"
              />
              <Field
                refProp={refs.phone}
                label="Phone Number *"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="98XXXXXXXX"
              />
              <Field
                refProp={refs.email}
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
                  ref={refs.program}
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

            <div className="text-center space-y-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl bg-sky-700 px-8 py-3 font-semibold text-white shadow-lg hover:bg-sky-800 active:scale-[0.99]"
              >
                <Send className="w-5 h-5" />
                Submit Your Form
              </button>

              {/* Hidden mailto anchor (auto-click fallback) */}
              <a
                ref={mailtoRef}
                href={mailtoHref || "#"}
                className="hidden"
                aria-hidden
              >
                mail
              </a>

              {/* Visible fallback if user needs to click manually */}
              {mailtoHref && (
                <div className="text-xs text-slate-600">
                  Didn’t see an email compose window?{" "}
                  <a href={mailtoHref} className="text-sky-700 underline">
                    Click here to open your email with the form filled.
                  </a>
                </div>
              )}

              <p className="text-xs text-slate-500">
                Your email app (or Gmail) will open with all details prefilled.
              </p>
            </div>
          </form>
        </div>
      </main>

      {/* FOOTER */}
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
  return <label className="block text-sm font-medium text-slate-700">{children}</label>;
}
function Field({ label, name, type = "text", className = "", refProp, ...rest }) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        ref={refProp}
        type={type}
        name={name}
        {...rest}
        className="mt-1 w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 focus:border-sky-500 focus:ring-sky-500"
        required={label.includes("*")}
      />
    </div>
  );
}
