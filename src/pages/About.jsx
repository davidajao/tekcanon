import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <section className="about-section">
        <div className="about-container">
          <h1 className="about-title">About Us</h1>
          <div className="about-images">
            <img
              src={process.env.PUBLIC_URL + "/assets/David_BBck_CR.jpg"}
              alt="Team member"
              className="about-image-large"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3c44cc760a5813a4a23998ad653c5259c710596d?width=532"
              alt="Team member working"
              className="about-image-small"
            />
          </div>
          <div>
            <p className="about-description">
              TekCanon was created with one mission: to help students break into
              high-paying, high-impact tech careers—no matter where they start.
              <br /> <br />
              Coming from a non-target university, I knew my work was cut out
              for me in the job search for a software engineering role. I tried
              countless approaches, studied what actually worked, and doubled
              down on the strategies that delivered real results. Those same
              methods helped me land a job at Microsoft before graduating.
              <br /> <br />
              I’ve since shared these strategies with friends, family, and
              mentees—many of whom have gone on to earn roles at companies like
              Salesforce, AWS, Microsoft, and more. Their success made one thing
              clear: with the right guidance, preparation, and exposure,
              students can achieve life-changing opportunities in tech.
              <br /> <br />
              TekCanon exists to make that guidance accessible to everyone. We
              combine education, exposure, and intentional career development to
              help students build confidence, stand out to employers, and
              navigate the tech industry with clarity.
              <br /> <br />
              We’ve walked this path—and now we’re here to help you walk yours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
