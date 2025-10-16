import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import FloatingButtons from './components/FloatingButtons';

import Home from './pages/Home';
import BCA from './pages/BCA';
import BSW from './pages/BSW';
import BBS from './pages/BBS';
import PlusTwoScience from './pages/PlusTwoScience';
import PlusTwoManagement from './pages/PlusTwoManagement';
import  PlusTwoLaw  from './pages/PlusTwoLaw';
import AboutNIC from './pages/AboutNIC';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import BlogsTestimonials from './pages/BlogsTestimonials';



const App = () => {
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
    };
    setVH();
    window.addEventListener('resize', setVH);
    return () => window.removeEventListener('resize', setVH);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <FloatingButtons />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/home" element={<Home />} />

          <Route path="/nic" element={<Home />} />
          <Route path="/national-integrated-college" element={<Home />} />
          <Route path="/bca" element={<BCA />} />
          <Route path="/bsw" element={<BSW />} />
          <Route path="/bbs" element={<BBS/>} />
          <Route path="/plus2-science" element={<PlusTwoScience/>} />
          <Route path="/plus2-management" element={<PlusTwoManagement/>} />
          <Route path="/plus2-law" element={<PlusTwoLaw/>} />
          <Route path="/about" element={<AboutNIC/>} />
          <Route path="/admission" element={<Admissions/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/programs" element={<Programs/>} />
          <Route path="/student-life" element={<BlogsTestimonials/>} />
          
         
        
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;