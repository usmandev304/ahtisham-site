import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import educationImage from '../../../../assets/experience/experience.webp';
import './experiencehome.css';

const servicesData = [
    {
        title: 'Senior Full Stack Engineer / Team Lead, Softerio Solutions',
        year: '2025 – Present',
        description: 'I lead the development of scalable web and AI-powered applications, designing robust systems using the MERN stack, Laravel, and Python (Flask). I work extensively on AI/ML and LLM-based solutions, integrating intelligent features into modern applications while managing deployments through Docker and cloud platforms. I also design and implement APIs using REST and GraphQL, ensuring scalability and performance, and take an active role in leading teams, conducting code reviews, and making key technical decisions to drive successful project outcomes.'
    },
    {
        title: "Senior Full Stack Engineer, Stallions Technologies",
        year: '2022 – 2025 London',
        description: 'I lead the development of scalable web and AI-powered applications, actively working on AI/ML and LLM-based solutions while architecting systems using the MERN stack, Laravel, and Python (Flask). I manage deployments using Docker and cloud platforms, design high-performance APIs with REST and GraphQL, and take responsibility for leading teams, conducting code reviews, and setting technical direction. Additionally, I collaborate closely with stakeholders to ensure smooth project delivery and successful outcomes.'
    },
    {
        title: 'Senior Full Stack Developer, E-connect Software, Inc - A Visionaize Inc Company',
        year: '2020 – 2022Fremont, California',
        description: 'I have developed full stack applications using the MERN stack and Laravel, building scalable backend systems with Node.js and Python. I created responsive user interfaces using React.js, Angular, and Next.js, and designed efficient APIs using both REST and GraphQL. I have experience working with Docker and cloud deployments, while also leading feature development, mentoring junior developers, and continuously optimizing system performance and scalability.'
    },
     {
        title: 'Frontend Developer, Techozon Software House',
        year: '2018 – 2020 Islamabad, Pakistan',
        description: 'I lead the development of scalable web and AI-powered applications, designing robust systems using the MERN stack, Laravel, and Python (Flask). I actively work on AI/ML and LLM-based solutions, manage deployments using Docker and cloud platforms, and design efficient APIs using REST and GraphQL. I also lead teams, conduct code reviews, and make key technical decisions to ensure high-quality and successful project delivery.'
    },
];

export default function Experiencehome() {
    const [borderState, setBorderState] = useState({});

    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const horizontal = x < rect.width / 2 ? 'left' : 'right';
        const vertical = y < rect.height / 2 ? 'top' : 'bottom';
        setBorderState(prev => ({ ...prev, [index]: `${horizontal}-${vertical}` }));
    };

    const handleMouseLeave = (index) => {
        setBorderState(prev => ({ ...prev, [index]: '' }));
    };

    // Bottom to current position animation
    const cardVariants = {
        hidden: { opacity: 0, y: 80 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };



    return (
        <div className="education-container home-education-container">
            <div className="title-wrapper">
                <h1 className='education-title'> Experience</h1>
            </div>
            <div className="education-content-wrapper">
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className={`service-card home-ed home-service-card ${borderState[index] || ''}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={index}
                            variants={cardVariants}
                        >
                            <p className='home-services-card-title'>{service.title}</p>
                            <h3 className="home-services-card-year">
                                <span>{service.year}</span>
                            </h3>
                            <p className="home-service-card-description">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}