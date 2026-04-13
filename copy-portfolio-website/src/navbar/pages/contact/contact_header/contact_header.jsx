import React, { useState } from 'react';
import './contact_header.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Contact_header() {
    // Har card ke liye alag hover state track karne ke liye object state
    const [hoverStates, setHoverStates] = useState({});

    const contactInfo = [
        {
            id: 1,
            icon: <FaMapMarkerAlt className='contacts-icons' />,
            title: "Address",
            line1: "Dhaka 102, utl 1216, road 45",
            line2: "house of street"
        },
        {
            id: 2,
            icon: <FaEnvelope className='contacts-icons' />,
            title: "E-Mail",
            line1: "hasan@yourmail.com",
            line2: "themespark11@gmail.com"
        },
        {
            id: 3,
            icon: <FaPhoneAlt className='contacts-icons' />,
            title: "Call Me",
            line1: "+966 506470794",
            line2: "+966 506470794"
        }
    ];

    const handleMouseMove = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('hover-left');
        else classes.push('hover-right');

        if (y < rect.height / 2) classes.push('hover-top');
        else classes.push('hover-bottom');

        setHoverStates(prev => ({ ...prev, [id]: classes.join(' ') }));
    };

    const handleMouseLeave = (id) => {
        setHoverStates(prev => ({ ...prev, [id]: '' }));
    };

    return (
        <section className="contact-header-section">
            <div className="contact-header-container">
                <div className="contact-cards-grid">
                    {contactInfo.map((info) => (
                        <div 
                            key={info.id}
                            className={`contact-info-card directional-effect ${hoverStates[info.id] || ''}`}
                            onMouseMove={(e) => handleMouseMove(e, info.id)}
                            onMouseLeave={() => handleMouseLeave(info.id)}
                        >
                            <div className="contacts-icons-wrapper">
                                {info.icon}
                            </div>
                            <h3 className="contact-info-title">{info.title}</h3>
                            <p className="contact-info-text">
                                {info.line1} <br />
                                {info.line2}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}