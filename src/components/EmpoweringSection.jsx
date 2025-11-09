import React from 'react';
import './EmpoweringSection.css';

const EmpoweringSection = () => {
  const showButtons = false;

  const sections = [
    {
      title: 'Coding',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/0b44d0b4ed2c32726e2bb0a7a97a19f13217642c?width=1056',
      description: 'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      buttonText: 'View Course',
      hasBorder: true,
      hasArrow: true
    },
    {
      title: 'Job Readiness',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/53dca0a7abbcd09264d362cf2af341690356a7c8?width=1056',
      description: 'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      buttonText: 'View Courses',
      hasArrow: true
    },
    {
      title: 'Career Placement Support',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/272f66246514401fc7650b10b7951aeacb887d19?width=1056',
      description: 'Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      buttonText: 'View Courses',
      hasArrow: false
    }
  ];

  return (
    <section className="empowering-section">
      <div className="empowering-intro">
        <h2 className="empowering-heading">Empowering your future one step at a time!</h2>
        <p className="empowering-description">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
        </p>
      </div>

      <div className="empowering-container">
        {sections.map((section, index) => (
          <div key={index} className="empowering-item">
            <div className="empowering-item-left">
              <h3 className="empowering-item-title">{section.title}</h3>
              <img 
                src={section.image} 
                alt={section.title}
                className={`empowering-item-image ${section.hasBorder ? 'bordered' : ''}`}
              />
            </div>
            <div className="empowering-item-right">
              <p className="empowering-item-description">{section.description}</p>
              {showButtons && (
                <button className="empowering-button">
                  <span className="button-text">{section.buttonText}</span>
                  {section.hasArrow && (
                    <svg
                      className="button-arrow"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11.2857L11.2857 1M11.2857 1H3.57143M11.2857 1V8.71429"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmpoweringSection;
