import { useState } from 'react';
import { Search, ArrowRight, User, Tag, MessageSquare, Calendar } from 'lucide-react'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF, FaArrowRight, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaRegFolderOpen } from "react-icons/fa6";

export default function Homeblogdetails_hero_3({
    img,
    reactImg1,
    reactImg2,
    reactImg3,
    reactImg4,
    reactImg5,
    comment1,
    comment2,
    tags,
    commentsData,
    profileName,
    profileJobTitle,
    bioText
}) {
    const [blogFormHoverClass, setBlogFormHoverClass] = useState('');
    const [searchWidgetHoverClass, setSearchWidgetHoverClass] = useState('');
    const [categoryWidgetHoverClass, setCategoryWidgetHoverClass] = useState('');
    const [recentPostWidgetHoverClass, setRecentPostWidgetHoverClass] = useState('');
    const [aboutMeCardHoverClass, setAboutMeCardHoverClass] = useState('');
    const [tagsCardHoverClass, setTagsCardHoverClass] = useState('');
    const [blogFormData, setBlogFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [blogFormStatus, setBlogFormStatus] = useState(null);

    // Generic handler for card mouse move
    const handleCardMouseMove = (e, setHoverClass) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('left');
        else classes.push('right');

        if (y < rect.height / 2) classes.push('top');
        else classes.push('bottom');

        setHoverClass(classes.join(' '));
    };

    const handleCardMouseLeave = (setHoverClass) => {
        setHoverClass('');
    };

    const handleBlogFormMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('left');
        else classes.push('right');

        if (y < rect.height / 2) classes.push('top');
        else classes.push('bottom');

        setBlogFormHoverClass(classes.join(' '));
    };

    const handleBlogFormMouseLeave = () => {
        setBlogFormHoverClass('');
    };

    const handleBlogFormInputChange = (e) => {
        const { name, value } = e.target;
        setBlogFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBlogFormStatus('sending...');

        try {
            const response = await fetch("http://localhost:5000/api/form/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: blogFormData.name,
                    email: blogFormData.email,
                    subject: "Blog Comment",
                    message: blogFormData.message
                }),
            });

            if (response.ok) {
                setBlogFormStatus('success');
                setBlogFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setTimeout(() => setBlogFormStatus(null), 3000);
            } else {
                setBlogFormStatus('error');
                setTimeout(() => setBlogFormStatus(null), 3000);
            }
        } catch (error) {
            console.error("Blog form submission error:", error);
            setBlogFormStatus('error');
            setTimeout(() => setBlogFormStatus(null), 3000);
        }
    };

    const CommentItem = ({ comment }) => {
        return (
            <div className={`comment-item ${comment.isReply ? 'comment-reply' : ''}`}>
                {/* Avatar Section */}
                <div className="comment-avatar-wrapper">
                    <div className="comment-avatar">
                        <img
                            src={comment.avatar}
                            alt={comment.name}
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="comment-content">
                    <div className="comment-header">
                        <div className="comment-header-left">
                            <h3 className="comment-name">{comment.name}</h3>
                            <span className="comment-date">{comment.date}</span>
                        </div>

                        {/* Social Icons */}
                        <div className="comment-social-icons">
                            <FaFacebookF size={14} className="comment-social-icon" />
                            <FaTwitter size={14} className="comment-social-icon" />
                            <FaInstagram size={14} className="comment-social-icon" />
                        </div>
                    </div>

                    <p className="comment-text">
                        {comment.text}
                    </p>

                    <button className="comment-reply-btn">
                        Reply
                    </button>
                </div>
            </div>
        );
    };


    return (
        <section className="blog-hero-section">
            <div className="blog-hero-container">

                {/* LEFT: Main Blog Content */}
                <div className="blog-main-content">
                    {/* Main Image Container */}
                    <div className="blog-image-container">
                        <img
                            src={img}
                            alt="Developer working"
                            className="blog-main-image"
                        />
                    </div>

                    {/* Meta Info */}
                    <div className="blog-meta-info">
                        <div className="blog-meta-item">
                            <span className="blog-meta-author-label">By</span> Stanio lainto
                        </div>
                        <div className="blog-meta-item">
                            <Tag size={16} className="blog-meta-icon" />
                            Web design
                        </div>
                        <div className="blog-meta-item">
                            <MessageSquare size={16} className="blog-meta-icon" />
                            Comments (05)
                        </div>
                    </div>

                    {/* Title and Description */}
                    <h1 className="blog-title">
                        The Importance of UI/UX in Functional Web Applications
                    </h1>
                    <p className="blog-description">
                        In the world of modern software, a powerful backend is only as good as the interface that delivers it. While functionality ensures an application works, UI/UX design ensures that people can actually use it. A well-crafted interface reduces the learning curve for complex tasks, allowing users to navigate intricate workflows with ease. By prioritizing user-centric design, we transform raw data and complex logic into an intuitive digital experience that feels natural and efficient.
                    </p>
                    <br />
                    <p className="blog-description">
                        Beyond ease of use, superior UI/UX acts as a primary driver for user retention and business growth. When an application feels responsive and predictable, it builds a sense of trust and reliability with the user. In high-stakes functional environments—like fintech or data analytics—this clarity minimizes user error and maximizes productivity. Ultimately, investing in the interface is not a luxury; it is a strategic necessity that ensures the technical power of the backend translates into measurable success for the end-user.
                    </p>
                </div>

                {/* RIGHT: Sidebar */}
                <div className="blog-sidebar">

                    {/* Search Widget with mouse effect */}
                    <div
                        className={`blog-widget directional-cards ${searchWidgetHoverClass}`}
                        onMouseMove={(e) => handleCardMouseMove(e, setSearchWidgetHoverClass)}
                        onMouseLeave={() => handleCardMouseLeave(setSearchWidgetHoverClass)}
                    >
                        <div className="blog-search-container">
                            <input
                                type="text"
                                placeholder="Type here"
                                className="blog-search-input"
                            />
                            <button className="blog-search-button">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Category Widget with mouse effect */}
                    <div
                        className={`blog-widget directional-cards ${categoryWidgetHoverClass}`}
                        onMouseMove={(e) => handleCardMouseMove(e, setCategoryWidgetHoverClass)}
                        onMouseLeave={() => handleCardMouseLeave(setCategoryWidgetHoverClass)}
                    >
                        <h3 className="blog-widget-title">
                            Category <span className="blog-widget-title-dot"></span>
                        </h3>
                        <ul className="blog-category-list">
                            {[
                                { name: 'Business Solution', count: 6 },
                                { name: 'Web Development Wizardry', count: 3 },
                                { name: 'Content Creation and Strategy', count: 4 },
                                { name: 'UI/UX Design Innovation', count: 6 }
                            ].map((cat, index) => (
                                <li key={index} className="blog-category-item">
                                    <span className="blog-category-name">
                                        <ArrowRight size={16} className="blog-category-icon" />
                                        {cat.name}
                                    </span>
                                    <span className="blog-category-count">({cat.count})</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recent Post Widget with mouse effect */}
                    <div
                        className={`blog-widget directional-cards ${recentPostWidgetHoverClass}`}
                        onMouseMove={(e) => handleCardMouseMove(e, setRecentPostWidgetHoverClass)}
                        onMouseLeave={() => handleCardMouseLeave(setRecentPostWidgetHoverClass)}
                    >
                        <h3 className="blog-widget-title">
                            Recent Post <span className="blog-widget-title-dot"></span>
                        </h3>
                        <div className="blog-recent-posts">
                            {[
                                { title: 'Sustainable Solutions: Designing for Tomorrow', img: reactImg1 },
                                { title: 'Technological Innovations: Shaping the Future:', img: reactImg2 },
                                { title: 'Adventure Awaits Exploring the Great Outdoors', img: reactImg3 }
                            ].map((post, index) => (
                                <div key={index} className="blog-recent-post">
                                    <div className="blog-recent-post-image">
                                        <img src={post.img} alt="post" className="blog-recent-post-img" />
                                    </div>
                                    <div className="blog-recent-post-content">
                                        <span className="blog-recent-post-category">
                                            <FaRegFolderOpen size={12} className="blog-recent-post-icon" /> Category

                                        </span>
                                        <h4 className="blog-recent-post-title">
                                            {post.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="portfolio-container">
                {/* --- Left Column: Main Content --- */}
                <div className="main-column">

                    {/* Top Testimonial Snippet */}
                    <div className="testimonial-card">
                        <p>
                            Quality development is about finding the perfect balance between form and function. In our portfolio, you will find a diverse range of applications that emphasize intuitive navigation and high-speed performance. We take pride in building secure, accessible, and fast web applications that stand out in today’s competitive digital market.
                        </p>
                        <div className="author-name">Mark wood</div>
                        {/* Faint background '99' watermark could be added here via CSS */}
                    </div>

                    {/* Showcase Section */}
                    <div className="showcase-section">
                        <h1 className="showcase-title">Building Scalable Solutions with a Modern Tech Stack</h1>
                        <p className="showcase-subtitle">
                            My approach to development is rooted in the philosophy that a strong application starts with a robust architecture. By leveraging modern frameworks like Next.js and React, I build digital products that are not only visually striking but also engineered for high performance and long-term scalability.
                        </p>

                        <div className="showcase-content">
                            <div className="showcase-text">
                                <p className='showcase-subtitle'>From designing complex API structures to managing high-traffic databases, I provide end-to-end development services that prioritize security and speed. Every line of code is written with clean architecture in mind, ensuring that your application can grow alongside your business without technical debt.</p>
                                <p className='showcase-subtitle'>I believe that a truly successful product is one that balances technical complexity with a seamless user experience. By following industry-standard best practices, I transform your vision into a secure, fast-loading, and responsive web application that stands out in the modern digital landscape.</p>
                            </div>
                            <div className="showcase-image-wrapper">
                                <img
                                    src={reactImg4}
                                    alt="Minimalist Workspace"
                                    className="showcase-image"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Keyword & Social Footer */}
                    <div className="keyword-footer">
                        <div className="keywords-list">
                            <span className="keyword-label">Keyword:</span>
                            <span className="keyword-item">Next.js Expert</span>
                            <span className="keyword-item">Full-Stack Developer</span>
                            <span className="keyword-item">API Integration</span>
                        </div>
                        <div className="social-icons">
                            <button className="icon-btn">
                                <a href="https://wa.me/966506470794" target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a>
                            </button>
                            <button className="icon-btn">
                                <a href="https://linkedin.com/in/hassandev691" target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a>
                            </button>
                            <button className="icon-btn">
                                <a href="https://github.com/hassandev691" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- Right Column: Sidebar --- */}
                <div className="sidebar-column">

                    {/* About Me Card with mouse effect */}
                    <div
                        className={`sidebar-card directional-cards ${aboutMeCardHoverClass}`}
                        onMouseMove={(e) => handleCardMouseMove(e, setAboutMeCardHoverClass)}
                        onMouseLeave={() => handleCardMouseLeave(setAboutMeCardHoverClass)}
                    >
                        <h2 className="card-header">About Me <span className="accent-dot"></span></h2>
                        <div className="profile-section">
                            <img
                                src={reactImg5}
                                alt="Hassan Farooqi"
                                className="profile-pic"
                            />
                            <div className="profile-info">
                                <h3>Hassan Farooqi</h3>
                                <p className="job-title">Full-Stack Developer</p>
                                <div className="social-icons small-icons">
                                    <button className="icon-btn">
                                        <a href="https://wa.me/966506470794" target='_blank' rel='noopener noreferrer'><FaWhatsapp className='ico' /></a>
                                    </button>
                                    <button className="icon-btn">
                                        <a href="https://linkedin.com/in/hassandev691" target='_blank' rel='noopener noreferrer'><FaLinkedinIn className='ico' /></a>
                                    </button>
                                    <button className="icon-btn">
                                        <a href="https://github.com/hassandev691" target='_blank' rel='noopener noreferrer'><FaGithub className='ico' /></a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className="bio-text">
                          I am a Full-Stack Developer passionate about building high-performance web applications and scalable digital solutions.
                        </p>
                    </div>

                    {/* Tags Card with mouse effect */}
                    <div
                        className={`sidebar-card directional-cards ${tagsCardHoverClass}`}
                        onMouseMove={(e) => handleCardMouseMove(e, setTagsCardHoverClass)}
                        onMouseLeave={() => handleCardMouseLeave(setTagsCardHoverClass)}
                    >
                        <h2 className="card-header">Tags <span className="accent-dot"></span></h2>
                        <div className="tags-container">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag-pill">{tag}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="comments-container">
                <div className="comments-wrapper">
                    <h2 className="comments-title">Comments (3)</h2>

                    <div className="comments-list">
                        {commentsData.map((comment) => (
                            <CommentItem key={comment.id} comment={comment} />
                        ))}
                    </div>
                </div>
                <div className="blog-form-container">
                    <div className="form-container"> {/* Outer dark background */}
                        <form
                            className={`blog-appointment-card directional-cards ${blogFormHoverClass}`}
                            onMouseMove={handleBlogFormMouseMove}
                            onMouseLeave={handleBlogFormMouseLeave}
                            onSubmit={handleSubmit}
                        >
                            <h2 className="form-title">Leave A Comment</h2>
                            <p className="form-subtitle">
                                By using form u agree with the message sorage, you can contact us directly now
                            </p>

                            <div className="input-group">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="blog-form-input"
                                    value={blogFormData.name}
                                    onChange={handleBlogFormInputChange}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label>Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="blog-form-input"
                                    value={blogFormData.email}
                                    onChange={handleBlogFormInputChange}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Message here.."
                                    className="blog-form-textarea"
                                    rows="5"
                                    value={blogFormData.message}
                                    onChange={handleBlogFormInputChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="blog-submit-btn" disabled={blogFormStatus === 'sending...'}>
                                {blogFormStatus === 'sending...' ? 'Sending...' : 'Submit Now'} <FaArrowRight className="btn-icon" />
                            </button>

                            {blogFormStatus === 'success' && <p className="status-success">Comment submitted successfully!</p>}
                            {blogFormStatus === 'error' && <p className="status-error">Error submitting comment. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
} ``