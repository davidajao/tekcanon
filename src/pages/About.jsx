import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-section">
        <div className="about-container">
          <h1 className="about-title">About Us</h1>
          <div className="about-images">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/23710fe124185b4bf3afe3f208d622c37af992ed?width=975"
              alt="Team member"
              className="about-image-large"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3c44cc760a5813a4a23998ad653c5259c710596d?width=532"
              alt="Team member working"
              className="about-image-small"
            />
          </div>
          <p className="about-description">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
