import React from 'react';
import './SessionsSection.css';

const SessionsSection = () => {
  return (
    <section className="sessions-section">
      <div className="sessions-container">
        <h2 className="sessions-title">1:1 Sessions with Mentors</h2>
        <div className="sessions-content">
          <img
            className="sessions-image image-tilted"
            src="https://api.builder.io/api/v1/image/assets/TEMP/81b44d8cca7b988e7e7c5a6724f79d76f414aeb5?width=1056"
            alt="Mentorship session"
          />
          <p className="sessions-description">
            Connect directly with experienced engineers and tech professionals who can answer your questions, share real-world insights, and guide you through each stage of your career journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
