import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Scale,
  Globe,
  GraduationCap,
  Calendar,
  HandHeart,
  Megaphone,
  Landmark,
  BookOpen,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bswImg from "../assets/bws.webp";

/* =====================================================
   NIC — Bachelor in Social Work (BSW) Page
   Tech: React + Tailwind + Framer Motion + lucide-react
   Save as: src/pages/BSW.jsx
   Route: /bsw
   ===================================================== */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.08 } } };

export default function BSW() {
  useEffect(() => {
          // Scroll to the top when the page loads
          window.scrollTo(0, 0);
        }, []);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-24">
        {/* soft animated blobs */}
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
                Compassion • Community • Change
              </div>
              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Bachelor in Social Work (BSW)</h1>
              <p className="mt-4 max-w-prose text-lg text-gray-600">
                A practice‑centered program preparing you to empower communities, advocate for rights,
                and deliver evidence‑based support through fieldwork and partnerships with NGOs & INGOs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700">
                <Badge icon={<Calendar className="h-4 w-4" />}>4 Years</Badge>
                <Badge icon={<BookOpen className="h-4 w-4" />}>Psychology • Social Policy • Human Rights</Badge>
                <Badge icon={<HandHeart className="h-4 w-4" />}>Fieldwork from Year 1</Badge>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/apply" className="rounded-2xl bg-[#0E71B9] px-5 py-3 text-white shadow-lg shadow-blue-200 transition hover:brightness-110">Apply Now</a>
                <a href="/prospectus/bsw" className="rounded-2xl border border-gray-300 px-5 py-3 text-gray-800 transition hover:bg-gray-50">Download Prospectus</a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-gray-200">
                <img
                                src={bswImg}
                                alt="NIC students "
                                className="h-full w-full object-cover"
                              />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10" />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-white/80 px-4 py-3 text-sm shadow-md ring-1 ring-gray-200 md:block">
                <p className="font-semibold">Field‑driven • Reflective • Impactful</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Program Highlights" title="Where learning meets real community impact" subtitle="Structured coursework + supervised fieldwork + advocacy & writing" />

          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <HighlightCard icon={BookOpen} title="Core Subjects" desc="Psychology, Social Policy, Human Rights, and Ethics." />
            <HighlightCard icon={HandHeart} title="Fieldwork from Year 1" desc="Progressive exposure through community projects & NGOs." />
            <HighlightCard icon={Megaphone} title="Advocacy & Counseling" desc="Training in report writing, advocacy, and counseling skills." />
            <HighlightCard icon={Users} title="Seminars & Workshops" desc="Youth empowerment, gender equity, policy reforms, and more." />
            <HighlightCard icon={Landmark} title="NGO/INGO Collaboration" desc="Projects with national & international partners." />
            <HighlightCard icon={GraduationCap} title="Career Development" desc="Portfolio, supervision, and reflective practice." />
          </motion.ul>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="relative bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What you'll learn" title="Skills for effective and ethical practice" />

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TopicPill icon={Heart} label="Community Practice" items={["Needs Assessment", "Program Design", "Facilitation"]} />
            <TopicPill icon={Scale} label="Rights & Policy" items={["Human Rights", "Social Policy", "Advocacy"]} />
            <TopicPill icon={Users} label="Counseling Basics" items={["Active Listening", "Case Notes", "Referrals"]} />
            <TopicPill icon={Globe} label="Diversity & Inclusion" items={["Gender Equity", "Cultural Sensitivity", "Ethics"]} />
            <TopicPill icon={BookOpen} label="Research & Writing" items={["Report Writing", "Field Reports", "Surveys"]} />
            <TopicPill icon={GraduationCap} label="Professional Growth" items={["Seminars", "Reflection", "Supervision"]} />
          </motion.div>
        </div>
      </section>

      {/* CAREER PATHS */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Career Paths" title="Serve people. Shape policy. Lead programs." />

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 flex flex-wrap gap-3">
            {["Social Worker", "NGO/INGO Officer", "Counselor", "Field Researcher", "Program Coordinator", "Community Mobilizer"].map((role) => (
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
              <h2 className="text-2xl font-bold sm:text-3xl">Ready to make a difference with NIC BSW?</h2>
              <p className="mt-3 max-w-prose text-white/80">Join a field‑intensive program, collaborate with NGOs & INGOs, and graduate with hands‑on experience and strong documentation skills.</p>
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
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20"><Megaphone className="h-4 w-4" /></span>
                  <div>
                    <p className="font-semibold">Field Partners</p>
                    <p className="text-white/80">Collaborations with NGOs & INGOs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20"><Users className="h-4 w-4" /></span>
                  <div>
                    <p className="font-semibold">Student Support</p>
                    <p className="text-white/80">Mentoring, supervision, and seminars.</p>
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