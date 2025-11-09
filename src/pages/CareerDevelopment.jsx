import React from 'react';
import HeroSection from '../components/HeroSection';
import EmpoweringSection from '../components/EmpoweringSection';
import './CareerDevelopment.css';

const CareerDevelopment = () => {
  return (
    <div className="career-development">
      <HeroSection
        title="Career Development"
        subtitle="Learn from industry professionals through comprehensive courses designed to take you from beginner to job-ready in the most in-demand technologies."
      />
      <EmpoweringSection />
    </div>
  );
};

export default CareerDevelopment;
