import { useState } from 'react';
import './Project2hero.css'
import img1 from '../../../../../../assets/project_image/proect_2.webp';
import img2 from '../../../../../../assets/project_image/project-detials-swiper-img-1.webp';
import { CiCircleCheck } from "react-icons/ci";
import { TiArrowLeft } from "react-icons/ti";
import { GoArrowRight } from "react-icons/go";
import { FaArrowRight } from 'react-icons/fa'; // npm install react-icons

const coreFeatures = [
    { item: "JQuery and CSS3 Animation" },
    { item: "Image Background" },
    { item: "Remix Icons" }
];

export default function Project2hero() {
    // State to track hover direction for the card
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
            const response = await fetch('http://localhost:5000/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                })
            });

            const data = await response.json();

            if (data.success) {
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
                        <h1 className='projectdetails-title'>Digital Transformation Advisors</h1>
                        <p className='project-description'>
                            Looking to build a stunning online portfolio? Noir is the ideal template for designers, artists, photographers, and other creative professionals seeking an elegant, high-impact online presence. Crafted with creative needs in mind, Noir offers advanced features to showcase your work beautifully and engage your audience. This fully responsive, retina-ready template adapts seamlessly to any device, delivering a flawless visual experience every time.
                        </p>
                        <br />
                        <p className='project-description'>
                            Whether you’re an established artist or a rising talent, Noir is the all-in-one solution to elevate your portfolio and leave a lasting impression.
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galltype and scrambled it to make a type specimen book. It has survived not only five centuries tinto electronic typesetting remaining essentially unchanged
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
                                    />
                                    <input 
                                        type="number" 
                                        name="phone"
                                        placeholder="Phone Number" 
                                        className="form-input"
                                        value={formData.phone}
                                        onChange={handleInputChange}
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
                                ></textarea>

                                {submitStatus === 'success' && <p style={{color: 'green'}}>Form submitted successfully!</p>}
                                {submitStatus === 'error' && <p style={{color: 'red'}}>Error sending message. Please try again.</p>}

                                <button type="submit" className="submit-btn" disabled={loading}>
                                    {loading ? 'Sending...' : 'Appointment Now'} <FaArrowRight className="btn-icon" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Side: Project Details Card with Hover Effect */}
                    <aside className='project-sidebar'>
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
                    </aside>

                </div>
            </div>
        </div>
    )
}