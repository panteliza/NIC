import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import InfoCards from "../components/InfoCards";
import CourseDetails from "../components/CourseDetails";
import ServicesComponent from "../components/ServicesComponent";

import AchievementSection from "../components/Achievements";
import FAQComponent from '../components/FAQs';

import DirectContactUs from "../components/DirectContactUs";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import NICGallery from "../components/NICGallery";


const Home = () => {
   useEffect(() => {
          // Scroll to the top when the page loads
          window.scrollTo(0, 0);
        }, []);
 useEffect(() => {
  // Page title
  const title = "National Integrated College (NIC) | BSW, BCA & BBS Programs in Nepal";
  document.title = title;

  // Helper to create/update meta tags
  const upsertMeta = (key, content, attr = "name") => {
    if (!content) return;
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  const desc =
    "National Integrated College (NIC) — undergraduate programs in BSW, BCA and BBS with industry-aligned curriculum, experienced faculty, scholarships and strong career support.";

  // Core SEO
  upsertMeta("description", desc);
  upsertMeta(
    "keywords",
    "NIC, National Integrated College, BSW, BCA, BBS, Nepal college, undergraduate programs, admissions, scholarships, placements"
  );
  upsertMeta("robots", "index, follow");

  // Open Graph
  upsertMeta("og:title", title, "property");
  upsertMeta("og:description", desc, "property");
  upsertMeta("og:type", "website", "property");
  upsertMeta("og:url", window.location.href, "property");
  // If you have a public logo/banner URL, uncomment and set it:
  // upsertMeta("og:image", `${window.location.origin}/logo.jpg`, "property");

  // Twitter
  upsertMeta("twitter:card", "summary_large_image");
  upsertMeta("twitter:title", title);
  upsertMeta("twitter:description", desc);
  // upsertMeta("twitter:image", `${window.location.origin}/logo.jpg`);

  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", window.location.origin + window.location.pathname);
}, []);


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="w-full flex-shrink-0 overflow-hidden">
        <NICGallery/>
        <InfoCards/>
        <CourseDetails/>
        <ServicesComponent/>
            <AchievementSection />
            <FAQComponent/>
          
            <DirectContactUs/>
        
            <Reviews/>
            <Footer/>
      </div>
    </div>
  );
};

export default Home;