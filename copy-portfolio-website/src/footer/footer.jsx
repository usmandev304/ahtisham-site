import React from 'react';
import './footer.css';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import logofooter from '../assets/logo/white-logo-reeni (1).webp'
import { Link } from 'react-router-dom';
 
export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Brand & Newsletter Section */}
                <div className="footer-section brand-section">
                    <div className="brand-logo">
                        <img src={logofooter} alt="" className='logofooter' />
                    </div>
                    <h1 className="hero-headline">
                        <strong>Get Ready</strong> <span className="light-text">To Create Great</span>
                    </h1>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Email Address" />
                        <button type="button" aria-label="Subscribe">
                            <FiMail />
                        </button>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section links-section">
                    <h3>Quick Link</h3>
                    <ul>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/services">Service</Link></li>
                        <li><Link to="/contact">Contact Me</Link></li>
                        <li><Link to="/blog">Blog Post</Link></li>
                        <li><Link to="/services">Pricing</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-section contact-sections">
                    <h3>Contact</h3>
                    <div className="contact-list">
                        <div className="contact-item">
                            <span className="footer-icon-circles"><FiMail className='contact-icons' /></span>
                            <p>hassandev691@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <span className="footer-icon-circles"><FiMapPin className='contact-icons' /></span>
                            <p>Al-Razi Street, KAAC4185</p>
                        </div>
                        <div className="contact-item">
                            <span className="footer-icon-circles"><FiPhone className='contact-icons' /></span>
                            <p>+966 506470794</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="#instagram" className="social-btn"><FaInstagram className='footer-ic' /></a>
                        <a href="https://linkedin.com/in/hassandev691" target="_blank" rel="noreferrer" className="social-btn"><FaLinkedinIn className='footer-ic'/></a>
                        <a href="#twitter" className="social-btn"><FaTwitter className='footer-ic'/></a>
                        <a href="#facebook" className="social-btn"><FaFacebookF className='footer-ic'/></a>
                    </div>
                </div>
            </div>

            {/* Copyright & Legal Bar */}
            <div className="footer-bottom">
                <p className='footer-bottom-p'>&copy; <span className='footer-bottom-span'>Inversweb 2025 </span>| All Rights Reserved</p>
                <div className="legal-links">
                    <Link to="/about" className='footer-legal-links'>Terms & Condition</Link>
                    <Link to="/about" className='footer-legal-links'>Privacy Policy</Link>
                    <Link to="/contact" className='footer-legal-links'>Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}