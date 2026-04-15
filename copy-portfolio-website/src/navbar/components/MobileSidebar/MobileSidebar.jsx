import React, { useState } from "react";
import { MdClose, MdPhone, MdKeyboardArrowDown } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logoSrc from "../../../assets/logo/white-logo-reeni (1).webp";
import manImage from "../../../assets/man (1).png";
import SocialIcons from "../SocialIcons";
import ContactInfo from "./ContactInfo";

export default function MobileSidebar({ isOpen, onClose, socialLinks }) {
  // Track which dropdown is open (null, 'services', 'blog', or 'project')
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${isOpen ? "visible" : "hidden"}`}
        onClick={onClose}
      />
      {/* Sidebar Container */}
      <div
        className={`mobile-sidebar ${isOpen ? "visible" : "hidden"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src={logoSrc} alt="Reeni logo" />
          </div>
          <button onClick={onClose} className="close-btn">
            <MdClose />
          </button>
        </div>

        {/* Profile Section (Hidden on smaller mobile screens via CSS if needed) */}
        <div className="sidebar-content">
          <div className="profile-image">
            <img src={manImage} alt="Developer" />
          </div>
          <h3 className="profile-title">
           Full-Stack Developer dedicated to delivering superior and scalable web solutions.
          </h3>
          <p className="profile-description">
           Expert Full-Stack Developer specializing in high-performance web applications, robust backend systems, and seamless user experiences.
          </p>

          <ContactInfo
            icon={MdPhone}
            label="Call Now"
            value="+92 (8800) - 98670"
            href="tel:+92880098670"
            type="phone"
          />
          <ContactInfo
            icon={IoMail}
            label="Mail Us"
            value="hassandev691@gmail.com"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hassandev691@gmail.com"
            type="email"
          />
          <ContactInfo
            icon={FaLocationCrosshairs}
            label="Location"
            value="Karachi, Pakistan"
            href="#"
            type="link"
          />
        </div>

        {/* Navigation Accordion */}
        <nav className="sidebar-nav mobile-navs">
          <Link to="/" onClick={onClose}>HOME</Link>
          <Link to="/about" onClick={onClose}>ABOUT</Link>

          {/* SERVICES Dropdown */}
          <div className={`nav-dropdown-wrapper ${activeDropdown === "services" ? "active" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown("services")}>
              <span className="drop">SERVICES</span> <MdKeyboardArrowDown className="arrow-icon-left" />
            </div>
            <div className="dropdown-content">
              <Link to="/services" onClick={onClose}>SERVICE</Link>
              <Link to="/services-details" onClick={onClose}>SERVICE DETAILS</Link>
            </div>
          </div>

          {/* BLOG Dropdown */}
          <div className={`nav-dropdown-wrapper ${activeDropdown === "blog" ? "active" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown("blog") }>
              <span className="drop">BLOG</span> <MdKeyboardArrowDown className="arrow-icon-left" />
            </div>
            <div className="dropdown-content">
              <Link to="/blog" onClick={onClose}>BLOG LIST</Link>
              <Link to="/blog/blogdetails" onClick={onClose}>BLOG DETAILS</Link>
            </div>
          </div>

          {/* PROJECT Dropdown */}
          <div className={`nav-dropdown-wrapper ${activeDropdown === "project" ? "active" : ""}`}>
            <div className="dropdown-trigger" onClick={() => toggleDropdown("project")}>
              <span className="drop">PROJECT</span> <MdKeyboardArrowDown className="arrow-icon-left" />
            </div>
            <div className="dropdown-content">
              <Link to="/project" onClick={onClose}>PROJECT</Link>
              <Link to="/project/projectdetails" onClick={onClose}>PROJECT DETAILS</Link>
            </div>
          </div>

          <Link to="/contact" onClick={onClose}>CONTACT</Link>
        </nav>

        <hr className="divider" />

        {/* Footer */}
        <div className="sidebar-footer">
          <p className="footer-label">Find With Me</p>
          <SocialIcons socialLinks={socialLinks} variant="list" />
        </div>
      </div>
    </>
  );
}