import { useState } from 'react';
import './projecthero/projecthero.css';
import img1 from '../../../../assets/tab-image-1.webp';
import img2 from '../../../../assets/project_image/project-detials-swiper-img-1.webp';
import { CiCircleCheck } from "react-icons/ci";
import { TiArrowLeft } from "react-icons/ti";
import { GoArrowRight } from "react-icons/go";
import { FaArrowRight } from 'react-icons/fa';

const coreFeatures = [
    { item: "Custom React & Next.js Implementation" },
    { item: "Scalable Backend Infrastructure" },
    { item: "High-End UI/UX Design" }
];

export default function Projectdetailshero() {
    const [cardHoverClass, setCardHoverClass] = useState('');
    const [formHoverClass, setFormHoverClass] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleCardMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('left');
        else classes.push('right');

        if (y < rect.height / 2) classes.push('top');
        else classes.push('bottom');

        setCardHoverClass(classes.join(' '));
    };

    const handleCardMouseLeave = () => {
        setCardHoverClass('');
    };

    const handleFormMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('left');
        else classes.push('right');

        if (y < rect.height / 2) classes.push('top');
        else classes.push('bottom');

        setFormHoverClass(classes.join(' '));
    };

    const handleFormMouseLeave = () => {
        setFormHoverClass('');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('http://localhost:5000/api/form/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                    type: "project"
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setTimeout(() => setSubmitStatus(null), 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='projectHero'>
                <img src={img1} alt="Hero" />
            </div>
            <div className="projectdetail-container">
                <div className='projectdetail-layout'>

                    {/* Left Side: Main Content */}
                    <div className='project-main-content'>
                        <h1 className='projectdetails-title'>My Portfolio of Innovation</h1>
                        <p className='project-description'>
                           Are you looking to build a high-performance digital presence? This portfolio showcases a collection of custom-built applications designed for businesses that value speed, security, and professional aesthetics. Each project is crafted with a deep understanding of full-stack architecture, ensuring that the backend logic is as robust as the frontend is beautiful. These solutions are fully responsive and optimized for all devices, providing a seamless user experience from desktop to mobile.
                        </p>
                        <br />
                        <p className='project-description'>
                         Whether you need a complex enterprise dashboard or a high-converting landing page, I provide end-to-end development to elevate your brand and ensure you leave a lasting impression in the digital market.
                        </p>
                        <ul className='feature-list'>
                            {coreFeatures.map((feature, index) => (
                                <li key={index}>
                                    <CiCircleCheck className="check-icon" />
                                    {feature.item}
                                </li>
                            ))}
                        </ul>

                        <h2 className='section-subtitle'>Elevate Your Business with IT Solutions</h2>
                        <p className='project-description'>
                         Modern businesses require more than just a website; they require strategic IT solutions that drive growth. I specialize in transforming complex workflows into intuitive, automated web applications. By utilizing the latest industry standards—including clean architecture and modular code—I build products that are easy to maintain and scale.
                        </p>
                        <p className='project-description'>
                       From secure API integrations to real-time database management, my focus is on delivering technical excellence. I ensure that every project is production-ready, lightning-fast, and built to solve specific business challenges while maintaining a sleek, modern interface.
                        </p>
                        <img src={img2} alt="" className='img2' />
                        <div className="btns">
                            <button className="nav-btn previous">
                                <span className="icon-circle">
                                    <TiArrowLeft />
                                </span>
                                <span className="btn-text">Previous</span>
                            </button>

                            <button className="nav-btn next">
                                <span className="btn-text">Next</span>
                                <span className="icon-circle">
                                    <GoArrowRight />
                                </span>
                            </button>
                        </div>
                        <div className="form-container">
                            <form
                                className={`appointment-card directional-card ${formHoverClass}`}
                                onMouseMove={handleFormMouseMove}
                                onMouseLeave={handleFormMouseLeave}
                                onSubmit={handleSubmit}
                            >
                                <div className="input-grid">
                                    <input 
                                        type="text" 
                                        name="name"
                                        placeholder="Your Name" 
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input 
                                        type="number" 
                                        name="phone"
                                        placeholder="Phone Number" 
                                        className="form-input"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Your Email" 
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input 
                                        type="text" 
                                        name="subject"
                                        placeholder="Subject" 
                                        className="form-input"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    className="form-textarea"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>

                                <button type="submit" className="submit-btn" disabled={loading}>
                                    {loading ? 'Sending...' : 'Submit Now'} <FaArrowRight className="btn-icon" />
                                </button>

                                {submitStatus === 'success' && <p className="status-success">Submit request sent successfully!</p>}
                                {submitStatus === 'error' && <p className="status-error">Error sending request. Please try again.</p>}
                            </form>
                        </div>
                    </div>

                    {/* Right Side: Project Details Card with Hover Effect */}
                    <aside className='project-sidebar'>
                        <div className="sticky-wrapper">
                            <div
                                className={`details-card directional-card ${cardHoverClass}`}
                                onMouseMove={handleCardMouseMove}
                                onMouseLeave={handleCardMouseLeave}
                            >
                                <div className='card-header'>
                                    <h3>Project Details</h3>
                                    <span className="dot"></span>
                                </div>
                                <div className='detail-item'>
                                    <span className='label'>Name:</span>
                                    <span className='value'>Hosting vps</span>
                                </div>
                                <div className='detail-item'>
                                    <span className='label'>Author:</span>
                                    <span className='value'>Nadimul Islam</span>
                                </div>
                                <div className='detail-item'>
                                    <span className='label'>Date:</span>
                                    <span className='value'>23 January, 2024</span>
                                </div>
                                <div className='detail-item'>
                                    <span className='label'>Tags:</span>
                                    <span className='value'>Host Web Design</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    )
}
