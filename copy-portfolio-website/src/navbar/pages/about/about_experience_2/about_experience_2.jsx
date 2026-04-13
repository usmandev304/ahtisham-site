import React, { useEffect, useRef, useState } from 'react';
import './about_experience_2.css';
import img from '../../../../assets/expert-img-two.webp';

export default function About_experience_2() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "experience",
      name: "Cognita-Innovative Solutions",
      designation: "FULL STACK LEAD ENGINEER",
      description: "Overseeing the development of enterprise-grade web applications using Next.js, Laravel, and AWS. Responsible for technical architecture, mentoring engineers, and driving innovation across product development."
    },
    {
      role: "experience",
      name: "Jans Group",
      designation: "SENIOR FULL STACK ENGINEER",
      description: "Led the design and development of multi-tenant platforms. Worked on real-time dashboards, authentication flows, and database optimization, ensuring seamless integration between frontend and backend systems."
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`experience_2-section ${visible ? 'show' : ''}`}
    >
      <div className="experience_2-container">
        
        <div className="experience_2image-wrapper">
          <div className="experience_2image-container">
            <img src={img} alt="Expert working" className="experience_2-image" />
          </div>
        </div>

        <div className="experience_2-content-wrapper">
          <div className="experience_2-header-inline">
            <h2 className="experience_2-section-title">Experiences</h2>
            <div className="experience_2-decorative-line">
              <span className="line-dot"></span>
              <span className="line-bar"></span>
              <span className="line-dot"></span>
            </div>
          </div>

          <div className="experience_2-experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience_2-item">
                <span className="experience_2-role">{exp.role}</span>
                <h3 className="experience_2-name">{exp.name}</h3>
                <p className="experience_2-designation">{exp.designation}</p>
                <p className="experience_2-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}