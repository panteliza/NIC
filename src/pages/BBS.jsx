import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  BarChart3,
  Wallet,
  Users,
  GraduationCap,
  Calendar,
  Megaphone,
  FileBarChart,
  Sparkles,
  ClipboardList,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bbsImg from "../assets/bbs.webp";

/* =====================================================
   NIC — Bachelor in Business Studies (BBS) Page
   Tech: React + Tailwind + Framer Motion + lucide-react
   Save as: src/pages/BBS.jsx
   Route: /bbs
   ===================================================== */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.08 } } };

export default function BBS() {
     useEffect(() => {
        // Scroll to the top when the page loads
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-24">
        {/* animated blobs */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ repeat: Infinity, duration: 12 }}
            className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, #0E71B9 38%, transparent)" }}
          />
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ repeat: Infinity, duration: 14 }}
            className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, #8ecae6 38%, transparent)" }}
          />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-100">
                <Sparkles className="h-4 w-4" />
                Practical Business • Leadership • Impact
              </div>
              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Bachelor in Business Studies (BBS)</h1>
              <p className="mt-4 max-w-prose text-lg text-gray-600">
                A four‑year program that builds strong foundations in Finance, Marketing, HRM, and
                Accounting—paired with electives and hands‑on experiences like case studies,
                market research, simulations, and internships.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700">
                <Badge icon={<Calendar className="h-4 w-4" />}>4 Years</Badge>
                <Badge icon={<FileBarChart className="h-4 w-4" />}>Core: Finance • Marketing • HRM • Accounting</Badge>
                <Badge icon={<ClipboardList className="h-4 w-4" />}>Case Studies • Research • Simulations</Badge>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/admission" className="rounded-2xl bg-[#0E71B9] px-5 py-3 text-white shadow-lg shadow-blue-200 transition hover:brightness-110">Apply Now</a>
               
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-gray-200">
               <img
                 src={bbsImg}
                 alt="NIC students "
                 className="h-full w-full object-cover"
               />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10" />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-white/80 px-4 py-3 text-sm shadow-md ring-1 ring-gray-200 md:block">
                <p className="font-semibold">Analytical • Entrepreneurial • Career‑oriented</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Program Highlights" title="Business fundamentals with real‑world application" subtitle="Core courses + electives + internships + events" />

          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <HighlightCard icon={FileBarChart} title="Core Subjects" desc="Finance, Marketing, HRM, and Accounting." />
            <HighlightCard icon={Megaphone} title="Electives & Communication" desc="Entrepreneurship, E‑Business, Business Communication." />
            <HighlightCard icon={ClipboardList} title="Applied Learning" desc="Case studies, market research, and simulations." />
            <HighlightCard icon={Briefcase} title="Internships" desc="Banking, retail, and service sectors from local partners." />
            <HighlightCard icon={Users} title="Events & Networking" desc="Business Plan Competition and Guest Talks." />
            <HighlightCard icon={GraduationCap} title="Career Development" desc="Resume workshops, interview prep, and projects." />
          </motion.ul>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="relative bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What you'll learn" title="Decision‑making, analysis, and leadership skills" />

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TopicPill icon={Wallet} label="Finance & Accounting" items={["Financial Analysis", "Budgeting", "Reporting"]} />
            <TopicPill icon={BarChart3} label="Marketing & Research" items={["Market Research", "Branding", "Digital Basics"]} />
            <TopicPill icon={Users} label="HRM & Operations" items={["Teamwork", "HR Basics", "Operations"]} />
            <TopicPill icon={Briefcase} label="Entrepreneurship" items={["Business Model", "E‑Business", "Pitching"]} />
            <TopicPill icon={GraduationCap} label="Professional Skills" items={["Communication", "Case Writing", "Presentations"]} />
            <TopicPill icon={ClipboardList} label="Simulations" items={["Decision Games", "Scenario Planning", "KPIs"]} />
          </motion.div>
        </div>
      </section>

      {/* CAREER PATHS */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Career Paths" title="Launch your career across industries" />

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 flex flex-wrap gap-3">
            {["Accountant", "Manager", "Entrepreneur", "Banker", "Business Analyst", "Sales/Marketing Associate"].map((role) => (
              <motion.span key={role} variants={fadeUp} className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm">
                {role}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      
      {/* CTA */}
      <section className="relative bg-gradient-to-br from-[#0E71B9] to-[#0e4a7f] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Ready to grow your business career with NIC BBS?</h2>
              <p className="mt-3 max-w-prose text-white/80">Combine solid business theory with practical experiences, internships, and competitions that prepare you for the job market.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/apply" className="rounded-2xl bg-white px-5 py-3 text-[#0E71B9] shadow-lg transition hover:brightness-95">Apply Now</a>
                <a href="/contact" className="rounded-2xl border border-white/30 px-5 py-3 text-white transition hover:bg-white/10">Ask a Question</a>
              </div>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20">
              <ul className="grid gap-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20"><GraduationCap className="h-4 w-4" /></span>
                  <div>
                    <p className="font-semibold">Admissions & Eligibility</p>
                    <p className="text-white/80">Check requirements and key dates.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20"><Briefcase className="h-4 w-4" /></span>
                  <div>
                    <p className="font-semibold">Internship Partners</p>
                    <p className="text-white/80">Banks, retail, and service sector links.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20"><Users className="h-4 w-4" /></span>
                  <div>
                    <p className="font-semibold">Events & Competitions</p>
                    <p className="text-white/80">Business Plan Competition & guest talks.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer wrapped to ensure dark style */}
      <div className="relative z-10 dark">
        <Footer />
      </div>
    </div>
  );
}

/* ------------------------
   Small UI helpers
------------------------ */
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-[#0E71B9]">{eyebrow}</p>}
      {title && <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>}
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  );
}

function Badge({ children, icon }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm">
      {icon}
      {children}
    </span>
  );
}

function HighlightCard({ icon: Icon, title, desc }) {
  return (
    <motion.li variants={fadeUp} className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#0E71B9] ring-1 ring-blue-100">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      {desc && <p className="mt-3 text-sm text-gray-600">{desc}</p>}
    </motion.li>
  );
}

function TopicPill({ icon: Icon, label, items = [] }) {
  return (
    <motion.div variants={fadeUp} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-50 text-[#0E71B9] ring-1 ring-blue-100">
          <Icon className="h-4 w-4" />
        </span>
        <p className="font-semibold">{label}</p>
      </div>
      {items.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600">
          {items.map((it) => (
            <li key={it} className="rounded-full bg-gray-100 px-2.5 py-1">{it}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}