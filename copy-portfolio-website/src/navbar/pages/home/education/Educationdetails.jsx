import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './educationdetails.css';

const servicesData = [
    {
        title: 'INTERMEDIATE IN (ICS)',
        year: 'Sep 2015 - Aug 2017',
        description: 'Focused study of computer science basics including programming, logic building, and web fundamentals. Completed several academic projects and gained strong analytical and problem-solving skills that built a solid foundation for higher studies in computer science.'
    },
    {
        title: "BACHELOR'S DEGREE IN COMPUTER SCIENCE",
        year: 'Sep 2018 - Aug 2022',
        description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development. Graduated with honors and completed multiple projects demonstrating practical application of theoretical concepts.'
    },
    {
        title: "BACHELOR'S DEGREE IN COMPUTER SCIENCE",
        year: 'Sep 2018 - Aug 2022',
        description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development. Graduated with honors and completed multiple projects demonstrating practical application of theoretical concepts.'
    },
    {
        title: 'INTERMEDIATE IN (ICS)',
        year: 'Sep 2015 - Aug 2017',
        description: 'Focused study of computer science basics including programming, logic building, and web fundamentals. Completed several academic projects and gained strong analytical and problem-solving skills that built a solid foundation for higher studies in computer science.'
    }
];

export default function Educationdetails() {
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
                <h1 className='education-title'>Education</h1>
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