import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2, Mail, Phone, MapPin, Upload, Calendar, User2 } from "lucide-react";

/* ===== NIC Admissions Page ===== */
export default function Admissions() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setOk(false);
    setErr("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // simple anti-bot honeypot
    if (fd.get("website")) {
      setErr("Spam detected.");
      setSending(false);
      return;
    }

    try {
      const res = await fetch("/api/send-admission", {
        method: "POST",
        body: fd,
      });
      if (!res.ok) throw new Error(await res.text());
      form.reset();
      setOk(true);
    } catch (e2) {
      setErr(e2.message || "Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900" />
        {/* soft blobs */}
        <div className="pointer-events-none absolute -right-24 -top-24 w-[34rem] h-[34rem] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 w-[28rem] h-[28rem] rounded-full bg-sky-300/20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide">
            <CheckCircle2 className="w-4 h-4" /> Official Admission Form
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Apply to National Integrated College (NIC)
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl">
            Fill the form below. Your application will be emailed directly to <span className="font-semibold">info@nic.edu.np</span>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1"><Calendar className="w-4 h-4"/> Rolling Admissions</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1"><Phone className="w-4 h-4"/> 01-4234567</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1"><Mail className="w-4 h-4"/> info@nic.edu.np</span>
          </div>
        </div>
      </section>

      {/* FORM CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-12 w-full">
        <div className="rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">
          <div className="px-6 sm:px-10 py-6 border-b border-slate-200 bg-slate-50">
            <h2 className="text-xl font-bold">Admission Application</h2>
            <p className="text-slate-600 text-sm">Fields marked * are required.</p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 sm:px-10 py-8">
            {/* Honeypot */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Top section */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium">Academic Year *</label>
                <input name="academicYear" required placeholder="2082/83 or 2025/26"
                       className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>

              <div className="lg:col-span-2">
                <fieldset className="mt-1">
                  <legend className="block text-sm font-medium">Applied For *</legend>
                  <div className="mt-2 grid sm:grid-cols-3 gap-3">
                    {[
                      {v:"+2 Science", n:"plus2_science"},
                      {v:"+2 Management", n:"plus2_management"},
                      {v:"+2 Law", n:"plus2_law"},
                      {v:"BBS", n:"bbs"},
                      {v:"BCA", n:"bca"},
                      {v:"BSW", n:"bsw"},
                    ].map(o=>(
                      <label key={o.n} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2">
                        <input type="checkbox" name="programs" value={o.v} />
                        <span>{o.v}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="mt-8 grid lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">Applicant Full Name (Capital) *</label>
                <input name="fullName" required className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium">Name in Devanagari</label>
                <input name="fullNameDev" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>

              <div>
                <label className="block text-sm font-medium">Date of Birth (AD) *</label>
                <input type="date" name="dobAD" required className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium">Date of Birth (BS)</label>
                <input name="dobBS" placeholder="e.g., 2059-07-23" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-medium">Permanent Address *</label>
                <div className="mt-1 flex gap-3">
                  <MapPin className="w-5 h-5 text-slate-400 mt-2 shrink-0"/>
                  <input name="permanentAddress" required placeholder="Ward, Municipality, District"
                         className="w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
                </div>
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-medium">Temporary Address</label>
                <input name="temporaryAddress" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>

              <div>
                <label className="block text-sm font-medium">Applicant Contact No. *</label>
                <input name="applicantPhone" required pattern="[0-9+ -]{7,}" placeholder="98XXXXXXXX"
                       className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium">Email *</label>
                <input type="email" name="applicantEmail" required
                       className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>

              <div>
                <label className="block text-sm font-medium">Father’s Name</label>
                <input name="fatherName" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium">Father’s Occupation</label>
                <input name="fatherOccupation" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>

              <div>
                <label className="block text-sm font-medium">Mother’s Name</label>
                <input name="motherName" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium">Mother’s Occupation</label>
                <input name="motherOccupation" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>

              <div>
                <label className="block text-sm font-medium">Local Guardian</label>
                <input name="guardianName" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium">Emergency Contact Person</label>
                <input name="emergencyPerson" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium">Emergency Contact No.</label>
                <input name="emergencyPhone" pattern="[0-9+ -]{7,}"
                       className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
              </div>
            </div>

            {/* ACADEMIC HISTORY */}
            <div className="mt-10">
              <h3 className="text-base font-semibold">Student’s Academic History</h3>
              <div className="mt-3 grid md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium">S.E.E – School Name</label>
                  <input name="seeSchool" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">S.E.E – GPA/Grade</label>
                  <input name="seeGpa" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">S.E.E – Completed Year</label>
                  <input name="seeYear" placeholder="2078 / 2021" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
                </div>

                <div className="md:col-span-1">
                  <label className="block text-sm font-medium">+2 – School Name</label>
                  <input name="plus2School" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">+2 – GPA/Grade</label>
                  <input name="plus2Gpa" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">+2 – Completed Year</label>
                  <input name="plus2Year" placeholder="2080 / 2023" className="mt-1 w-full rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"/>
                </div>
              </div>
            </div>

            {/* PHOTO UPLOAD */}
            <div className="mt-10">
              <label className="block text-sm font-medium">Recent Passport Size Photo (JPG/PNG, ≤2MB)</label>
              <label className="mt-2 flex items-center gap-3 rounded-xl border border-dashed border-slate-300 p-4 cursor-pointer hover:border-sky-400">
                <Upload className="w-5 h-5 text-slate-500" />
                <input type="file" name="photo" accept="image/*" className="hidden" />
                <span className="text-sm text-slate-600">Click to choose file</span>
              </label>
            </div>

            {/* DECLARATION */}
            <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm">
              I hereby confirm that the information provided is true and correct to the best of my knowledge.
            </div>

            {/* SUBMIT */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center rounded-xl bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 font-semibold shadow disabled:opacity-60"
              >
                {sending ? "Submitting..." : "Submit Application"}
              </button>
              <a href="mailto:info@nic.edu.np" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3">
                <Mail className="w-4 h-4" /> Email NIC
              </a>
            </div>

            {ok && <p className="mt-4 text-green-600 text-sm">Application sent successfully. We’ll contact you soon.</p>}
            {err && <p className="mt-4 text-red-600 text-sm">Error: {err}</p>}
          </form>
        </div>
      </section>

      {/* FOOTER — use your standard dark patterned wrapper */}
      <footer className="relative bg-slate-900 text-white">
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

/* Data for highlight label (top hero chip if needed later) */
const BADGE = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
    <User2 className="w-4 h-4" /> {children}
  </span>
);

const HIGHLIGHTS = []; // not used on this page, but left for consistency
