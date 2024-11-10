import React from "react";
import "./testimonials.css";
import { testimonialsData } from "./data.js";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testimonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonials-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
              <p className="message">{e.message}</p>
              <div className="info">
                <p className="name">{e.name}</p>
                <p className="position">{e.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
