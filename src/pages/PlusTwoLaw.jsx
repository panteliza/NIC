// src/pages/PlusTwoLaw.jsx
import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";   // use your actual paths
import Footer from "../components/Footer";

// Optional EmailJS config (client-side). Add keys to enable direct email.
// Otherwise it falls back to a mailto compose.
const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
  // Template should accept: name, email, phone, parent, school, gpa, stream, message, to_email
  toEmail: "info@nic.edu.np",
};

const FEATURES = [
  { title: "Moot Court & Debates", text: "Practice advocacy through structured moot court sessions, debates, and model hearings." },
  { title: "Court & Law Firm Visits", text: "Guided visits to courts/legal institutions for practical insight into Nepal’s justice system." },
  { title: "Legal Writing & Drafting", text: "Foundations of legal language, case briefs, petitions, and structured drafting exercises." },
  { title: "Civics & Ethics", text: "Constitutional values, human rights awareness, and civic responsibility." },
];

const SUBJECT_GROUPS = [
  {
    track: "NEB Law Core",
    subjects: [
      "English",
      "Nepali / Social",
      "Constitutional Law (Foundations)",
      "Civil & Criminal Law (Basics)",
      "Procedural Law & Legal Drafting",
      "Human Rights / Legal System of Nepal",
    ],
    note: "Final subject mix follows current NEB guidelines and college intake policy.",
  },
  {
    track: "Optional / Supportive",
    subjects: [
      "Mathematics (optional)",
      "Computer (optional)",
      "Economics / Sociology (as offered)",
    ],
    note: "Optional subjects depend on seat availability and your higher-studies plan.",
  },
];

const FAQS = [
  {
    q: "Who should choose +2 in Law?",
    a: "Students interested in legal studies, public administration, human rights, governance, and advocacy—including those planning for BALLB or other law pathways.",
  },
  {
    q: "Is the curriculum NEB-aligned?",
    a: "Yes. NIC follows NEB requirements for +2 Law and complements it with enrichment activities like moot court, visits, and legal writing.",
  },
  {
    q: "Are scholarships available?",
    a: "Limited waivers/merit consideration may be announced during intake as per college policy.",
  },
  {
    q: "What are the higher-study pathways?",
    a: "BALLB, B.Sc. in Criminology, Public Administration, International Relations, Social Sciences, or related fields in Nepal/abroad.",
  },
];

function encodeMailtoBody(fields) {
  const lines = [
    `New +2 Law Inquiry`,
    ``,
    `Full Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Parent/Guardian: ${fields.parent}`,
    `Current School: ${fields.school}`,
    `SEE GPA (or marks): ${fields.gpa}`,
    `Preferred Focus: ${fields.stream}`,
    ``,
    `Message:`,
    `${fields.message || "-"}`,
  ];
  return encodeURIComponent(lines.join("\n"));
}

export default function PlusTwoLaw() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    parent: "",
    school: "",
    gpa: "",
    stream: "Law Foundations & Legal Writing",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ type: "", msg: "" });

  const stats = useMemo(
    () => [
      { label: "Moot Sessions / Term", value: "3+" },
      { label: "Field/Institution Visits", value: "2+" },
      { label: "Clubs (Debate/Legal Aid)", value: "Active" },
      { label: "Mentor Hours / Week", value: "4+" },
    ],
    []
  );

  const validate = () => {
    const errors = [];
    if (!form.name.trim()) errors.push("Full name is required.");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.push("Valid email is required.");
    if (!/^\+?\d[\d\s-]{8,14}$/.test(form.phone)) errors.push("Valid phone number is required.");
    if (!form.school.trim()) errors.push("Current school is required.");
    if (!form.gpa.trim()) errors.push("SEE GPA or marks are required.");
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (errs.length) {
      setToast({ type: "error", msg: errs[0] });
      return;
    }
    setSending(true);
    setToast({ type: "", msg: "" });

    // Try EmailJS first when configured
    try {
      if (window.emailjs && EMAILJS_CONFIG.publicKey !== "YOUR_PUBLIC_KEY") {
        const payload = {
          name: form.name,
          email: form.email,
          phone: form.phone,
          parent: form.parent || "-",
          school: form.school,
          gpa: form.gpa,
          stream: form.stream,
          message: form.message || "-",
          to_email: EMAILJS_CONFIG.toEmail,
        };
        await window.emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          payload,
          EMAILJS_CONFIG.publicKey
        );
        setToast({ type: "success", msg: "Thank you! Your inquiry has been sent to NIC admissions." });
        setForm({
          name: "",
          email: "",
          phone: "",
          parent: "",
          school: "",
          gpa: "",
          stream: "Law Foundations & Legal Writing",
          message: "",
        });
        setSending(false);
        return;
      }
    } catch (err) {
      console.error("EmailJS error:", err);
    }

    // Fallback: mailto compose
    const subject = encodeURIComponent("+2 Law Inquiry - NIC");
    const body = encodeMailtoBody(form);
    window.location.href = `mailto:info@nic.edu.np?subject=${subject}&body=${body}`;
    setSending(false);
    setToast({
      type: "info",
      msg: "Opening your email app. If it didn’t open, please check popup blockers or configure EmailJS.",
    });
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-24 md:pt-28 bg-gradient-to-b from-sky-900 via-blue-900 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <p className="text-white/70 text-xs md:text-sm">Home / Academics / +2 Programs</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold">+2 in Law (NEB)</h1>
          <p className="mt-3 max-w-3xl text-white/80">
            Build legal thinking early—learn the basics of Nepal’s legal system, constitutional values,
            and ethical reasoning with practical exposure through moot court and visits.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                <div className="text-2xl md:text-3xl font-bold">{s.value}</div>
                <div className="text-xs md:text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NIC Law */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why +2 Law at NIC?</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            NIC offers structured learning aligned with NEB, plus practical activities that prepare you
            for BALLB and related social-science paths in Nepal’s context.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Tracks */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">NEB Subject Groups</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Final combinations follow NEB rules and the college’s intake announcement. Counselors will
            help you lock the best fit for your goals.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {SUBJECT_GROUPS.map((g) => (
              <div key={g.track} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">{g.track}</h3>
                <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
                  {g.subjects.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-slate-600">{g.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions & Scholarships */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Admissions</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>• Eligibility: SEE or equivalent as per NEB policy.</li>
                <li>• Submit: SEE marksheet, character certificate, photos, citizenship (if applicable).</li>
                <li>• Streams and optional subjects finalized during counseling (seat-based).</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Scholarships</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>• Limited merit/need-based waivers per intake notice.</li>
                <li>• Entrance/placement performance may be considered.</li>
                <li>• Continuation subject to academic performance and attendance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apply / Inquiry Form */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Apply / Inquiry</h2>
              <p className="mt-2 text-slate-600">
                Fill this quick form. Your message goes directly to{" "}
                <span className="font-semibold">info@nic.edu.np</span>.
              </p>

              {toast.msg ? (
                <div
                  className={`mt-4 rounded-xl p-3 text-sm ${
                    toast.type === "success"
                      ? "bg-green-50 text-green-700 ring-1 ring-green-200"
                      : toast.type === "error"
                      ? "bg-red-50 text-red-700 ring-1 ring-red-200"
                      : "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                  }`}
                >
                  {toast.msg}
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Full Name*</label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-xl border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g., John Joe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email*</label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-xl border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Phone (Nepal)*</label>
                    <input
                      type="tel"
                      className="mt-1 w-full rounded-xl border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+977 98XXXXXXXX"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Parent/Guardian</label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-xl border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                      value={form.parent}
                      onChange={(e) => setForm({ ...form, parent: e.target.value })}
                      placeholder="Parent/Guardian Name"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Current School*</label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-xl border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                      value={form.school}
                      onChange={(e) => setForm({ ...form, school: e.target.value })}
                      placeholder="Your SEE school"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">SEE GPA / Marks*</label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-xl border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                      value={form.gpa}
                      onChange={(e) => setForm({ ...form, gpa: e.target.value })}
                      placeholder="e.g., GPA 3.0 / %"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Preferred Focus*</label>
                  <select
                    className="mt-1 w-full rounded-xl border-slate-300 bg-white shadow-sm focus:border-blue-600 focus:ring-blue-600"
                    value={form.stream}
                    onChange={(e) => setForm({ ...form, stream: e.target.value })}
                  >
                    <option>Law Foundations & Legal Writing</option>
                    <option>Human Rights & Civic Studies</option>
                    <option>Constitution & Governance Focus</option>
                    <option>Criminal Justice Basics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-xl border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Any questions or details you'd like us to know"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-800 disabled:opacity-60"
                  >
                    {sending ? "Sending..." : "Send to NIC Admissions"}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact / FAQs */}
            <aside className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">NIC Contact</h3>
              <div className="mt-3 text-slate-700 text-sm space-y-2">
                <p><span className="font-medium">Email:</span> info@nic.edu.np</p>
                <p><span className="font-medium">Office Hours:</span> 7:00 AM – 5:00 PM (Sun–Fri)</p>
                <p><span className="font-medium">Location:</span> Kathmandu, Nepal</p>
              </div>
              <div className="mt-5 rounded-xl bg-slate-100 p-4 text-slate-500 text-sm">
                Add campus photo or map embed here.
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-slate-900">FAQs</h4>
                <div className="mt-3 divide-y divide-slate-200 rounded-xl border border-slate-200">
                  {FAQS.map((f, idx) => (
                    <details key={f.q} className="group p-4">
                      <summary className="cursor-pointer list-none font-medium text-slate-800 flex items-center justify-between">
                        {idx + 1}. {f.q}
                        <span className="ml-2 text-slate-400 group-open:rotate-180 transition">⌄</span>
                      </summary>
                      <p className="mt-2 text-sm text-slate-700">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Ready to explore law at NIC?
          </h3>
          <p className="mt-2 text-slate-600">
            Apply early to secure your preferred focus and activity slots.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-5 inline-block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Back to Top
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
