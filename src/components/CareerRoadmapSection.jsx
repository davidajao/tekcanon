import React from 'react';
import './CareerRoadmapSection.css';

const CareerRoadmapSection = () => {
  return (
    <section className="career-roadmap-section">
      <div className="career-roadmap-container">
        <h2 className="career-roadmap-title">Career Roadmap Feedback</h2>
        <div className="career-roadmap-content">
          <img
            className="career-roadmap-image image-tilted"
            src="https://api.builder.io/api/v1/image/assets/TEMP/21da066dc202bd54bd847403b1d2374a1c726731?width=1056"
            alt="Career roadmap feedback"
          />
          <p className="career-roadmap-description">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmapSection;
