import { useState, useEffect } from 'react';
import educationImage from '../../../../assets/experience/experience.webp';
import './experiencehome.css';

const servicesData = [
    {
        experience: 'experience',
        company: 'Cognita-Innovative Solutions',
        role: 'FULL STACK LEAD ENGINEER',
        description: 'Overseeing the development of enterprise-grade web applications using Next.js, Laravel, and AWS. Responsible for technical architecture, mentoring engineers, and driving innovation across product development.'
    },
    {
        experience: 'experience',
        company: 'Jans Group',
        role: 'SENIOR FULL STACK ENGINEER',
        description: 'Led the design and development of multi-tenant platforms. Worked on real-time dashboards, authentication flows, and database optimization, ensuring seamless integration between frontend and backend systems.'
    }, 
    
];

export default function Experiencehome() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="experience-containers">
            <div className="experience-content">
                {/* Left Column - Heading and Text Cards */}
                <div className="experience-left">
                    <h1 className="experience-heading">Experiences</h1>
                    <div className="experience-cards">
                        {servicesData.map((service, index) => (
                            <div key={index} className="experience-card">
                                <h3 className="experience-card-title">
                                    <p className="experience-card-number">{service.experience}.</p>
                                    <p className='role'> {service.role}</p>
                                    <p className='company'>{service.company}</p>
                                </h3>
                                <p className="experience-card-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="experience-image-container">
                    <img
                        src={educationImage}
                        alt="Experience Illustration"
                        className="experience-image"
                    />
                </div>
            </div>
        </div>
    );
}