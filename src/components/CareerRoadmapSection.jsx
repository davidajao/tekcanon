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
            Bring your goals, plans, and questions — we’ll help you refine your path, identify the right next steps, and build a clear, intentional roadmap toward the tech career you want.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmapSection;
