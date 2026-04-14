import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './ContactSection.css';

export default function ContactSection() {
    const [contactHoverClass, setContactHoverClass] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending...');

        try { 
            const data = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            };

            const response = await fetch("http://localhost:5000/api/form/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    const handleContactMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('hover-left');
        else classes.push('hover-right');

        if (y < rect.height / 2) classes.push('hover-top');
        else classes.push('hover-bottom');

        setContactHoverClass(classes.join(' '));
    };

    const handleContactMouseLeave = () => {
        setContactHoverClass('');
    };

    return (
        <section className="contact-wrapper">
            <div className="contact-inner-container">
                <div
                    className={`contact-main-card directional-effect ${contactHoverClass}`}
                    onMouseMove={handleContactMouseMove}
                    onMouseLeave={handleContactMouseLeave}
                >
                    {/* Left Text Content */}
                    <div className="contact-text-content">
                        <span className="contact-subheading">GET IN TOUCH</span>
                        <h2 className="contact-heading">Elevate your brand<br />with Me</h2>
                        <p className="contact-description">
                     Have a complex project in mind? I’m here to help you build scalable, high-performance web solutions from the ground up. Let's discuss how we can bring your ideas to life. Expert guidance for your next big launch. Transforming your vision into a robust digital reality today.
                        </p>
                    </div>

                    {/* Right Form Content */}
                    <form className="contact-form-section" onSubmit={handleSubmit}>
                        {/* Input Grid */}
                        <div className="contact-grid-layout">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className="contact-input-field"
                                required
                            />
                            <input
                                type="number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Phone Number"
                                className="contact-input-field"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                className="contact-input-field"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="Subject"
                                className="contact-input-field"
                            />
                        </div>

                        {/* Textarea */}
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your Message"
                            className="contact-input-field contact-textarea"
                            rows="6"
                        ></textarea>

                        {/* Submit Button */}
                        <button type="submit" className="contact-submit-btn" disabled={status === 'sending...'}>
                            <span className="btn-text">
                                {status === 'sending...' ? 'Sending...' : 'Send Message'}
                            </span>
                            <span><FaArrowRight className="submit-icon-arrow" /></span>
                        </button>

                        {status === 'success' && <p className="status-success">Message sent successfully!</p>}
                        {status === 'error' && <p className="status-error">Error sending message. Please try again.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}