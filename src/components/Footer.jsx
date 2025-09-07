import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png";      // <- replace if you have an NIC logo
import bgImage from "../assets/finalfooter.jpg";   // <- ensure this exists

const Footer = () => {
  return (
    <footer className="text-white relative">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay + Content (NIC blue tint) */}
      <div className="relative z-10 py-10 px-6 sm:px-12 bg-[rgba(10,31,68,0.75)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About / Logo */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="NIC Logo" className="h-[100px] w-[120px] object-contain" />
            </div>
            <p className="mt-3 text-sm text-blue-100">
              National Integrated College (NIC) — Tribhuvan University affiliated.
              Centrally located at Dillibazar, Kathmandu, Nepal.
            </p>
          </div>

          {/* Our Programs (BSW, BCA, BBS) */}
          <div>
            <h2 className="text-xl font-bold mb-4">Our Programs</h2>
            <ul className="space-y-2 text-sm">
              {[
                { title: "Bachelor in Social Work (BSW)", link: "/bsw" },
                { title: "Bachelor in Computer Application (BCA)", link: "/bca" },
                { title: "Bachelor in Business Studies (BBS)", link: "/bbs" },
              ].map((course, index) => (
                <li key={index}>
                  <Link
                    to={course.link}
                    className="hover:text-blue-300 transition-all duration-300"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Helpful Links</h2>
            <ul className="space-y-2 text-sm">
              {["About Us", "Contact Us", "Gallery"].map((label, index) => (
                <li key={index}>
                  <Link
                    to={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-blue-300 transition-all duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (placeholders—edit to your real details) */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg text-blue-300" />
                <a
                  href="mailto:admissions@nic.edu.np" // TODO: replace with official email
                  className="hover:text-blue-300 transition-all duration-300"
                >
                  admissions@nic.edu.np
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <FaPhoneAlt className="text-lg text-blue-300" />
                <div className="flex flex-col">
                  <a
                    href="tel:+977014234567" // TODO: replace with official phone
                    className="hover:text-blue-300 transition-all duration-300"
                  >
                    +977-01-4234567
                  </a>
                  <a
                    href="tel:+9779800000000" // TODO: replace with official mobile
                    className="hover:text-blue-300 transition-all duration-300"
                  >
                    +977-9800000000
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg text-blue-300" />
                <span className="hover:text-blue-300 transition-all duration-300">
                  Dillibazar, Kathmandu, Nepal
                </span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#0a1f44]/90 text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} National Integrated College (NIC). All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
