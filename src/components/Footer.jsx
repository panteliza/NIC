// src/components/FooterNIC.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png";

export default function FooterNIC() {
  const headingClass = "text-lg font-bold tracking-wide mb-4";

  return (
    <footer className="relative text-white">
      {/* --- DIAMOND PATTERN BACKGROUND --- */}
      <div className="absolute inset-0 -z-10 bg-[#0b0f14]" />
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            `url("data:image/svg+xml;utf8,` +
            encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'>
                <rect x='10' y='0' width='20' height='20' transform='rotate(45 20 20)' fill='%23131a22'/>
              </svg>`
            ) +
            `")`,
          backgroundRepeat: "repeat",
          backgroundSize: "40px 40px",
        }}
      />

      {/* --- CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12">
        <div className="grid gap-10 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-start">
          {/* Column 1: NIC College */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3">
                <img src={logo} alt="NIC" className="h-12 w-12 object-contain" />
                <div className="leading-tight">
                  <div className="text-lg font-semibold">National Integrated</div>
                  <div className="text-base font-light tracking-wide">College</div>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-[15px] text-[#b8c2cc]">
                <li className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 text-[#b0ff72]" />
                  <span>Dillibazar, Kathmandu, Nepal</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaPhoneAlt className="mt-1 text-[#b0ff72]" />
                  <a href="tel:+977014234567" className="hover:text-white">01-4234567</a>
                </li>
                <li className="flex items-start gap-2">
                  <MdEmail className="mt-1 text-[#b0ff72]" />
                  <a href="mailto:info@nic.edu.np" className="hover:text-white">info@nic.edu.np</a>
                </li>
              </ul>

              <div className="mt-4 flex items-center gap-3">
                <a href="https://www.facebook.com/niccollege/" target="_blank" rel="noreferrer"
                   className="h-9 w-9 rounded bg-white/10 grid place-items-center hover:bg-white/20 transition"><FaFacebookF /></a>
                <a href="https://www.instagram.com/explore/locations/1028785082/national-integrated-college/" target="_blank" rel="noreferrer"
                   className="h-9 w-9 rounded bg-white/10 grid place-items-center hover:bg-white/20 transition"><FaInstagram /></a>
                <a href="https://www.youtube.com/channel/UCUrC5dzkGPoKMPOMEY0T4qA" target="_blank" rel="noreferrer"
                   className="h-9 w-9 rounded bg-white/10 grid place-items-center hover:bg-white/20 transition"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* Column 2: +2 Programs */}
          <div>
            <h3 className={headingClass}>+2 PROGRAMS (NEB)</h3>
            <ul className="space-y-2 text-[15px] text-[#c7d0d9]">
              <li><Link to="/plus2-science" className="text-[#9ed0ff] hover:text-white">+2 in Science</Link></li>
              <li><Link to="/plus2-management" className="text-[#9ed0ff] hover:text-white">+2 in Management</Link></li>
              <li><Link to="/plus2-law" className="text-[#9ed0ff] hover:text-white">+2 in Law</Link></li>
            </ul>
          </div>

          {/* Column 3: Bachelor Programs */}
          <div>
            {/* FIX: removed mt-8 so this aligns with other headings */}
            <h3 className={headingClass}>BACHELOR PROGRAMS (TU)</h3>
            <ul className="space-y-2 text-[15px]">
              <li><Link to="/bca" className="text-[#9ed0ff] hover:text-white">BCA – Bachelor in Computer Application</Link></li>
              <li><Link to="/bsw" className="text-[#9ed0ff] hover:text-white">BSW – Bachelor in Social Work</Link></li>
              <li><Link to="/bbs" className="text-[#9ed0ff] hover:text-white">BBS – Bachelor in Business Studies</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="hidden lg:block">
            <h3 className={headingClass}>QUICK LINKS</h3>
            <ul className="space-y-2 text-[15px]">
              {[
                ["About NIC", "/about"],
                ["Tribhuvan University", "https://tuiost.edu.np"],
                ["Admissions", "/admission"],
                ["Academics", "/programs"],
            
                ["Student Blogs", "/blogs"],
         
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  {href.startsWith("http") ? (
                    <a href={href} target="_blank" rel="noreferrer" className="text-[#9ed0ff] hover:text-white">{label}</a>
                  ) : (
                    <Link to={href} className="text-[#9ed0ff] hover:text-white">{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-between py-4 gap-4">
            <p className="text-sm text-[#b8c2cc]">
              © {new Date().getFullYear()} National Integrated College (NIC). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
