// src/components/NICGallery.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

// ====== IMPORT YOUR IMAGES (one.jpeg ... ten.jpeg) ======
import img1 from "../assets/one.jpeg";
import img2 from "../assets/two.jpeg";
import img3 from "../assets/three.jpeg";
import img4 from "../assets/four.jpeg";
import img5 from "../assets/five.jpeg";
import img6 from "../assets/six.jpeg";
import img7 from "../assets/seven.jpeg";
import img8 from "../assets/eight.jpeg";
import img9 from "../assets/nine.jpeg";
import img10 from "../assets/ten.jpeg";

const NICGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <section className="w-full sm:py-10 py-7 px-4 sm:px-6 bg-gradient-to-tr from-white via-gray-50 to-white relative overflow-hidden">
      <style>
        {`
          .swiper-slide-shadow-left,
          .swiper-slide-shadow-right {
            background: rgba(0, 0, 0, 0.2) !important;
            border-radius: 1rem;
            filter: blur(5px);
          }
          .swiper-wrapper {
            transition-timing-function: linear !important;
          }
          @keyframes floatBlob1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(25px, -20px) scale(1.08); }
          }
          @keyframes floatBlob2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-30px, 30px) scale(1.06); }
          }
          .blob1 { animation: floatBlob1 9s ease-in-out infinite; }
          .blob2 { animation: floatBlob2 11s ease-in-out infinite; }
        `}
      </style>

      {/* Glowing background blobs */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[450px] h-[450px] rounded-full z-0 blob1 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 30%, #93c5fd, #3b82f6)",
          filter: "blur(80px)",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[500px] rounded-full z-0 blob2 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 70%, #f0abfc, #a855f7)",
          filter: "blur(90px)",
          opacity: 0.22,
        }}
      />


      {/* Swiper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          loop
          loopedSlides={images.length}
          slidesPerView={1.2}
          speed={5000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          allowTouchMove={false}
          grabCursor={false}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.6 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 22,
            stretch: 0,
            depth: 160,
            modifier: 1.1,
            slideShadows: true,
          }}
          className="gallerySwiper"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="px-2 w-full h-48 sm:h-72 md:h-80 relative group">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  src={img}
                  alt={`NIC College photo ${i + 1}`}
                  className="w-full h-full object-contain rounded-2xl shadow-2xl border-4 border-white group-hover:shadow-blue-400 transition-all duration-700 bg-white"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default NICGallery;
