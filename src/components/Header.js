import React from "react";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import '../styles/Header.css';
import Hero from './Hero';
import Service from './Service';
import Pricing from './Pricing';
import About from './About';
import Contact from './Contact';

const Header = () => {
    return(
        <header className="header">
        <div className="header__logo">Massage Therapy</div>
        <nav className='header__navigation'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/service'>Services</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </header>
    );
};

export default Header;
