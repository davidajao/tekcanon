import React from 'react';
import './ResumeInterviewSection.css';

const ResumeInterviewSection = () => {
  return (
    <section className="resume-interview-section">
      <div className="resume-interview-container">
        <h2 className="resume-interview-title">Resume/Interview Prep Support</h2>
        <div className="resume-interview-content">
          <p className="resume-interview-description">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <img
            className="resume-interview-image"
            src="https://api.builder.io/api/v1/image/assets/TEMP/ce5cbb5a393a1c11e3b66f820719360b14d8ed66?width=1056"
            alt="Interview preparation"
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeInterviewSection;
