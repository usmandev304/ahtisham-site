import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './services_cards.css';

const servicesData = [
    { id: '01.', title: 'Development', description: 'Building high-performance applications with clean code. I focus on making the technical side seamless so your users have an enjoyable and special experience. Let’s build something great together.' },
    { id: '04.', title: 'Devops', description: "Ensuring your project runs smoothly and scales without effort. I handle the complex architecture so you can focus on making your business special. Let’s talk about your infrastructure." },
    { id: '02.', title: 'WebFlow', description: 'Transforming ideas into stunning, interactive websites. I specialize in creating digital spaces that are visually special and easy to navigate. Ready to launch your site? Get in touch.' },
    { id: '05.', title: 'Maintenac & Deployment', description: "Your project deserves to stay perfect even after launch. I provide dedicated support to keep everything enjoyable for your clients. Drop a message for a maintenance plan." },
    { id: '03.', title: 'Design', description: 'Crafting intuitive UIs that tell a story. Every pixel is placed with the goal of making your brand look unique and special. Reach out to start the design process.' }
];

export default function Services_cards() {
    const [borderState, setBorderState] = useState({});
    const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const horizontal = x < rect.width / 2 ? 'left' : 'right';
        const vertical = y < rect.height / 2 ? 'top' : 'bottom';
        setBorderState((prev) => ({ ...prev, [index]: `${horizontal}-${vertical}` }));
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
        }),
    };

    return (
        <div className="services_section">
            <div className="services_grid">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => setBorderState((prev) => ({ ...prev, [index]: '' }))}
                        className={`services_card_item ${borderState[index] || ''}`}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        <div className="services_card_header">
                            <span className="service_id">{service.id}</span>
                            <h3 className="service_title">{service.title}</h3>
                        </div>
                        <p className="service_desc">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}