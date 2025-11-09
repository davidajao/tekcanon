import React from 'react';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, showButton = false, buttonText = "Get Started" }) => {
  return (
    <section className="hero-section-gradient">
      <svg className="hero-background-svg" viewBox="0 0 1440 674" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <filter id="heroNoiseFilter" x="-1497" y="-3253" width="4334" height="3926.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feTurbulence type="fractalNoise" baseFrequency="2 2" stitchTiles="stitch" numOctaves="3" result="noise" seed="5769" />
            <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
            </feComponentTransfer>
            <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
            <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
            <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
            <feMerge result="effect1_noise">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
          <linearGradient id="heroGradient" x1="669.998" y1="575.996" x2="503.998" y2="264.497" gradientUnits="userSpaceOnUse">
            <stop offset="0.193834" stopColor="#8ED8D2"/>
            <stop offset="0.773884" stopColor="#4B726F"/>
          </linearGradient>
        </defs>
        <g filter="url(#heroNoiseFilter)">
          <path d="M2837 -1305.5C2837 -248.151 1036.8 673.5 -160 673.5C-1356.8 673.5 -1497 -281.151 -1497 -1338.5C-1497 -2395.85 -526.801 -3253 670 -3253C1866.8 -3253 2837 -2362.85 2837 -1305.5Z" fill="url(#heroGradient)" fillOpacity="0.75"/>
        </g>
      </svg>
      
      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <h1 className="hero-section-title">{title}</h1>
          {subtitle && <p className="hero-section-subtitle">{subtitle}</p>}
          {showButton && (
            <button className="hero-action-button">
              <span className="hero-button-label">{buttonText}</span>
              <svg 
                className="hero-button-arrow" 
                width="14" 
                height="14" 
                viewBox="0 0 14 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M1.85693 12.1431L12.1426 1.85742M12.1426 1.85742H4.42836M12.1426 1.85742V9.57171" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
