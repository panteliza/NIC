import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* -----------------------------
   NIC FAQs (edit anytime)
------------------------------ */
const faqs = [
  {
    q: "Which programs does NIC offer?",
    a: "National Integrated College (NIC) currently offers three undergraduate programs: BSW (Bachelor of Social Work), BCA (Bachelor of Computer Applications), and BBS (Bachelor of Business Studies).",
  },
  {
    q: "What are the basic eligibility requirements?",
    a: "Applicants should have completed +2 or equivalent (any stream) from a recognized board. Program-specific criteria may apply. Please refer to the latest admission notice or contact the admissions office.",
  },
  {
    q: "How do I apply for admission?",
    a: "Apply online or at the campus. Keep your academic transcripts/mark sheets, identification documents, passport-sized photos, and any program-specific documents ready. Shortlisted applicants may be called for an interview or assessment.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes. NIC provides merit-based and need-based scholarships. Seats are limited and may depend on entrance/board results and internal criteria announced each intake.",
  },
  {
    q: "Is there an entrance test or interview?",
    a: "Some intakes may include an aptitude test and/or interview to assess program fit. The admissions office publishes the process and dates for each cycle.",
  },
  {
    q: "What are the academic intakes and deadlines?",
    a: "Intakes generally align with the national academic calendar. Deadlines are posted on the website and college notice board. Early application is recommended due to limited seats.",
  },
  {
    q: "Does NIC offer internship or placement support?",
    a: "NIC has a career cell that supports internships, industry exposure, and placement guidance. Students receive help with resumes, interviews, and networking.",
  },
  {
    q: "What facilities are available on campus?",
    a: "Students have access to computer labs, library resources, Wi-Fi, seminar rooms, and student support services. Facilities are updated periodically to match program needs.",
  },
  {
    q: "What is the class schedule like?",
    a: "Schedules vary by program and semester. Core theory, labs, tutorials, and projects are arranged to balance academic depth with practical learning.",
  },
  {
    q: "Can I transfer credits or switch programs?",
    a: "Credit transfer and internal program changes depend on regulations, seat availability, and equivalency reviews. Bring your transcripts for an official evaluation.",
  },
  {
    q: "How do fee payments and installments work?",
    a: "NIC accepts multiple payment modes. Installment plans may be available as per college policy for the given session. Contact the accounts office for details.",
  },
  {
    q: "Where is NIC located and how can I contact the college?",
    a: "NIC is located in Kathmandu. For address, directions, and queries, visit the Contact page or call the office during working hours.",
  },
];

const FAQComponent = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const toggle = (idx) => setActive((prev) => (prev === idx ? null : idx));

  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* === Background: richer blues, blue grid, blue aurora === */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Deep blue base (more blueish) */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, #071A3A 0%, #0B2A60 50%, #0F3E8C 100%)"
        }} />

        {/* Blue grid (slightly stronger than before) */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.22) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            backgroundPosition: "center",
          }}
        />

        {/* Blue/cyan aurora sweep */}
        <div
          className="absolute inset-0 opacity-[0.22] mix-blend-screen"
          style={{
            background:
              "linear-gradient(120deg, rgba(37,99,235,0.22) 0%, rgba(14,165,233,0.18) 38%, rgba(2,6,23,0) 72%), linear-gradient(230deg, rgba(59,130,246,0.20) 0%, rgba(14,165,233,0.16) 30%, rgba(2,6,23,0) 70%)",
            backgroundSize: "220% 220%, 220% 220%",
            animation: "auroraShift 38s ease-in-out infinite alternate",
          }}
        />

        {/* Center vignette (blue tint) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(147,197,253,0.15) 0%, rgba(147,197,253,0) 55%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-50"
          data-aos="fade-down"
        >
          Frequently Asked Questions — <span className="text-blue-200">NIC</span>
        </h1>
        <p
          className="mt-3 text-blue-100/95 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Everything you need to know about admissions, scholarships, programs, and campus life at
          National Integrated College.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, idx) => {
          const open = active === idx;
          const panelId = `faq-panel-${idx}`;
          const btnId = `faq-btn-${idx}`;
          return (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="group rounded-2xl p-[1.25px] bg-gradient-to-r from-blue-500/45 via-cyan-400/35 to-blue-500/45 hover:from-blue-500/60 hover:via-cyan-400/50 hover:to-blue-500/60 transition-colors"
            >
              <div className="rounded-2xl bg-[#0B2C66]/80 backdrop-blur-md ring-1 ring-blue-200/15">
                <button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={open}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 rounded-2xl"
                >
                  <span className="text-base sm:text-lg font-semibold text-blue-50">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-md border border-blue-200/40 text-blue-100 transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : ""
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-blue-100/95 leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes auroraShift {
          0% { background-position: 0% 50%, 100% 50%; }
          100% { background-position: 100% 50%, 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default FAQComponent;
