import React from 'react';
import './WhoWeServe.css';

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
            Lorem ipsum dolor sit amet consectetur. Lacus in viverra suspendisse pulvinar eros nisl nibh habitant euismod. Enim feugiat nunc sit faucibus consectetur platea a ornare. Duis viverra enim ipsum aenean consequat malesuada. Sed adipiscing eget elit mollis vitae elementum donec ut. Molestie eros amet pellentesque orci vitae in viverra amet. Enim sit leo nunc nisl consequat ipsum. Eu nulla id tortor diam molestie lacus. Viverra vulputate bibendum sit fusce etiam sagittis urna. Viverra fermentum in morbi bibendum facilisi aliquam augue quisque eu. Nisl tristique tortor vulputate velit at aliquet scelerisque sed id. Varius at quis viverra vitae consequat dictum et viverra feugiat. Nunc pharetra netus cursus faucibus nulla mattis nunc. Dui orci pulvinar est sit. Tortor et vitae eu aliquet a nec nisl sagittis. Tellus est consectetur amet orci sit. Turpis elementum adipiscing in neque. Elementum lorem cum id risus a. Nec nibh sed diam dolor at vestibulum in sit a. Id nibh mattis lectus consequat nunc purus nunc vitae.
          </p>
        </div>
      </section>

      <section className="our-story-section">
        <div className="our-story-container">
          <div className="our-story-content">
            <h2 className="our-story-title">Our Story</h2>
            <p className="our-story-description">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
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
