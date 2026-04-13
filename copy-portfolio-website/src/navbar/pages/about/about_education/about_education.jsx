import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const servicesData = [
    {
        title: 'INTERMEDIATE IN (ICS)',
        year: 'Sep 2015 - Aug 2017',
        description: 'Focused study of computer science basics including programming, logic building, and web fundamentals. Completed several academic projects and gained strong analytical and problem-solving skills that built a solid foundation for higher studies in computer science.'
    },
    { 
        title: 'FULL STACK LEAD ENGINEER',
        year: 'Jan 2025 - Present',
        description: 'Overseeing the development of enterprise-grade web applications using Next.js, Laravel, and AWS. Responsible for technical architecture, mentoring engineers, and driving innovation across product development.'
    },
    {
        title: "'BACHELOR'S DEGREE IN COMPUTER SCIENCE",
        year: 'Sep 2018 - Aug 2022',
        description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development. Graduated with honors and completed multiple projects demonstrating practical application of theoretical concepts.'
    },
    {
        title: "SENIOR FULL STACK ENGINEER",
        year: 'Aug 2023 - Dec 2025',
        description: 'Led the design and development of multi-tenant platforms. Worked on real-time dashboards, authentication flows, and database optimization, ensuring seamless integration between frontend and backend systems.'
    }
];

export default function() {
    const [borderState, setBorderState] = useState({});
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const horizontal = x < rect.width / 2 ? 'left' : 'right';
        const vertical = y < rect.height / 2 ? 'top' : 'bottom';

        setBorderState((prevState) => ({ ...prevState, [index]: `${horizontal}-${vertical}` }));
    };

    const handleMouseLeave = (index) => {
        setBorderState((prevState) => ({ ...prevState, [index]: '' }));
    };

    // Variants for large screens - slide from left to right
    const lgCardVariants = {
        hidden: { opacity: 0, x: -123 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
        }),
    };

    // Variants for small screens - slide from top
    const smCardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
        }),
    };

    const cardVariants = isLargeScreen ? lgCardVariants : smCardVariants;

    return (
        <div className="education-container">
            {/* Change this section in your return statement */}
<div className="title-wrapper">
    <h1 className='education-title'>Education</h1>
</div>
            <div className="education-content-wrapper">
                {/* Left Column - Service Cards */}
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className={`service-card ${borderState[index] || ''}`}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                            variants={cardVariants}
                        >
                            <p className='service-cards-title'>{service.title}</p>
                            <h3 className="service-cards-year">
                                <span>{service.year}.</span> 
                            </h3>
                            <p className="service-cards-description">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}