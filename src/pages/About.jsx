import React from "react";
import "./About.css";

const boardImages = [
  { src: process.env.PUBLIC_URL + "/assets/T4.jpg", alt: "David Ajao" },
  { src: process.env.PUBLIC_URL + "/assets/T1.jpg", alt: "Oleksandr Vakhno" },
  { src: process.env.PUBLIC_URL + "/assets/T3.jpg", alt: "Korede Olumodimu" },
  { src: process.env.PUBLIC_URL + "/assets/T2.jpg", alt: "Divinee Chidume" }
];

const About = () => {
  return (
    <div className="about">
      <section className="about-section">
        <div className="about-container">
          <h1 className="about-title">About Us</h1>
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
      </section>

      <section className="board-section">
        <h2 className="board-title">The Board</h2>
        <div className="board-grid">
          {boardImages.map((member, index) => (
            <img
              key={index}
              src={member.src}
              alt={member.alt}
              className="board-image"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
