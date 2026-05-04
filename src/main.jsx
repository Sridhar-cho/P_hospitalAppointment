import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from "./App";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Cart from "./Cart";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/Services" element={<Services />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        {/* <Route path="/Cart" element={<Cart />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
