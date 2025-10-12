import React from "react";
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
} from "lucide-react";

/* =========================
   ABOUT PAGE – WHY NIC
   ========================= */
export default function AboutNIC() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />

      {/* HERO / HIGHLIGHTS */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-sky-100/60 group-hover:bg-sky-200/60 transition" />
              <div className="relative flex items-center gap-4">
                <div className="shrink-0 rounded-xl p-3 bg-sky-50 border border-sky-100">
                  {<item.icon className="w-6 h-6 text-sky-700" />}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <Feature
        eyebrow="Work + Study"
        title="‘Earn While You Learn’ — build experience & income while studying"
        text="NIC’s flexible scheduling and campus partnerships make part-time roles, paid projects, and assistantships realistic from your first year. You graduate with a résumé full of real work, not just theory."
        bullets={[
          "Paid internships and campus jobs",
          "Freelance & project labs with industry mentors",
          "Career cell support for placements",
        ]}
        icon={Briefcase}
      />

      <Feature
        reverse
        eyebrow="Hands-on Learning"
        title="Project-Based Learning with first-semester internship"
        text="Every semester includes real projects aligned to Tribhuvan University syllabi. From community impact work to tech builds and business cases, you practice collaboration, communication, and delivery."
        bullets={[
          "Internship starts from Semester 1",
          "Capstone projects with industry feedback",
          "Showcase events, demos, and reviews",
        ]}
        icon={BookOpenCheck}
      />

      <Feature
        eyebrow="Global Outlook"
        title="International exchange, conferences & foreign university tie-ups"
        text="Broaden your perspective through short exchanges, research paper submissions, webinars, and study visits. NIC maintains academic relations that open doors for our students."
        bullets={[
          "Student exchange & educational trips",
          "Research, seminars & conferences",
          "Collaborations with foreign universities",
        ]}
        icon={Globe2}
      />

      {/* STATS / ASSURANCE STRIP */}
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

      {/* CTA */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-700 via-sky-600 to-sky-800" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-white">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Ready to start your journey with NIC?
              </h2>
              <p className="mt-2 text-white/90">
                Explore our programs, scholarships, and the ‘Earn While You Learn’ model. Our team
                will guide you from application to your first internship.
              </p>
            </div>
            <div className="flex gap-3 lg:justify-end">
              <a
                href="/contact"
                className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow hover:shadow-lg transition"
              >
                Contact Us
              </a>
              <a
                href="/admissions"
                className="rounded-xl bg-white/10 backdrop-blur px-5 py-3 font-semibold hover:bg-white/15 transition"
              >
                Admissions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (dark + pattern, same as Plus-2 Science page) */}
      <footer className="relative bg-slate-900 text-white mt-0">
        {/* Pattern background */}
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

        {/* Footer Content */}
        <div className="relative z-10">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

/* =========================
   DATA & SMALL SUB-COMPS
   ========================= */
const HIGHLIGHTS = [
  {
    title: "Tribhuvan University Affiliation",
    desc: "NIC delivers TU-approved curricula with added practical layers and industry projects.",
    icon: GraduationCap,
  },
  {
    title: "Quality Education at Affordable Fees",
    desc: "Transparent fee structure, scholarships, and value-rich learning resources.",
    icon: BadgeDollarSign,
  },
  {
    title: "‘Earn While You Learn’ Model",
    desc: "Part-time jobs, paid projects, assistantships and career cell support.",
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
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h2>
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
