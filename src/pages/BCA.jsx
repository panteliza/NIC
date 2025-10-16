import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Cloud,
  Brain,
  Briefcase,
  Calendar,
  GraduationCap,
  Laptop,
  Users,
  Sparkles,
  Layers,
} from "lucide-react";
import bcaImg from "../assets/bca.webp";

// Reuse your site chrome
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =====================================================
   NIC — Bachelor in Computer Application (BCA) Page
   Tech stack: React + Tailwind + Framer Motion + lucide-react
   Drop this file at: src/pages/BCA.jsx
   Route at /bca (e.g., in your router)
   ===================================================== */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

export default function BCA() {
     useEffect(() => {
      // Scroll to the top when the page loads
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-24">
        {/* Animated background blobs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{ repeat: Infinity, duration: 12 }}
            className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, #0E71B9 40%, transparent)" }}
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{ repeat: Infinity, duration: 14 }}
            className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, #8ecae6 40%, transparent)" }}
          />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-100">
                <Sparkles className="h-4 w-4" />
                Tribhuvan University Curriculum + Tech Add‑ons
              </div>
              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Bachelor in Computer Application (BCA)
              </h1>
              <p className="mt-4 max-w-prose text-lg text-gray-600">
                A future‑ready program blending strong CS fundamentals with modern
                industry skills—including AI, Data Science, Networking, and
                full‑stack Web & App Development.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700">
                <Badge icon={<Calendar className="h-4 w-4" />}>4 Years · 8 Semesters</Badge>
                <Badge icon={<GraduationCap className="h-4 w-4" />}>Industry Internships from Year 1</Badge>
                <Badge icon={<Layers className="h-4 w-4" />}>Final‑Year Capstone with IT Companies</Badge>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/admission"
                  className="rounded-2xl bg-[#0E71B9] px-5 py-3 text-white shadow-lg shadow-blue-200 transition hover:brightness-110"
                >
                  Apply Now
                </a>
                
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              {/* Replace src with your actual asset */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-gray-200">
              <img
  src={bcaImg}
  alt="NIC students collaborating in the computer lab"
  className="h-full w-full object-cover"
/>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10" />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-white/80 px-4 py-3 text-sm shadow-md ring-1 ring-gray-200 md:block">
                <p className="font-semibold">Hands‑on • Collaborative • Industry‑Linked</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Program Highlights"
            title="Built for real‑world tech careers"
            subtitle="Balanced curriculum + projects + internships + community events"
          />

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <HighlightCard icon={Code2} title="TU Curriculum + Add‑ons" desc="Up‑to‑date syllabus enriched with modern tools & stacks." />
            <HighlightCard icon={Laptop} title="Programming • Networking • AI • DS • Web/App" desc="Concepts to creation across key domains." />
            <HighlightCard icon={Briefcase} title="Internships from Year 1" desc="Early industry exposure through NIC partnerships." />
            <HighlightCard icon={Layers} title="Capstone Projects" desc="Solve real problems with IT companies in the final year." />
            <HighlightCard icon={Users} title="Hackathons & Tech Fests" desc="Compete, build, and present—grow your portfolio." />
            <HighlightCard icon={Brain} title="Guest Talks & Mentoring" desc="Learn from practitioners and alumni in the field." />
          </motion.ul>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="relative bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What you'll learn"
            title="From fundamentals to advanced, hands‑on skills"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <TopicPill icon={Code2} label="Programming" items={["C/C++", "JavaScript", "Python Basics"]} />
            <TopicPill icon={Server} label="Networking" items={["Routing", "Security Basics", "Linux"]} />
            <TopicPill icon={Brain} label="AI" items={["ML Basics", "Model Thinking", "Ethics"]} />
            <TopicPill icon={Cloud} label="Data Science" items={["SQL", "Data Prep", "Visualization"]} />
            <TopicPill icon={Laptop} label="Web & App Dev" items={["HTML/CSS/JS", "React Basics", "APIs"]} />
            <TopicPill icon={GraduationCap} label="Professional Skills" items={["Agile", "Git", "Presentations"]} />
          </motion.div>
        </div>
      </section>

      {/* CAREER PATHS */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Career Paths"
            title="Launch a high‑growth tech career"
          />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {[
            "Software Engineer",
            "System Analyst",
            "IT Officer",
            "Full‑stack Developer",
            "Mobile App Developer",
            "Data/AI Trainee",
          ].map((role) => (
            <motion.span
              key={role}
              variants={fadeUp}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Roadmap"
            title="Internships and capstone that build your portfolio"
          />

          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            <TimelineItem
              step="Year 1"
              title="Industry Internship"
              desc="Start early with supervised placements to understand workflows and teamwork."
            />
            <TimelineItem
              step="Years 2–3"
              title="Projects & Events"
              desc="Take part in hackathons, tech fests, and community builds; present and iterate."
            />
            <TimelineItem
              step="Year 4"
              title="Company Capstone"
              desc="Ship a real solution with a partner company—showcase it to recruiters."
            />
          </ol>
        </div>
      </section>

      

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-[#0E71B9] to-[#0e4a7f] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Ready to build your tech career with NIC BCA?</h2>
              <p className="mt-3 max-w-prose text-white/80">
                Join a collaborative, project‑driven program that connects you with industry
                from day one—and graduate with a portfolio that stands out.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/apply" className="rounded-2xl bg-white px-5 py-3 text-[#0E71B9] shadow-lg transition hover:brightness-95">Apply Now</a>
                <a href="/contact" className="rounded-2xl border border-white/30 px-5 py-3 text-white transition hover:bg-white/10">Ask a Question</a>
              </div>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20">
              <ul className="grid gap-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">Eligibility & Admissions</p>
                    <p className="text-white/80">See entry requirements and key dates.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">Scholarships & Aid</p>
                    <p className="text-white/80">Merit‑based opportunities available.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <Users className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">Clubs & Community</p>
                    <p className="text-white/80">Join coding clubs, events, and seminars.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 dark">       <Footer />    </div>
    </div>
  );
}


function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-[#0E71B9]">{eyebrow}</p>
      )}
      {title && (
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
      )}
      {subtitle && (
        <p className="mt-3 text-gray-600">{subtitle}</p>
      )}
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

function TimelineItem({ step, title, desc }) {
  return (
    <li className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-[#0E71B9] ring-1 ring-blue-100">
          {step}
        </span>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-gray-600">{desc}</p>
    </li>
  );
}
