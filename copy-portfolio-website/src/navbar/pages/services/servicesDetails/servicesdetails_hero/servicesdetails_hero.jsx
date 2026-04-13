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
                    <h2 className="content-main-title">Success Architects</h2>
                    <p className="content-text">
                        Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any websitet in on visitors.Web designing in a powerful way of just not an only profession Web designing in a powerful way of just not an only
                    </p>

                    <h3 className="content-sub-title">My Experts Areas where i gained skill</h3>
                    <p className="content-text">
                        Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any websitet in on visitors.Web designing in a powerful way of just not an only profession Web designing in a powerful way of just not an only
                    </p>
                    <p className="content-text">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
                    </p>

                    <h3 className="content-sub-title">My Experts Areas where i gained skill</h3>
                    <p className="content-text">
                        Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any websitet in on visitors.Web designing in a powerful way of just not an only profession Web designing in a powerful way of just not an only
                    </p>
                    <p className="content-text">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
                    </p>
                    <p className="content-text">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
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