import React, { useState } from 'react';
import './servicesdetails_hero.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import servicesdetails_hero_img from "../../../../../assets/service-detials-thumnail-wrap.webp";

export default function Servicesdetails_hero() {
    const [sidebarHoverClass, setSidebarHoverClass] = useState('');

    const handleSidebarMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('hover-left');
        else classes.push('hover-right');

        if (y < rect.height / 2) classes.push('hover-top');
        else classes.push('hover-bottom');

        setSidebarHoverClass(classes.join(' '));
    };

    const handleSidebarMouseLeave = () => {
        setSidebarHoverClass('');
    };

    const categories = [
        "TechPros",
        "NetWorks",
        "DataMasters",
        "Dibetics section",
        "DigitalSolutions",
        "CodeGenius"
    ];

    return (
        <div className="services-hero-container">
            <div className="services-hero-left">
                <div className="services-hero-image-wrapper">
                    <img
                        src={servicesdetails_hero_img}
                        alt="Work Desk Setup"
                        className="services-hero-image"
                    />
                </div>

                <div className="services-hero-content">
                    <h2 className="content-main-title">Services Details</h2>
                    <p className="content-text">
                      Web development is not just about writing code for me; it’s about creating functional and scalable products. I use modern tech stacks (React, Next.js, Node.js) to build applications that are fast, secure, and user-friendly. My goal is always to maintain clean code so that there are no issues with scalability in the future.
                    </p>

                    <h3 className="content-sub-title">My Experts Areas where i gained skill</h3>
                       <h5 className="content-sub-title">Full-Stack Architecture & Logic</h5>
                    <p className="content-text">
                       Designing a powerful application is more than just a profession; it is a passion for building systems that last. I believe that the true value of a website lies in its ability to handle complex data while remaining lightning-fast for the visitor. From database management with MongoDB to complex state management in React, I ensure every backend route and frontend component works in perfect harmony.
                    </p>
                     <h5 className="content-sub-title">User-Centric Interface Design</h5>
                    <p className="content-text">
                      A functional application is only successful if it is intuitive. I focus on creating digital spaces that are visually striking and easy to navigate. By implementing clean UI/UX principles, I reduce the learning curve for users, allowing them to interact with complex workflows effortlessly. Every pixel is placed with the goal of making your brand look unique and professional.
                    </p>

                    <h3 className="content-sub-title">Technical Proficiency & Specialization</h3>
                     <h5 className="content-sub-title">Performance Optimization & SEO</h5>
                    <p className="content-text">
                     In today’s market, speed is a critical feature. I specialize in optimizing Core Web Vitals and utilizing Server-Side Rendering (SSR) to ensure your application ranks high on search engines and provides a seamless user experience. I don't just build websites; I build high-performance digital assets.
                    </p>
                     <h5 className="content-sub-title">Seamless Deployment & DevOps</h5>
                    <p className="content-text">
                        Your project deserves a stable home. I handle the complex architecture of cloud deployment, ensuring your site runs smoothly and scales without effort. By setting up automated CI/CD pipelines, I make sure that updates are delivered safely and your infrastructure remains secure 24/7.
                    </p>
                     <h5 className="content-sub-title">End-to-End Maintenance</h5>
                    <p className="content-text">
                      Quality development doesn't end at launch. I provide dedicated support and regular performance audits to keep your application "perfect" even as your user base grows. Whether it's custom API development or interactive frontend animations, I handle every project with a detail-oriented, professional approach.
                    </p>
                </div>
            </div>

            <div 
                className={`services-hero-sidebar directional-effect ${sidebarHoverClass}`}
                onMouseMove={handleSidebarMouseMove}
                onMouseLeave={handleSidebarMouseLeave}
            >
                <h3 className="sidebar-title">
                    Service Category <span className="title-dot"></span>
                </h3>
                <ul className="category-list">
                    {categories.map((category, index) => (
                        <li key={index} className="category-item">
                            <span className="category-name">{category}</span>
                            <MdKeyboardArrowRight className="category-icon" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}