import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TeamImage from "../assets/bca.png";
import bgImage from "../assets/bws.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] },
  },
};

const AboutComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full flex-shrink-0 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="min-h-screen flex flex-col items-center py-10 backdrop-saturate-200 bg-white/80">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-blue-900 mb-6 text-center px-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          About Holy Vision Technical Campus
        </motion.h1>

        {/* Content Card */}
        <motion.div
          className="max-w-7xl w-full flex flex-col md:flex-row shadow-xl rounded-lg overflow-hidden backdrop-blur-md bg-white/90"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 group relative"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <img
              src={TeamImage}
              alt="HVTC Team"
              className="w-full h-[280px] md:h-[380px] object-cover transition-transform transform hover:scale-105 duration-500"
            />
          </motion.div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-8 space-y-6">
            {[
              {
                tag: "h2",
                content: "Welcome to Holy Vision Technical Campus",
              },
              {
                content:
                  "Holy Vision Technical Campus (HVTC) was founded with a mission to produce skilled middle-level health professionals ready for immediate employment, especially in rural areas. The institution emphasizes comprehensive healthcare training—covering preventive, promotive, curative, managerial, and rehabilitative care. Over the years, HVTC has maintained a strong track record of academic excellence, with many graduates achieving distinction and first division marks, going on to serve in both local and international healthcare settings.",
              },
              {
                content:
                  "HVTC offers a range of CTEVT-affiliated and nationally recognized programs, including the Proficiency Certificate Level in Nursing (since 2002), General Medicine (Health Assistant, since 2003), Diploma in Pharmacy (since 2004), and the newly launched Caregiver Program. These programs are approved by regulatory bodies such as the Nepal Nursing Council, Nepal Health Professional Council, and Nepal Pharmacy Council, and are recognized by Tribhuvan University. The institution takes pride in its experienced faculty, strong pass rates, hands-on practical training, and career-focused education designed to meet the growing needs of the healthcare sector.",
              },
              {
                content:
                  "To support inclusive education and academic excellence, HVTC offers scholarships to deserving students. Three scholarships are awarded annually to students from Category 3, as designated by CTEVT, to promote diversity and support underrepresented backgrounds. Additionally, a merit-based scholarship is granted each year to recognize outstanding academic performance. Through these initiatives, HVTC reinforces its commitment to accessible, high-quality healthcare education and the development of compassionate, competent professionals.",
              },
            ].map((item, i) =>
              item.tag === "h2" ? (
                <motion.h2
                  key={i}
                  className="text-3xl font-semibold text-[#2D4591]"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  {item.content}
                </motion.h2>
              ) : (
                <motion.p
                  key={i}
                  className="text-base leading-relaxed text-justify text-gray-800"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {item.content}
                </motion.p>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutComponent;