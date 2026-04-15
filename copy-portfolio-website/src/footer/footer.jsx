import React, { useState } from 'react';
import './footer.css';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

import logofooter from '../assets/logo/white-logo-reeni (1).webp'
import { Link } from 'react-router-dom';
 
export default function Footer() {
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState(null);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        setNewsletterStatus('sending...');

        try {
            const response = await fetch("http://localhost:5000/api/form/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: newsletterEmail,
                    subject: "Newsletter Subscription",
                    message: "User subscribed to newsletter"
                }),
            });

            if (response.ok) {
                setNewsletterStatus('success');
                setNewsletterEmail('');
                setTimeout(() => setNewsletterStatus(null), 3000);
            } else {
                setNewsletterStatus('error');
                setTimeout(() => setNewsletterStatus(null), 3000);
            }
        } catch (error) {
            console.error("Newsletter subscription error:", error);
            setNewsletterStatus('error');
            setTimeout(() => setNewsletterStatus(null), 3000);
        }
    };

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
                        <form onSubmit={handleNewsletterSubmit} style={{display: 'flex'}}>
                            <input 
                                type="email" 
                                placeholder="Email Address"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                required
                            />
                            <div style={{display: 'flex'}}>
                            <button 
                                type="submit" 
                                aria-label="Subscribe"
                                disabled={newsletterStatus === 'sending...'}
                            >
                                <FiMail />
                            </button>
                             <button 
                                type="submit" 
                                aria-label="Subscribe"
                                disabled={newsletterStatus === 'sending...'}
                            > Subscribe 
                             </button>
                             </div>
                        </form>
                        {newsletterStatus === 'success' && <span className="newsletter-success">Subscribed!</span>}
                        {newsletterStatus === 'error' && <span className="newsletter-error">Error subscribing</span>}
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
                            <p>Al-Razi Street, KAAC4185, Tabuk</p>
                        </div>
                        <div className="contact-item">
                            <span className="footer-icon-circles"><FiPhone className='contact-icons' /></span>
                            <p>+966 506470794</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/hassandev691"  target="_blank" rel="noreferrer" className="social-btn"><IoLogoGithub className='footer-ic' /></a>
                        <a href="https://linkedin.com/in/hassandev691" target="_blank" rel="noreferrer" className="social-btn"><FaLinkedinIn className='footer-ic'/></a>
                        <a href="https://wa.me/966506470794" target='_blank' className="social-btn"><FaWhatsapp className='footer-ic'/></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hassandev691@gmail.com" target='_blank' className="social-btn"><IoMdMail className='footer-ic'/></a>
                    </div>
                </div>
            </div>

            {/* Copyright & Legal Bar */}
            <div className="footer-bottom">
                <p className='footer-bottom-p'>&copy; <span className='footer-bottom-span'>Hassan Farqooi 2026 </span>| All Rights Reserved</p>
                <div className="legal-links">
                    <Link to="/about" className='footer-legal-links'>Terms & Condition</Link>
                    <Link to="/about" className='footer-legal-links'>Privacy Policy</Link>
                    <Link to="/contact" className='footer-legal-links'>Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}