// src/pages/AboutNIC.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  GraduationCap,
  BadgeDollarSign,
  Briefcase,
  BookOpenCheck,
  Workflow,
  Globe2,
  Microscope,
  Building2,
  UsersRound,
  ShieldCheck,
  CheckCircle2,
  Star,
} from "lucide-react";

// ==== Images (update paths to your actual files if needed) ====
import campus01 from "../assets/campus01.jpeg";      // College exterior
import campus02 from "../assets/campus02.jpeg";      // Campus life
import classroom01 from "../assets/classroom01.jpeg"; // Classroom
import students01 from "../assets/students01.jpeg";   // Student group

export default function AboutNIC() {
    useEffect(() => {
            // Scroll to the top when the page loads
            window.scrollTo(0, 0);
          }, []);
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-slate-50" />
          <svg className="absolute -right-24 -top-24 w-[42rem] h-[42rem]" viewBox="0 0 600 600" aria-hidden>
            <defs>
              <linearGradient id="nicHero" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>
            <circle cx="300" cy="300" r="280" fill="url(#nicHero)" opacity="0.12" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sky-700 font-semibold tracking-wide uppercase text-xs">
                About National Integrated College
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Future-Ready Education, <span className="text-sky-700">Rooted in Nepal</span>
              </h1>
              <p className="mt-4 text-slate-600">
                NIC blends Tribhuvan University curricula with real projects, internships from the
                first semester, and a strong mentoring culture—so students graduate with skills,
                experience, and confidence.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <HeroStat label="TU Affiliation" value="Official" icon={GraduationCap} />
                <HeroStat label="Scholarships" value="Merit & Need" icon={BadgeDollarSign} />
                <HeroStat label="Internships" value="From Sem 1" icon={Briefcase} />
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="/admission"
                  className="inline-flex items-center rounded-xl bg-sky-600 text-white px-5 py-3 font-semibold shadow hover:bg-sky-700 transition"
                >
                  Apply Now
                </a>
                <a
                  href="/programs"
                  className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50 transition"
                >
                  Explore Programs
                </a>
              </div>
            </div>

            {/* Hero collage */}
            <div className="grid grid-cols-2 gap-4">
              <HeroImage src={campus01} alt="NIC campus exterior" />
              <HeroImage src={students01} alt="NIC students at an event" tall />
              <HeroImage src={classroom01} alt="Interactive classroom session" />
              <HeroImage src={campus02} alt="Campus life and facilities" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY NIC HIGHLIGHTS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <SectionHeading eyebrow="Why NIC" title="The NIC Advantage" />
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item) => (
            <Card key={item.title}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl p-3 bg-sky-50 border border-sky-100">
                  <item.icon className="w-6 h-6 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== FEATURE SECTIONS ===== */}
      <Feature
        eyebrow="Work + Study"
        title="‘Earn While You Learn’ — real work experience while studying"
        text="Part-time roles, paid projects, assistantships, and career cell support help you graduate with a strong portfolio and confidence."
        bullets={[
          "Paid internships and campus jobs",
          "Project labs with industry mentors",
          "Placement guidance and workshops",
        ]}
        icon={Briefcase}
      />

      <Feature
        reverse
        eyebrow="Hands-on Learning"
        title="Project-Based Learning with first-semester internship"
        text="Each semester blends TU syllabi with real projects—community impact, tech builds, and business cases—to build delivery and collaboration skills."
        bullets={[
          "Internship from Semester 1",
          "Capstone projects with industry feedback",
          "Showcase events, demos, reviews",
        ]}
        icon={BookOpenCheck}
      />

      <Feature
        eyebrow="Global Outlook"
        title="International exposure through exchanges and conferences"
        text="Short exchanges, research papers, webinars, and visits broaden your horizons and build a global network."
        bullets={[
          "Student exchange & study trips",
          "Research, seminars & conferences",
          "Academic collaborations abroad",
        ]}
        icon={Globe2}
      />

      {/* ===== ASSURANCE STRIP / NUMBERS ===== */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Stat number="TU" label="Tribhuvan University Affiliated" icon={GraduationCap} />
            <Stat number="Affordable" label="Transparent & student-friendly fees" icon={BadgeDollarSign} />
            <Stat number="Inclusive" label="Safe & supportive campus culture" icon={ShieldCheck} />
            <Stat number="Network" label="Strong industry & alumni links" icon={Building2} />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== CTA (Premium) ===== */}
      <section className="relative isolate overflow-hidden">
        {/* layered background */}
        <div className="absolute inset-0 -z-10">
          {/* base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-800 via-sky-700 to-sky-900" />
          {/* soft pattern */}
          <svg className="absolute inset-0 h-full w-full opacity-10" aria-hidden>
            <defs>
              <pattern id="nic-cta-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 32V0h32" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#nic-cta-grid)" />
          </svg>
          {/* glow accents */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        </div>

        {/* top & bottom wave separators */}
        <svg className="absolute -top-px left-0 right-0 -z-10 text-white" viewBox="0 0 1440 30" aria-hidden>
          <path d="M0,30 C240,0 480,0 720,30 C960,60 1200,60 1440,30 L1440,0 L0,0 Z" fill="currentColor" />
        </svg>
        <svg className="absolute -bottom-px left-0 right-0 -z-10 text-white" viewBox="0 0 1440 30" aria-hidden>
          <path d="M0,0 C240,30 480,30 720,0 C960,-30 1200,-30 1440,0 L1440,30 L0,30 Z" fill="currentColor" />
        </svg>

        {/* content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-white">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold tracking-wider uppercase text-sky-200/90">
                Take the next step
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight">
                Ready to start your journey with NIC?
              </h2>
              <p className="mt-3 text-white/90 max-w-2xl">
                Explore programs, scholarships, and our ‘Earn While You Learn’ model. We’ll guide you
                from application to your first internship.
              </p>
            </div>

            <div className="flex gap-3 lg:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg ring-1 ring-white/20 hover:translate-y-[1px] hover:shadow-xl transition"
              >
                Contact Us
              </a>
              <a
                href="/admission"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 font-semibold backdrop-blur ring-1 ring-white/30 hover:bg-white/15 hover:translate-y-[1px] transition"
              >
                Admissions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER (unchanged) ===== */}
      <div className="relative z-10 bg-transparent">
        <Footer />
      </div>
    </div>
  );
}

/* ===== Reusable Bits ===== */
function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <p className="text-sky-700 font-semibold tracking-wide uppercase text-xs">{eyebrow}</p>
      <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h2>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-sky-100/60 group-hover:bg-sky-200/60 transition" />
      <div className="relative">{children}</div>
    </div>
  );
}

function HeroImage({ src, alt, tall = false }) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-slate-200 ${tall ? "row-span-2" : ""}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

function HeroStat({ label, value, icon: Icon }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 flex items-center gap-3 shadow-sm">
      <div className="rounded-lg p-2 bg-sky-50 border border-sky-100">
        <Icon className="w-5 h-5 text-sky-700" />
      </div>
      <div>
        <div className="text-xs text-slate-600">{label}</div>
        <div className="text-base font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
}

function Feature({ eyebrow, title, text, bullets = [], icon: Icon, reverse = false }) {
  return (
    <section className="py-12 sm:py-16">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center gap-10 ${
          reverse ? "lg:grid-cols-2 lg:[&>*:first-child]:order-2" : "lg:grid-cols-2"
        }`}
      >
        {/* Visual */}
        <div className="relative h-64 sm:h-80 lg:h-full rounded-2xl bg-gradient-to-br from-sky-100 to-slate-100 border border-slate-200 overflow-hidden">
          <div className="absolute inset-0 opacity-40" aria-hidden>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
              </defs>
              <circle cx="25%" cy="30%" r="140" fill="url(#grad)" />
              <circle cx="80%" cy="70%" r="160" fill="url(#grad)" />
            </svg>
          </div>
          <div className="absolute inset-4 rounded-xl border border-slate-200/70" />
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-sm shadow">
            <Icon className="w-4 h-4 text-sky-700" />
            <span className="font-medium text-slate-700">{eyebrow}</span>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="text-xs uppercase tracking-wide text-sky-700 font-semibold">{eyebrow}</p>
          <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h3>
          <p className="mt-3 text-slate-600">{text}</p>
          <ul className="mt-5 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-sky-700 mt-0.5" />
                <span className="text-slate-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label, icon: Icon }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col items-center">
      <div className="rounded-xl p-3 bg-sky-50 border border-sky-100 mb-2">
        <Icon className="w-6 h-6 text-sky-700" />
      </div>
      <div className="font-bold text-base">{number}</div>
      <div className="text-xs text-slate-600 mt-1">{label}</div>
    </div>
  );
}

const HIGHLIGHTS = [
  {
    title: "Tribhuvan University Affiliation",
    desc: "TU-approved curricula with added practical layers and industry projects.",
    icon: GraduationCap,
  },
  {
    title: "Quality Education at Affordable Fees",
    desc: "Transparent fee structure, scholarships, and value-rich resources.",
    icon: BadgeDollarSign,
  },
  {
    title: "‘Earn While You Learn’ Model",
    desc: "Part-time jobs, paid projects, assistantships, and career support.",
    icon: Briefcase,
  },
  {
    title: "Extra Electives & Skill Modules",
    desc: "Entrepreneurship, Digital Tools, Soft Skills, and more to boost employability.",
    icon: Workflow,
  },
  {
    title: "Internship from First Semester",
    desc: "Start early, learn fast — gain work culture and confidence from day one.",
    icon: BookOpenCheck,
  },
  {
    title: "Project-Based Learning & Industry Exposure",
    desc: "Real projects, reviews, and mentorship with partner organizations.",
    icon: Building2,
  },
  {
    title: "International Exchange & Trips",
    desc: "Short exchanges, study tours, and global collaboration opportunities.",
    icon: Globe2,
  },
  {
    title: "Research, Conferences & Seminars",
    desc: "Publish, present, and participate with faculty guidance.",
    icon: Microscope,
  },
  {
    title: "Safe, Supportive & Inclusive Campus",
    desc: "Mentoring, counseling, anti-harassment policy, and student clubs for belonging.",
    icon: UsersRound,
  },
];

/* ===== Simple Testimonials ===== */
function Testimonials() {
  const items = [
    {
      quote:
        "The internship from the first semester gave me confidence and clarity about my career path.",
      name: "Aayusha K.",
      meta: "BCA Student",
    },
    {
      quote:
        "NIC’s project-based approach made classes practical. I graduated with a strong portfolio.",
      name: "Prakash S.",
      meta: "BBS Graduate",
    },
    {
      quote:
        "Faculty mentorship and supportive culture helped me balance studies and part-time work.",
      name: "Ritika N.",
      meta: "BSW Student",
    },
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [items.length]);

  const t = items[idx];

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-3">
            <Star className="w-6 h-6 text-sky-700 mt-1" />
            <blockquote className="text-lg text-slate-700">{t.quote}</blockquote>
          </div>
        <div className="mt-4 pl-9 text-sm text-slate-500">
            — <span className="font-medium text-slate-700">{t.name}</span>, {t.meta}
          </div>
          <div className="mt-6 flex gap-2 pl-9">
            {items.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-6 rounded-full ${i === idx ? "bg-sky-600" : "bg-slate-200"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
