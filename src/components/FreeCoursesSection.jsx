import React from 'react';
import './FreeCoursesSection.css';

const FreeCoursesSection = () => {
  const courses = [
    {
      title: 'Before the Resume',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/48d47290c786a4cdd54f655056d865ff1f56e6e9?width=766',
      gradient: 'linear-gradient(180deg, #FFF 10.1%, rgba(0, 0, 0, 0.80) 13.46%)',
      link: '#'
    },
    {
      title: 'Your SWE Resume',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/6ee1bf45c297913ad2c4315cbf9ebc02f3280025?width=766',
      gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 15.38%)',
      link: '#'
    },
    {
      title: 'The interview',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/194f0d4b20c2ae927625474ad4a939a60a7c75c8?width=766',
      gradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(0, 0, 0, 0.20) 45.67%)',
      link: '#'
    },
    {
      title: 'Technical Questions',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/3ed2aa999ab26f70bc51080dc1e1a3938f8869c7?width=766',
      gradient: 'linear-gradient(180deg, #FFF 10.1%, rgba(0, 0, 0, 0.80) 13.46%)',
      link: '#'
    },
    {
      title: 'Stacks & Queues',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/0e772def92705880d861f8e875228a957acffe3d?width=766',
      gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 15.38%)',
      link: '#'
    },
    {
      title: 'Trees & Graphs',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/ab2af9e17fdc661f45ac03a51b1c51821bd7f7b3?width=766',
      gradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(0, 0, 0, 0.20) 45.67%)',
      link: '#'
    },
    {
      title: 'Two Pointer Algorithms',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/6cf15e9f15ee88b198df6089c4d04fd5e3274a30?width=766',
      gradient: 'linear-gradient(180deg, #FFF 10.1%, rgba(0, 0, 0, 0.80) 13.46%)',
      link: '#'
    },
    {
      title: 'Sliding Window Algorithms',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/53110be40382c89a12ffc374f7ab7a2612eabe97?width=766',
      gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 15.38%)',
      link: '#',
      multiline: true
    },
    {
      title: 'Anything Else',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/2cee6d09cb0b61beabbe5c1dfd1ffc29e90cfa85?width=766',
      gradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(0, 0, 0, 0.20) 45.67%)',
      link: '#'
    }
  ];

  return (
    <section className="free-courses-section">
      <div className="free-courses-container">
        <h2 className="free-courses-title">Free Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <a
              key={index}
              href={course.link}
              className="course-card"
              style={{
                backgroundImage: `${course.gradient}, url('${course.image}')`
              }}
            >
              <div className={`course-card-content ${course.multiline ? 'multiline' : ''}`}>
                <h3 className="course-title">{course.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeCoursesSection;
