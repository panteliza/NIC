import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";

import imgNandini from "../assets/logo.png";
import imgBipana from "../assets/logo.png";
import imgSaraswati from "../assets/logo.png";
import imgMausam from "../assets/logo.png";
import imgYubraj from "../assets/logo.png";
import imgSusmita from "../assets/logo.png";

const reviews = [
  {
    image: imgBipana,
    name: "Nandini Kumari",
    title: "BCA • 3rd Semester",
    review:
      "NIC’s practical approach and supportive mentors helped me turn theory into real projects. The labs, peer culture, and guidance have boosted my confidence in tech.",
    rating: 5,
  },
  {
    image: imgSusmita,
    name: "Bipana Bajyu",
    title: "BSW • 2nd Semester",
    review:
      "From classroom learning to field exposure, NIC keeps everything balanced. The environment is friendly, disciplined, and focused on growth.",
    rating: 5,
  },
  {
    image: imgSaraswati,
    name: "Saraswati Ayer",
    title: "BBS • 4th Semester",
    review:
      "Choosing NIC was my best decision. The academic culture, workshops, and co-curriculars like case comps and clubs make learning dynamic and fun.",
    rating: 5,
  },
  {
    image: imgMausam,
    name: "Mausam Kumari Mahato",
    title: "BCA • 1st Semester",
    review:
      "Great faculty, structured coursework, and hands-on projects. I love how NIC blends fundamentals with modern tools and teamwork.",
    rating: 5,
  },
  {
    image: imgNandini,
    name: "Yubraj Khanal",
    title: "BBS • 5th Semester",
    review:
      "The mentorship and career counseling at NIC are excellent. I’ve grown in presentation, analysis, and leadership through real activities and guidance.",
    rating: 5,
  },
  {
    image: imgYubraj,
    name: "Susmita Sah",
    title: "BSW • 3rd Semester",
    review:
      "NIC feels like a second home—supportive teachers, positive campus energy, and plenty of opportunities to explore your interests and serve the community.",
    rating: 5,
  },
];

const Reviews = () => {
  const sectionRef = useRef(null);

  // Parallax tilt (GPU-friendly, throttled with rAF)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let raf = null;
    let cx = 0, cy = 0;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      cx = (x - 0.5) * 6; // max 6deg
      cy = (y - 0.5) * 6;

      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.setProperty("--tiltX", `${-cy.toFixed(3)}deg`);
          el.style.setProperty("--tiltY", `${cx.toFixed(3)}deg`);
          raf = null;
        });
      }
    };

    const onLeave = () => {
      el.style.setProperty("--tiltX", `0deg`);
      el.style.setProperty("--tiltY", `0deg`);
    };

    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Scroll reveal for slides (once, tiny & cheap)
  useEffect(() => {
    const nodes = document.querySelectorAll(".nic-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        transform: "perspective(1200px) rotateX(var(--tiltX,0deg)) rotateY(var(--tiltY,0deg))",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {/* Base gradient */}
      <div
        className="absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 60%), radial-gradient(1200px 600px at 110% 110%, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0) 60%), linear-gradient(180deg, #0a1020 0%, #0c1635 100%)",
        }}
      />

      {/* Subtle animated grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.18] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <div
          className="h-[200%] w-[200%] origin-top-left rotate-[-8deg] animate-nic-pan"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            willChange: "transform",
          }}
        />
      </div>

      {/* Twinkling starfield (pure CSS – multiple layers) */}
      <div className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen">
        <div className="absolute inset-0 animate-stars-1 opacity-60" />
        <div className="absolute inset-0 animate-stars-2 opacity-40" />
        <div className="absolute inset-0 animate-stars-3 opacity-30" />
      </div>

      {/* Floating gradient blobs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 sm:h-[28rem] sm:w-[28rem] rounded-full blur-3xl opacity-50 animate-nic-float-slow"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.75), rgba(99,102,241,0) 60%)",
          willChange: "transform",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 sm:h-[26rem] sm:w-[26rem] rounded-full blur-3xl opacity-50 animate-nic-float-medium"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(56,189,248,0.7), rgba(56,189,248,0) 60%)",
          willChange: "transform",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-64 sm:h-80 sm:w-80 rounded-full blur-3xl opacity-40 animate-nic-float-fast"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.55), rgba(34,197,94,0) 60%)",
          willChange: "transform",
        }}
      />

      {/* Rotating conic halo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-[32rem] w-[32rem] sm:h-[38rem] sm:w-[38rem] -z-10 animate-nic-spin-slow opacity-25"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(96,165,250,0.0), rgba(96,165,250,0.35), rgba(34,197,94,0.0), rgba(20,184,166,0.35), rgba(96,165,250,0.0))",
          maskImage:
            "radial-gradient(circle at center, transparent 28%, black 32%, black 68%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent 28%, black 32%, black 68%, transparent 72%)",
          filter: "blur(18px)",
          willChange: "transform",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4">
        {/* Heading + orbiting dots */}
        <div className="relative w-fit mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white/95">
            What Students Say About NIC
          </h2>
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          >
            <div className="relative h-28 w-28 sm:h-36 sm:w-36">
              <span className="absolute inset-0 rounded-full border border-white/15" />
              <span className="absolute inset-0 rounded-full animate-orbit">
                <i className="block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)] absolute -top-1 left-1/2 -translate-x-1/2" />
                <i className="block h-[6px] w-[6px] rounded-full bg-indigo-300 shadow-[0_0_8px_rgba(99,102,241,0.9)] absolute top-1/2 -right-1 -translate-y-1/2" />
                <i className="block h-[7px] w-[7px] rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.9)] absolute -bottom-1 left-1/3" />
              </span>
            </div>
          </div>
        </div>

        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className={`nic-reveal relative bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-md border-b-4 border-blue-500 h-full flex flex-col justify-between transition-all duration-500 ease-out will-change-transform will-change-opacity
                hover:translate-y-[-4px] hover:shadow-xl animate-card-float`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <FaQuoteRight className="text-3xl text-gray-300 absolute bottom-4 right-4 opacity-80" />

                <div className="mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {review.review}
                  </p>
                </div>

                <div className="flex items-center mt-auto">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500">{review.title}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <AiFillStar
                          key={i}
                          className="text-yellow-500 text-sm animate-pulse-slow"
                          style={{ animationDelay: `${i * 0.08}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Animated gradient underline */}
                <span className="absolute left-6 right-6 bottom-[1.1rem] h-[2px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-glow-line pointer-events-none" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Component-scoped keyframes (tiny & compressed) */}
      <style>{`
        /* Respect user's reduced-motion setting */
        @media (prefers-reduced-motion: reduce) {
          .animate-nic-float-slow,
          .animate-nic-float-medium,
          .animate-nic-float-fast,
          .animate-nic-spin-slow,
          .animate-nic-pan,
          .animate-card-float,
          .animate-stars-1,
          .animate-stars-2,
          .animate-stars-3,
          .animate-glow-line,
          .animate-pulse-slow,
          .animate-orbit {
            animation: none !important;
          }
        }

        /* Idle float for cards */
        @keyframes card-float {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-4px); }
          100% { transform: translateY(0px); }
        }
        .animate-card-float { animation: card-float 6s ease-in-out infinite; }

        /* Quote grid pan */
        @keyframes nic-pan {
          0%   { transform: translateY(-10%) translateX(-10%) rotate(-8deg); }
          50%  { transform: translateY(0%) translateX(0%) rotate(-8deg); }
          100% { transform: translateY(-10%) translateX(-10%) rotate(-8deg); }
        }
        .animate-nic-pan { animation: nic-pan 18s ease-in-out infinite; }

        /* Blobs */
        @keyframes nic-float-slow {
          0%   { transform: translateY(0px) translateX(0px) scale(1); }
          50%  { transform: translateY(18px) translateX(10px) scale(1.02); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
        @keyframes nic-float-medium {
          0%   { transform: translateY(0px) translateX(0px) scale(1); }
          50%  { transform: translateY(-16px) translateX(-8px) scale(1.03); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
        @keyframes nic-float-fast {
          0%   { transform: translateY(0px) translateX(0px) scale(1); }
          50%  { transform: translateY(14px) translateX(-6px) scale(1.04); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
        .animate-nic-float-slow   { animation: nic-float-slow 12s ease-in-out infinite; }
        .animate-nic-float-medium { animation: nic-float-medium 10s ease-in-out infinite; }
        .animate-nic-float-fast   { animation: nic-float-fast 8s  ease-in-out infinite; }

        /* Halo spin */
        @keyframes nic-spin-slow {
          0%   { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        .animate-nic-spin-slow { animation: nic-spin-slow 45s linear infinite; }

        /* Stars (3 layers with different sizes/speeds) */
        .animate-stars-1,
        .animate-stars-2,
        .animate-stars-3 {
          background-image:
            radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.9) 50%, transparent 50%),
            radial-gradient(1.5px 1.5px at 70% 60%, rgba(255,255,255,0.7) 50%, transparent 50%),
            radial-gradient(1.5px 1.5px at 40% 80%, rgba(255,255,255,0.75) 50%, transparent 50%),
            radial-gradient(1px 1px at 85% 25%, rgba(255,255,255,0.6) 50%, transparent 50%),
            radial-gradient(1px 1px at 10% 75%, rgba(255,255,255,0.6) 50%, transparent 50%);
          animation: stars-flicker 6s ease-in-out infinite;
          will-change: opacity;
        }
        .animate-stars-2 {
          filter: blur(0.5px);
          animation-duration: 8s;
        }
        .animate-stars-3 {
          filter: blur(1px);
          animation-duration: 10s;
        }
        @keyframes stars-flicker {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        /* Orbiting dots around the heading */
        @keyframes orbit {
          to { transform: rotate(360deg); }
        }
        .animate-orbit { animation: orbit 12s linear infinite; transform-origin: center; }

        /* Gentle glowing underline */
        @keyframes glow-line {
          0%   { transform: translateX(-20%); opacity: .2; }
          50%  { transform: translateX(0%);   opacity: .8; }
          100% { transform: translateX(20%);  opacity: .2; }
        }
        .animate-glow-line { animation: glow-line 3.6s ease-in-out infinite alternate; will-change: transform, opacity; }

        /* Subtle pulse stars on rating (long period) */
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: .9; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 2.2s ease-in-out infinite; }

        /* Reveal on scroll */
        .nic-reveal { opacity: 0; transform: translateY(14px) scale(0.99); }
        .nic-reveal.is-visible { opacity: 1; transform: translateY(0px) scale(1); }
      `}</style>
    </section>
  );
};

export default Reviews;
