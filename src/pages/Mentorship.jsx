import React from 'react';
import HeroSection from '../components/HeroSection';
import SessionsSection from '../components/SessionsSection';
import ResumeInterviewSection from '../components/ResumeInterviewSection';
import CareerRoadmapSection from '../components/CareerRoadmapSection';
import './Mentorship.css';

const Mentorship = () => {
  return (
    <div className="mentorship">
      <HeroSection
        title="Mentorship"
        subtitle="Connect with experienced tech professionals who will guide you through your career journey, from building skills to landing your dream role."
        showButton={false}
        buttonText="Join Mentorship"
      />
      <SessionsSection />
      <ResumeInterviewSection />
      <CareerRoadmapSection />
    </div>
  );
};

export default Mentorship;
