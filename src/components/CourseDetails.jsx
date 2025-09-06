import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// === IMAGES ===
import bswImg from "../assets/bws.jpg";      // BSW hero image
import bcaImg from "../assets/bca.png";      // BCA hero image
import bbsImg from "../assets/bbs.png";      // BBS hero image


// === ICONS (small round) ===
import bswIcon from "../assets/logo.png";
import bcaIcon from "../assets/logo.png";
import bbsIcon from "../assets/logo.png";


const CourseDetails = () => {
  const [visible, setVisible] = useState([]); // JS version (no <number[]>)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.index); // JS: no "as HTMLElement"
          if (entry.isIntersecting) {
            setVisible((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
          }
        });
      },
      { threshold: 0.25 }
    );

    const cards = document.querySelectorAll(".destination-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // --------- NIC programs ---------
  const cards = [
    {
      image: bswImg,
      icon: bswIcon,
      title: "BSW (Bachelor of Social Work)",
      description:
        "Develop the skills to work with individuals, groups, and communities. BSW at NIC blends fieldwork, research, and ethics to prepare socially responsible professionals.",
      link: "/bsw",
    },
    {
      image: bcaImg,
      icon: bcaIcon,
      title: "BCA (Bachelor of Computer Applications)",
      description:
        "Build strong foundations in programming, database systems, web/app development, and problem-solving with hands-on projects aligned to industry needs.",
      link: "/bca",
    },
    {
      image: bbsImg,
      icon: bbsIcon,
      title: "BBS (Bachelor of Business Studies)",
      description:
        "Learn accounting, finance, marketing, HR, and analytics. BBS at NIC emphasizes case studies and practical exposure for business decision-making.",
      link: "/bbs",
    },
    
  ];

  return (
    <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 py-14 px-4 scroll-smooth">
      {/* Section title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-white animate-fadeIn">
          Explore <span className="text-cyan-300">NIC Programs</span>
        </h2>
        <p className="text-blue-100 mt-2">
          Choose from our undergraduate programs designed for growth and real-world impact
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {cards.map((c, index) => (
          <Link to={c.link} key={index} className="block">
            <div
              data-index={index}
              className={`destination-card relative group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                visible.includes(index) ? "animate-zoomIn opacity-100" : "opacity-0"
              }`}
            >
              {/* Image */}
              <div className="relative">
                <img src={c.image} alt={c.title} className="w-full h-48 object-cover" />

                {/* round icon badge */}
                <div className="absolute -bottom-6 right-5 bg-white rounded-full p-1 shadow-lg border-4 border-slate-100">
                  <img
                    src={c.icon}
                    alt={`${c.title} icon`}
                    className="w-12 h-12 rounded-full object-contain"
                  />
                </div>

                {/* dark overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 flex items-center justify-center">
                  <span className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-full shadow">
                    Learn more
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-8 text-center">
                <h3 className="text-xl font-bold text-blue-800">{c.title}</h3>
                <div className="mx-auto mt-2 mb-4 h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />
                <p className="text-slate-700">{c.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(0.92); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn { animation: zoomIn 0.8s ease-out forwards; }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default CourseDetails;
