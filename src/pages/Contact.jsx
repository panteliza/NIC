// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail, Navigation, Copy,} from "lucide-react";
// ⬇️ Update this to your actual image file in /src/assets
import NicMap from "../assets/map.png";

export default function Contact() {
  const addressText = "NIC, Dillibazar, Kathmandu 44600";
  const phoneText = "01-4017603";
  const emailText = "info@nic.edu.np";
 
  const mapsLink =
    "https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KUGojDsIGes5MS5DLlArw3QK&daddr=Dilli+Bazar+Height+Marg,+Kathmandu+44600";

  const copy = async (txt) => {
    try {
      await navigator.clipboard.writeText(txt);
      alert("Copied!");
    } catch {
      alert("Copy failed — you can select and copy manually.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 relative overflow-hidden">
      {/* Inline keyframes for animated hero background */}
      <style>{`
        @keyframes nicGradient { 
          0%{background-position:0% 0%} 50%{background-position:100% 60%} 100%{background-position:0% 0%}
        }
        @keyframes nicBeam {
          0% { transform: translateX(-35%) rotate(10deg); opacity:.35 }
          50% { transform: translateX(15%) rotate(10deg); opacity:.6 }
          100% { transform: translateX(45%) rotate(10deg); opacity:.35 }
        }
        @keyframes nicFloat { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-16px,0)} }
        @media (prefers-reduced-motion: reduce){
          * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
        }
      `}</style>

      <Navbar />

      {/* ===== Hero with animated background ===== */}
      <section className="relative">
        {/* Gradient base */}
        <div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage:
              "radial-gradient(1000px 520px at 12% 18%, #06b6d4 15%, transparent 62%), radial-gradient(1200px 600px at 88% 10%, #22d3ee 12%, transparent 60%), linear-gradient(120deg,#082f49 0%, #0c4a6e 36%, #0369a1 70%, #083044 100%)",
            backgroundSize: "160% 160%",
            animation: "nicGradient 16s ease-in-out infinite",
          }}
        />
        {/* Sweeping light beams */}
        <div
          className="pointer-events-none absolute -inset-x-1 -top-24 h-80 -z-30"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,.14), transparent)",
            transform: "rotate(10deg)",
            animation: "nicBeam 12s ease-in-out infinite",
          }}
        />
        <div
          className="pointer-events-none absolute -inset-x-1 -top-10 h-72 -z-30"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,.10), transparent)",
            transform: "rotate(10deg)",
            animation: "nicBeam 16s ease-in-out infinite reverse",
          }}
        />

       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24 text-center">
  {/* Deep royal glow behind heading */}
  <div className="absolute inset-0 flex items-center justify-center -z-10 p-4">
    <div className="w-[700px] h-[250px] bg-gradient-to-r from-[#00264d] via-[#003366] to-[#004080] blur-3xl opacity-50 rounded-full animate-pulse "></div>
  </div>

  {/* Royal gradient title */}
  <h1
    className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#003366] via-[#0059b3] to-[#0088cc] bg-clip-text text-transparent drop-shadow-[0_5px_25px_rgba(0,102,255,0.45)] animate-gradient-flow p-2"
    style={{
      backgroundSize: "300% 300%",
      animation: "gradientFlow 8s ease-in-out infinite",
    }}
  >
    Contact National Integrated College (NIC)
  </h1>

  {/* Subtext with elegant dark glow */}
  <p
    className="mt-4 text-lg sm:text-xl font-medium bg-gradient-to-r from-[#99ccff] via-[#66b3ff] to-[#3399ff] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,85,255,0.5)]"
    style={{
      backgroundSize: "300% 300%",
      animation: "gradientFlow 10s linear infinite",
    }}
  >
    We’re here to help with admissions, programs, scholarships, and campus visits.
  </p>



  {/* Keyframes */}
  <style>
    {`
      @keyframes gradientFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
  </style>
</div>

      </section>

      {/* ===== Contact Info + Map ===== */}
      <section className="-mt-12 mb-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="space-y-4">
            <InfoCard
              icon={<MapPin className="w-5 h-5" />}
              title="Address"
              content={addressText}
              actions={[
                {
                  label: "Copy",
                  onClick: () => copy(addressText),
                  icon: <Copy className="w-4 h-4" />,
                },
                {
                  as: "a",
                  href: mapsLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  label: "Directions",
                  icon: <Navigation className="w-4 h-4" />,
                },
              ]}
            />
            <InfoCard
              icon={<Phone className="w-5 h-5" />}
              title="Phone"
              content={phoneText}
              actions={[
                { as: "a", href: `tel:${phoneText.replaceAll(" ", "")}`, label: "Call", icon: <Phone className="w-4 h-4" /> },
                { label: "Copy", onClick: () => copy(phoneText), icon: <Copy className="w-4 h-4" /> },
              ]}
            />
            <InfoCard
              icon={<Mail className="w-5 h-5" />}
              title="Email"
              content={emailText}
              actions={[
                { as: "a", href: `mailto:${emailText}`, label: "Email", icon: <Mail className="w-4 h-4" /> },
                { label: "Copy", onClick: () => copy(emailText), icon: <Copy className="w-4 h-4" /> },
              ]}
            />
           
          </div>

          {/* Map Card — image that opens Google Maps */}
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white"
            title="Open in Google Maps"
          >
            <div className="relative">
              <img
                src={NicMap}
                alt="Map to NIC, Dillibazar, Kathmandu"
                className="w-full h-80 sm:h-[26rem] object-cover transition group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-wide text-white/80">Find Us</p>
                  <h3 className="text-xl font-bold">NIC, Dillibazar • Kathmandu</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-xl bg-white/15 backdrop-blur px-3 py-2 text-sm">
                  <Navigation className="w-4 h-4" />
                  Open in Maps
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ===== Footer with NIC pattern ===== */}
      <footer className="relative bg-slate-900 text-white mt-auto">
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

/* -------- Small Reusable Card -------- */
function InfoCard({ icon, title, content, actions = [] }) {
  return (
    <div className="rounded-2xl bg-white/85 backdrop-blur-xl border border-slate-200 shadow-lg p-5">
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-xl bg-sky-50 text-sky-700 border border-sky-100 p-3">
          {icon}
        </div>
        <div className="w-full">
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-slate-600">{content}</p>
          {actions.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {actions.map((a, i) =>
                a.as === "a" ? (
                  <a
                    key={i}
                    href={a.href}
                    target={a.target}
                    rel={a.rel}
                    onClick={a.onClick}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm hover:border-sky-300"
                  >
                    {a.icon} {a.label}
                  </a>
                ) : (
                  <button
                    key={i}
                    type="button"
                    onClick={a.onClick}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm hover:border-sky-300"
                  >
                    {a.icon} {a.label}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
