import React, { useRef } from 'react';
import './App.css';

import Hero from './components/Hero';
import Service from './components/Service';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const serviceRef = useRef(null);
  const pricingRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
        <div className="App">
        <header className="header">
        <div className="header__logo">Массаж</div>
        <nav className='header__navigation'>
          <ul>
            <li>
              <a onClick={() => scrollToRef(serviceRef)}>Услуги</a>
            </li>
            <li>
              <a onClick={() => scrollToRef(pricingRef)}>Прайс лист</a>
            </li>
            <li>
              <a onClick={() => scrollToRef(aboutRef)}>Обо мне</a>
            </li>
            <li>
              <a onClick={() => scrollToRef(contactRef)}>Контакты</a>
            </li>
          </ul>
        </nav>
        </header>
        <Hero />
        <div ref={serviceRef}>
          <Service />
        </div>
        <div ref={pricingRef}>
          <Pricing />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        </div>
  );
}

export default App;