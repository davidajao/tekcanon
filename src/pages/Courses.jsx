import React from 'react';
import HeroSection from '../components/HeroSection';
import FreeCoursesSection from '../components/FreeCoursesSection';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses">
      <HeroSection
        title="Master Technical Interviews with Expert-Led Courses"
        subtitle="Learn from industry professionals through comprehensive courses designed to take you from beginner to job-ready in the most in-demand technologies."
        showButton={false}
        buttonText="Explore Courses"
      />
      <FreeCoursesSection />
    </div>
  );
};

export default Courses;
