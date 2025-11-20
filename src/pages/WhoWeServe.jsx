import React from "react";
import "./WhoWeServe.css";

const WhoWeServe = () => {
  return (
    <div className="who-we-serve">
      <section className="who-we-serve-section">
        <div className="background-decoration">
          <div className="circle-green"></div>
          <div className="circle-blue"></div>
        </div>
        <div className="who-we-serve-container">
          <h1 className="who-we-serve-title">Who We Serve</h1>
          <p className="who-we-serve-description">
            TekCanon serves students and early-career professionals who are
            driven to build high-impact careers in tech but may lack access to
            guidance, mentorship, or strong industry networks. We focus on
            supporting individuals from non-target schools, underrepresented
            backgrounds, and anyone who feels overlooked in traditional
            recruiting pipelines. Our community is built for learners who want
            clear direction, practical interview preparation, and a supportive
            environment that helps them break into top tech roles with
            confidence.
          </p>
        </div>
      </section>

      <section className="our-story-section">
        <div className="our-story-container">
          <div className="our-story-content">
            <h2 className="our-story-title">Our Story</h2>
            <p className="our-story-description">
              TekCanon was born from firsthand experience. Coming from a
              non-target university, I had to navigate the tech recruiting
              process with limited support. After experimenting with different
              strategies, I discovered what truly works — methods that helped me
              land a software engineering role at Microsoft before graduation. I
              shared these techniques with friends and family, who went on to
              secure roles at companies like AWS, Salesforce, and Microsoft.
              Their success inspired me to create TekCanon: a platform dedicated
              to sharing proven strategies, mentorship, and opportunities so
              more students can access life-changing careers in tech.
            </p>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/02763d5f4a0f5f90c8d99b8bde8580c797e69b89?width=1302"
            alt="Our Story"
            className="our-story-image"
          />
        </div>
      </section>
    </div>
  );
};

export default WhoWeServe;
