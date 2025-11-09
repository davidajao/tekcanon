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
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
