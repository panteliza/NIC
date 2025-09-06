import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import FloatingButtons from './components/FloatingButtons';

import Home from './pages/Home';



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
          <Route path="/nic" element={<Home />} />
          <Route path="/national-integrated-college" element={<Home />} />
          
         
        
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;