// src/pages/BlogsTestimonials.jsx
import React, { useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  PencilLine,
  GraduationCap,
  Quote,
  Search,
  ChevronRight,
  CalendarDays,
  User,
  Tag,
  Sparkles,
  Star,
} from "lucide-react";

/* ==========================================================
   NIC — Student Blogs & Testimonials (Animated Covers Edition)
   No images required. Covers are category-aware animations.
   Tech: React + Tailwind + Framer Motion + lucide-react
   ========================================================== */

const CATEGORIES = ["All", "Campus Life", "Achievements", "Tech", "Events"];

const BLOGS = [
  {
    id: 1,
    title: "My First Semester at NIC: What Surprised Me Most",
    excerpt:
      "From orientation jitters to joining the coding club—how I found my rhythm and community in just 12 weeks.",
    author: "Aarati Khadka",
    date: "2025-08-22",
    category: "Campus Life",
  },
  {
    id: 2,
    title: "Winning the Inter-College Business Pitch",
    excerpt:
      "Our team’s 4-minute pitch, the slide that changed everything, and the feedback that leveled us up.",
    author: "Rajan Bhattarai",
    date: "2025-07-14",
    category: "Achievements",
  },
  {
    id: 3,
    title: "Building a MERN App in 48 Hours—Hackathon Diary",
    excerpt:
      "From zero to demo: what we shipped, what broke, and how we fixed it with 15 minutes to spare.",
    author: "Sujina Shrestha",
    date: "2025-06-02",
    category: "Tech",
  },
  {
    id: 4,
    title: "A Day Volunteering with BSW Fieldwork",
    excerpt:
      "Real stories, real impact—how fieldwork reshaped my view of classroom learning.",
    author: "Sandesh Basnet",
    date: "2025-05-20",
    category: "Campus Life",
  },
  {
    id: 5,
    title: "How I Balanced Exams and Internships",
    excerpt:
      "Five tactics that helped me manage deliverables, deadlines, and sanity during finals.",
    author: "Niruta Karki",
    date: "2025-04-11",
    category: "Achievements",
  },
  {
    id: 6,
    title: "Organizing NIC Tech Week: Behind the Scenes",
    excerpt:
      "Vendors, schedules, volunteers, and the 3 rules we used to keep the show running.",
    author: "Ritesh Thapa",
    date: "2025-03-03",
    category: "Events",
  },
];

const TESTIMONIALS = [
  { name: "Ankita Rai", program: "BCA ’26", quote: "NIC turned my curiosity into confidence. The labs, the mentors, the clubs—everything pushed me to build and ship.", rating: 5 },
  { name: "Prakash Adhikari", program: "BBS ’25", quote: "Case studies and presentations prepared me for interviews better than any textbook ever could.", rating: 5 },
  { name: "Sujal Shahi", program: "BSW ’26", quote: "Fieldwork gave me perspective. It’s where I learned to listen first—and then act.", rating: 4 },
  { name: "Roshni Gautam", program: "+2 Science ’24 → BCA", quote: "The +2 foundation made the leap to programming smoother than I expected. Teachers genuinely care.", rating: 5 },
  { name: "Bibek Karki", program: "+2 Management ’25", quote: "From finance basics to real club budgets—NIC made numbers feel real and useful.", rating: 4 },
  { name: "Aarav Gurung", program: "BCA ’25", quote: "Hackathons, late-night debugging, and that first deployed app—best memories of college.", rating: 5 },
  { name: "Smriti Shah", program: "BBS ’26", quote: "Guest talks from industry leaders opened doors. I landed an internship from one!", rating: 5 },
  { name: "Kritika Maharjan", program: "BSW ’25", quote: "The community projects taught me teamwork and empathy like nothing else.", rating: 4 },
];

/* ========= Anim Variants ========= */
const variantsFade = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 1) => ({
    opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.55, ease: "easeOut" },
  }),
};

const variantsRise = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
};

const variantsStagger = { show: { transition: { staggerChildren: 0.06 } } };

export default function BlogsTestimonials() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    return BLOGS.filter((b) => {
      const matchCat = cat === "All" || b.category === cat;
      const hay = (b.title + " " + b.excerpt + " " + b.author).toLowerCase();
      return matchCat && hay.includes(q.trim().toLowerCase());
    });
  }, [q, cat]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 30 });

  const featured = BLOGS[0];
  const rest = filtered.filter((b) => b.id !== featured.id);

  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-hidden">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 h-1.5 origin-left z-[60] bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600"
      />
      <Hero />
      <section className="relative">
        <div
          className="pointer-events-none absolute -inset-x-10 -top-16 h-48 opacity-70"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent)", transform: "rotate(8deg)" }}
        />
      </section>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 pb-24">
        {/* Featured + Filters */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={variantsStagger} className="grid lg:grid-cols-3 gap-8">
          <motion.div variants={variantsRise} className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
            <FeaturedCard post={featured} />
          </motion.div>

          <motion.aside variants={variantsRise} className="rounded-3xl bg-gradient-to-br from-sky-50 to-white border border-slate-200 p-6 shadow-lg">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky-600" />
              <h3 className="font-semibold text-slate-900">Browse Student Blogs</h3>
            </div>

            <div className="mt-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by title, topic, author..."
                  className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`px-3 py-1.5 rounded-full text-sm border transition ${
                      cat === c ? "bg-sky-600 text-white border-sky-600 shadow-sm" : "bg-white text-slate-700 border-slate-200 hover:border-sky-300"
                    }`}
                    aria-pressed={cat === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Showing {rest.length + (featured && (cat === "All" && !q ? 1 : 0))} post(s)
              </p>
            </div>

            <div className="mt-6 rounded-xl bg-white border border-slate-200 p-4">
              <div className="flex items-center gap-2 text-slate-700">
                <CalendarDays className="w-4 h-4" />
                <span className="text-sm">New posts every <strong>Friday</strong></span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-slate-700">
                <Tag className="w-4 h-4" />
                <span className="text-sm">#NICLife #BuildAtNIC #WeAreMavericks</span>
              </div>
            </div>
          </motion.aside>
        </motion.div>

        {/* Blog grid */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={variantsStagger} className="mt-12 grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {rest.map((post, i) => (
            <motion.div key={post.id} custom={i} variants={variantsFade}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <section className="mt-20">
          <SectionHeader title="What Our Students Say" subtitle="Real experiences from classrooms, clubs, labs, and fieldwork." />
          <TestimonialsMarquee items={TESTIMONIALS} />
        </section>
      </main>

      {/* NIC Footer */}
      <footer className="relative bg-slate-900 text-white mt-auto">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="footerPattern" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M20 0 40 20 20 40 0 20Z" fill="white" /></pattern></defs>
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

/* ==================== Pieces ==================== */

function Hero() {
  return (
    <header className="relative">
      <Navbar />
      <section className="relative overflow-hidden">
        {/* Base gradient */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage:
              "radial-gradient(1200px 560px at 15% 18%, rgba(34,211,238,0.28) 0%, transparent 62%), radial-gradient(1400px 700px at 85% 22%, rgba(56,189,248,0.25) 0%, transparent 60%), linear-gradient(120deg,#031d2c 0%, #063a56 36%, #075985 70%, #042638 100%)",
            backgroundSize: "180% 180%",
            animation: "nicHeroMove 18s ease-in-out infinite",
          }}
        />
        {/* Brighter beams */}
        <div
          className="absolute -inset-x-5 -top-16 h-64 -z-10 opacity-70"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,.22), transparent)",
            transform: "rotate(10deg)",
            filter: "blur(1px)",
            animation: "beamSweep 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -inset-x-10 top-24 h-60 -z-10 opacity-60"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,.16), transparent)",
            transform: "rotate(-8deg)",
            animation: "beamSweep 16s ease-in-out infinite reverse",
          }}
        />
        {/* Bokeh */}
        <BokehParticles />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent drop-shadow-[0_8px_28px_rgba(56,189,248,0.45)]">
            Student Blogs & Testimonials
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
            Stories, wins, and lessons from NIC students—captured in their own words.
          </motion.p>
        </div>

        <style>{`
          @keyframes nicHeroMove { 0%{background-position:0% 0%} 50%{background-position:100% 60%} 100%{background-position:0% 0%} }
          @keyframes beamSweep { 0% { transform: translateX(-30%) rotate(10deg); opacity:.35 } 50% { transform: translateX(15%) rotate(10deg); opacity:.75 } 100% { transform: translateX(45%) rotate(10deg); opacity:.35 } }
        `}</style>
      </section>
    </header>
  );
}

function BokehParticles() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div className="absolute left-[8%] top-[24%] w-56 h-56 rounded-full bg-cyan-300/20 blur-3xl animate-[float_9s_ease-in-out_infinite]" />
      <div className="absolute right-[12%] top-[18%] w-64 h-64 rounded-full bg-sky-400/20 blur-3xl animate-[float_12s_ease-in-out_infinite_reverse]" />
      <div className="absolute left-[20%] bottom-[14%] w-52 h-52 rounded-full bg-cyan-200/16 blur-3xl animate-[float_11s_ease-in-out_infinite]" />
      <style>{`@keyframes float { 0%,100% { transform: translate3d(0,0,0) } 50% { transform: translate3d(0,-14px,0) } }`}</style>
    </div>
  );
}

/* ===== Category-Aware Animated Cover ===== */
function CoverVisual({ category, big = false }) {
  const h = big ? "h-72 sm:h-96" : "h-48";
  if (category === "Campus Life") return <Waves className={h} />;
  if (category === "Achievements") return <Medals className={h} />;
  if (category === "Tech") return <CodeGrid className={h} />;
  if (category === "Events") return <Confetti className={h} />;
  return <Waves className={h} />; // fallback
}

/* --- Campus Life: soft waves --- */
function Waves({ className = "" }) {
  return (
    <div className={`relative w-full ${className} overflow-hidden bg-gradient-to-br from-sky-500 to-blue-800`}>
      <div className="absolute inset-x-0 bottom-0 h-[220%] opacity-50 animate-[wave_8s_linear_infinite] rounded-[50%] bg-white/15" />
      <div className="absolute inset-x-0 bottom-0 h-[220%] opacity-40 animate-[wave_10s_linear_infinite_reverse] rounded-[50%] bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-[220%] opacity-30 animate-[wave_12s_linear_infinite] rounded-[50%] bg-white/8" />
      <style>{`
        @keyframes wave { from { transform: translateX(-25%) translateY(0) rotate(0deg); } to { transform: translateX(25%) translateY(-3%) rotate(0deg); } }
      `}</style>
    </div>
  );
}

/* --- Achievements: medals / sparkles --- */
function Medals({ className = "" }) {
  return (
    <div className={`relative w-full ${className} overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-900`}>
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute block rounded-full bg-white/80 shadow-md"
          style={{
            width: 10 + (i % 3) * 6,
            height: 10 + (i % 3) * 6,
            left: `${(i * 17) % 100}%`,
            top: `${(i * 29) % 100}%`,
            animation: `floaty ${6 + (i % 5)}s ease-in-out infinite ${i * 0.2}s`,
            filter: "drop-shadow(0 6px 18px rgba(255,255,255,0.35))",
          }}
        />
      ))}
      <style>{`
        @keyframes floaty { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
      `}</style>
      {/* ribbon hint */}
      <div className="absolute right-6 top-6 w-8 h-16 bg-yellow-400/90 rounded-b-md shadow" />
      <div className="absolute right-8 top-6 w-8 h-16 bg-orange-300/80 rounded-b-md shadow" />
    </div>
  );
}

/* --- Tech: code grid + nodes --- */
function CodeGrid({ className = "" }) {
  return (
    <div className={`relative w-full ${className} overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900`}>
      <svg className="absolute inset-0 w-full h-full opacity-30" aria-hidden>
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0H0V30" stroke="white" strokeOpacity="0.35" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-300"
          style={{
            left: `${(i * 13) % 100}%`,
            top: `${(i * 23) % 100}%`,
            boxShadow: "0 0 14px rgba(34,211,238,0.9)",
            animation: `blink ${1 + (i % 5) * 0.4}s ease-in-out infinite ${i * 0.12}s`,
          }}
        />
      ))}
      <style>{`@keyframes blink { 0%,100% { opacity:.3; transform: scale(.9) } 50% { opacity:1; transform: scale(1.15) } }`}</style>
      {/* scrolling code lines */}
      <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden">
        <div className="absolute whitespace-nowrap text-cyan-200/70 text-xs animate-[ticker_12s_linear_infinite]">
          npm run dev • const connect = async()=>{} • useEffect(()=>{},[]) • SELECT * FROM students LIMIT 10; •
          <span className="text-cyan-100"> &lt;Button /&gt; </span> • fetch('/api/blogs') • router.push('/bca') •
        </div>
      </div>
      <style>{`@keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </div>
  );
}

/* --- Events: confetti streamers --- */
function Confetti({ className = "" }) {
  return (
    <div className={`relative w-full ${className} overflow-hidden bg-gradient-to-br from-sky-600 to-blue-800`}>
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute block"
          style={{
            width: 6,
            height: 14,
            left: `${(i * 5 + (i % 3) * 7) % 100}%`,
            top: `-${(i % 6) * 20}px`,
            background: i % 2 ? "rgba(255,255,255,.9)" : "rgba(255,255,255,.7)",
            borderRadius: 2,
            transform: `rotate(${(i % 8) * 12}deg)`,
            animation: `fall ${6 + (i % 5)}s linear infinite ${i * 0.25}s`,
          }}
        />
      ))}
      <style>{`@keyframes fall { 0%{ transform: translateY(-20px) rotate(0deg) } 100%{ transform: translateY(120%) rotate(360deg) } }`}</style>
    </div>
  );
}

function FeaturedCard({ post }) {
  return (
    <div className="relative">
      <div className="relative">
        <CoverVisual category={post.category} big />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <div className="flex items-center gap-2 text-white/80 text-xs">
            <Tag className="w-4 h-4" />
            <span>{post.category}</span>
            <span>•</span>
            <CalendarDays className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>

          <h3 className="mt-2 text-2xl sm:text-3xl font-bold drop-shadow">{post.title}</h3>
          <p className="mt-2 text-white/90 max-w-2xl">{post.excerpt}</p>

          <div className="mt-4 flex items-center gap-2 text-white/90">
            <User className="w-4 h-4" />
            <span className="text-sm">{post.author}</span>
          </div>

          <a href="#blogs" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/90 text-blue-800 px-4 py-2 text-sm font-semibold hover:bg-white transition">
            Read more <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ post }) {
  return (
    <article id="blogs" className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow hover:shadow-xl transition-all">
      <div className="relative">
        <CoverVisual category={post.category} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
        <div className="absolute top-3 left-3 backdrop-blur bg-white/70 text-slate-700 text-xs px-2 py-1 rounded-full border border-white">
          {post.category}
        </div>
      </div>

      <div className="p-5">
        <h4 className="text-lg font-semibold text-slate-900">{post.title}</h4>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <time>{formatDate(post.date)}</time>
          </div>
        </div>

        <a href="#" className="mt-4 inline-flex items-center gap-2 text-sky-700 font-semibold hover:underline">
          Continue reading <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 text-sky-600">
        <GraduationCap className="w-5 h-5" />
        <PencilLine className="w-5 h-5" />
      </div>
      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">{title}</h2>
      <p className="mt-2 text-slate-600">{subtitle}</p>
    </div>
  );
}

/* ===== Testimonials ===== */
function TestimonialsMarquee({ items }) {
  const row1 = [...items.slice(0, Math.ceil(items.length / 2)), ...items.slice(0, Math.ceil(items.length / 2))];
  const row2 = [...items.slice(Math.ceil(items.length / 2)), ...items.slice(Math.ceil(items.length / 2))];
  return (
    <div className="mt-8 space-y-6">
      <MarqueeRow items={row1} duration={36} />
      <MarqueeRow items={row2} duration={42} reverse />
    </div>
  );
}

function MarqueeRow({ items, duration = 40, reverse = false }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-3">
      <div
        className="flex gap-4"
        style={{
          animation: `slide ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
        }}
      >
        {items.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}


function TestimonialCard({ t }) {
  return (
    <div className="min-w-[360px] max-w-[360px]">
      <div className="h-full rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full grid place-items-center bg-gradient-to-br from-sky-400 to-blue-700 text-white font-bold">{initials(t.name)}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              {t.name} <span className="text-slate-400">•</span> <span className="text-slate-600 font-normal">{t.program}</span>
            </div>
            <div className="mt-1 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < t.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`} />
              ))}
            </div>
          </div>
          <Quote className="w-5 h-5 text-sky-600 shrink-0" />
        </div>
        <p className="mt-3 text-slate-700 leading-relaxed">{t.quote}</p>
      </div>
    </div>
  );
}

/* ========= Utilities ========= */
function initials(name = "") {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}
function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
