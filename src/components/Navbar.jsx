import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import logo from "../assets/logo.png";
import logo1 from "../assets/logo.png"; // sidebar logo
import img1 from "../assets/facebook.png";
import img2 from "../assets/googlemap.png";
import img3 from "../assets/whatsapp.png";

import slide2 from "../assets/bbs.png";
import slide3 from "../assets/bca.png";
import slide4 from "../assets/bws.jpg";

// menu items
const abroad = [
  { path: "/bsw", label: "BSW" },
  { path: "/bbs", label: "BBS" },
  { path: "/bca", label: "BCA" },
];

const navLinks = [
  { path: "/contact", label: "CONTACT US" },
  { path: "/gallery", label: "GALLERY" },
  { path: "/notice", label: "NOTICE" },
];

const images = [slide2, slide3, slide4];

export default function NavbarWithSliderOverlay() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);

  const closeSidebar = () => setShowSidebar(false);
  const toggleDropdown1 = () => setShowDropdown1((s) => !s);

  const renderStudyAbroadDropdown = () => (
    <div className="flex flex-col gap-1">
      {abroad.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className="block px-4 py-2 text-gray-700 rounded hover:bg-[#07A2BB] hover:text-white"
          onClick={closeSidebar}
        >
          {label}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slider */}
      <Swiper
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        modules={[Autoplay]}
        className="w-full h-screen absolute top-0 left-0 z-0"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* BLACK OVERLAY */}
              <div className="absolute inset-0 bg-black/60" />
              {/* Subtle gradient at the top so navbar text pops */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Top Navbar */}
      <nav className="absolute top-0 left-0 w-full px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center z-10">
        <Link to="/" onClick={() => window.location.reload()}>
          <img
            src={logo}
            alt="Logo"
            className="w-[60px] sm:w-[100px] md:w-[130px] cursor-pointer"
          />
        </Link>

        <div className="hidden lg:flex gap-8 items-center text-md text-white font-extrabold">
          <Link to="/" className="hover:text-blue-300">HOME</Link>
          <Link to="/about" className="hover:text-blue-300">ABOUT</Link>

          <div
            className="relative cursor-pointer"
            onClick={() => setShowDropdown((s) => !s)}
          >
            <div className="flex items-center gap-1 hover:text-blue-300">
              ACADEMIC PROGRAM
              {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showDropdown && (
              <div className="absolute top-8 bg-white text-gray-800 shadow-md rounded-md mt-2 w-64 z-50">
                {abroad.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block px-4 py-2 hover:bg-[#07A2BB] hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} className="hover:text-blue-300">
              {label}
            </Link>
          ))}

          <div className="flex gap-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={img1} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              <img src={img2} alt="Map" className="h-8 w-8" />
            </a>
            <a href="https://wa.me/+9779801125262" target="_blank" rel="noreferrer">
              <img src={img3} alt="WhatsApp" className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <FiAlignJustify
          className="text-3xl text-white lg:hidden"
          onClick={() => setShowSidebar(true)}
        />
      </nav>

      {/* Mobile Sidebar */}
      {showSidebar && (
        <div className="fixed top-0 left-0 w-[300px] h-full bg-white shadow-2xl z-[60] flex flex-col">
          <MdOutlineClose
            className="absolute top-4 right-4 text-3xl text-gray-700 cursor-pointer hover:text-red-500 transition"
            onClick={closeSidebar}
          />
          <div className="flex justify-center my-6">
            <Link to="/" onClick={() => window.location.reload()}>
              <img
                src={logo1}
                alt="Sidebar Logo"
                className="h-[80px] object-contain cursor-pointer"
              />
            </Link>
          </div>

          <nav className="flex flex-col px-4 gap-1">
            <Link
              to="/"
              className="text-[#099BA4] font-semibold py-3 border-b border-gray-200 hover:bg-gray-100 rounded"
              onClick={closeSidebar}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-3 border-b border-gray-200 hover:bg-[#07A2BB] hover:text-white rounded"
              onClick={closeSidebar}
            >
              About
            </Link>

            <div className="border-b border-gray-200">
              <button
                onClick={toggleDropdown1}
                className="flex justify-between items-center w-full py-3 text-gray-800 font-semibold"
              >
                COURSES {showDropdown1 ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>
              {showDropdown1 && <div className="mt-1">{renderStudyAbroadDropdown()}</div>}
            </div>

            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="py-3 border-b border-gray-200 hover:bg-[#07A2BB] hover:text-white rounded"
                onClick={closeSidebar}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center gap-3 mt-auto py-6">
            <a
              href="https://www.facebook.com/share/1DvKTYh2j5/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={img1} alt="Facebook" className="h-8 w-8 object-contain" />
            </a>
            <a
              href="https://www.google.com/maps/place/Holy+Vision+Technical+Campus/@27.6907731,85.3335731,17.75z/data=!4m6!3m5!1s0x39eb19957c935b35:0x75b06ec216c597d5!8m2!3d27.691029!4d85.3336338!16s%2Fg%2F11b6gdw10d?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={img2} alt="Map" className="h-8 w-8 object-contain" />
            </a>
            <a
              href="https://wa.me/+9779801125262"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={img3} alt="WhatsApp" className="h-8 w-8 object-contain" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
