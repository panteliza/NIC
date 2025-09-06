import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import InfoCards from "../components/InfoCards";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Add SEO-friendly title and meta description dynamically
    document.title = "Holy Vision Technical Campus | Best Healthcare College in Nepal";
    const metaDescription = document.querySelector("meta[name='description']") || document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Holy Vision Technical Campus (HVTC) - CTEVT-affiliated technical education leader in Nepal, offering Nursing, Pharmacy, and General Medicine programs since 2002.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.querySelector("meta[name='keywords']") || document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content = "Holy Vision, HVTC, best college in Nepal, Nursing Nepal, Pharmacy Nepal, General Medicine College, CTEVT, Kathmandu college, healthcare education";
    document.head.appendChild(metaKeywords);
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="w-full flex-shrink-0 overflow-hidden">
        <InfoCards/>
      </div>
    </div>
  );
};

export default Home;