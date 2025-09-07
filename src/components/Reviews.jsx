import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation"; // not needed unless you're using Navigation
import { Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";

// Images (reuse yours or replace paths as needed)
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
  return (
    <section className="bg-blue-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-9">
          What Students Say About NIC
        </h2>

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
              <div className="relative bg-white p-6 rounded-lg shadow-md border-b-4 border-blue-500 h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                <FaQuoteRight className="text-3xl text-gray-400 absolute bottom-4 right-4 opacity-70" />

                <div className="mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed">{review.review}</p>
                </div>

                <div className="flex items-center mt-auto">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.title}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <AiFillStar key={i} className="text-yellow-500 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
