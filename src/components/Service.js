import React from "react";
import '../App.css';

function Service() {
    return(
      <section className="services">
      <h2>Our Services</h2>
      <div className="services__list">
        <div className="service">
          <h3>Swedish Massage</h3>
          <p>A gentle massage that uses long strokes, kneading, deep circular movements, vibration and tapping to help relax and energize you.</p>
          <img src="https://dummyimage.com/600x400/000/fff" alt="Massage" />
        </div>
        <div className="service">
          <h3>Deep Tissue Massage</h3>
          <p>A massage technique that focuses on the deeper layers of muscle tissue, helping to release chronic muscle tension and relieve pain.</p>
          <img src="https://dummyimage.com/600x400/000/fff" alt="Massage" />
        </div>
        <div className="service">
          <h3>Sports Massage</h3>
          <p>A massage designed specifically for athletes, to help prevent or treat injuries and enhance athletic performance.</p>
          <img src="https://dummyimage.com/600x400/000/fff" alt="Massage" />
        </div>
      </div>
    </section>
    );
};
export default Service;