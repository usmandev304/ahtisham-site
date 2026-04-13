import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import latestServicesImage from '../../../../assets/latestservices/latest-services-user-image-two.webp';
import './Services.css';

const servicesData = [
    {
        number: '01',
        title: 'Development',
        description: 'Building high-performance applications with clean code. I focus on making the technical side seamless so your users have an enjoyable and special experience. Let\'s build something great together.'
    },
    {
        number: '02',
        title: 'WebFlow',
        description: 'Transforming ideas into stunning, interactive websites. I specialize in creating digital spaces that are visually special and easy to navigate. Ready to launch your site? Get in touch.'
    },
    {
        number: '03',
        title: 'Design',
        description: 'Crafting intuitive UIs that tell a story. Every pixel is placed with the goal of making your brand look unique and special. Reach out to start the design process.'
    }, 
    {
        number: '04',
        title: 'Devops',
        description: 'Ensuring your project runs smoothly and scales without effort. I handle the complex architecture so you can focus on making your business special. Let\'s talk about your infrastructure.'
    },
];

export default function Services() {
    const [borderState, setBorderState] = useState({});
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fixed mouse move — was using rect.bottom and rect.top incorrectly
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
                ease: [0.22, 1, 0.36, 1], // smooth spring-like ease
            },
        }),
    };

    return (
        <div className="services-container">
            <div className="services-wrapper">
                {/* Left Column - Service Cards */}
                <div className="services-left-column">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className={`service-card home-ser ${borderState[index] || ''}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={index}
                            variants={cardVariants}
                        >
                            <h3 className="service-card-title">
                                <span>{service.number}.</span> {service.title}
                            </h3>
                            <p className="service-card-description">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column - Image */}
                <div className="services-right-column">
                    <div className="services-image-wrapper">
                        <img
                            src={latestServicesImage}
                            alt="Latest Services"
                            className="services-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}