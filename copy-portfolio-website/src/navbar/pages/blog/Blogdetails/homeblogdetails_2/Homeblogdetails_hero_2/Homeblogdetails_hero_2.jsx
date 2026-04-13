import { useState } from 'react';
import { Search, ArrowRight, User, Tag, MessageSquare, Calendar } from 'lucide-react'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF, FaArrowRight } from 'react-icons/fa';;
import { FaRegFolderOpen } from "react-icons/fa6";
import img from '../.././../../../../assets/blog-img-2.webp'
import reactImg1 from '../../../../../../assets/single-post-card-img-1.webp'
import reactImg2 from '../../../../../../assets/single-post-card-img-2.webp'
import reactImg3 from '../../../../../../assets/single-post-card-img-3.webp'
import reactImg4 from '../../../../../../assets/blog-details-swiper-img.png'
import reactImg5 from '../../../../../../assets/about-me-user-img.webp'
import comment1 from '../../../../../../assets/about-me-user-img.webp'
import comment2 from '../../../../../../assets/comments-img-2.webp'


export default function Homeblogdetails_hero_2() {
       const [blogFormHoverClass, setBlogFormHoverClass] = useState('');
       const [searchWidgetHoverClass, setSearchWidgetHoverClass] = useState('');
       const [categoryWidgetHoverClass, setCategoryWidgetHoverClass] = useState('');
       const [recentPostWidgetHoverClass, setRecentPostWidgetHoverClass] = useState('');
       const [aboutMeCardHoverClass, setAboutMeCardHoverClass] = useState('');
       const [tagsCardHoverClass, setTagsCardHoverClass] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };
    const tags = [
        'All Project', 'Resume', 'Graphics', 'Web Design', 'CV',
        'Starts', 'Creative Portfolio', 'Portfolio', 'CV Card', 'Start shape'
    ];

    const commentsData = [
        {
            id: 1,
            name: "Stanio lainto",
            date: "September 16, 2023",
            avatar: comment1,
            text: "Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol acted Aliquam eros justo.",
            isReply: false,
        },
        {
            id: 2,
            name: "Court Henry",
            date: "September 16, 2023",
            avatar: comment2,
            text: "Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet.",
            isReply: true,
        },
        {
            id: 3,
            name: "Court Henry",
            date: "September 16, 2023",
            avatar: comment2,
            text: "Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol acted Aliquam eros justo.",
            isReply: false,
        }
    ];

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
                      Let's bring your ideas to life! Contact me, and let's
                    </h1>
                    <p className="blog-description">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere
                        lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam.
                    </p>
                    <br />
                    <p className="blog-description">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justoposuere lobortis non, viverra laoreet augue mattis fermentum ullamcorper viverra laore Aliquam eros justo posuere desig loborti viverra laoreet matti ullamcorper posuere viverra
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
                            Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra
                            .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum
                            ullamcorper viverra laoreet.
                        </p>
                        <div className="author-name">Mark wood</div>
                        {/* Faint background '99' watermark could be added here via CSS */}
                    </div>

                    {/* Showcase Section */}
                    <div className="showcase-section">
                        <h1 className="showcase-title">Showcase your talent with our portfolio</h1>
                        <p className="showcase-subtitle">
                            Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra
                            .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum
                            ullamcorper viverra laoreet Aliquam eros
                        </p>

                        <div className="showcase-content">
                            <div className="showcase-text">
                                <p className='showcase-subtitle'>Ished fact that a reader will be distrol acted bioii the.ished fact th reader will besi distrol ac laoreet Aliquam fact that a reader will be distrol acted Aliquam posuere loborti viverra laoreet</p>
                                <p className='showcase-subtitle'>Aliquam eros justo, posuere loborti viverra laoreet matt design the ullamcorper posuere viverra .Aliquam eros justo posuere inni lobortis non, viverra laoreet augue mattis</p>
                                <p className='showcase-subtitle'>Aliquam eros justo, posuere loborti viverra laoreet matti design an the ullamcorper posuere viverra .Aliquam eros</p>
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
                            <span className="keyword-item">Resume</span>
                            <span className="keyword-item">Graphics</span>
                            <span className="keyword-item">Web Design</span>
                        </div>
                        <div className="social-icons">
                            <button className="icon-btn"><FaInstagram /></button>
                            <button className="icon-btn"><FaLinkedinIn /></button>
                            <button className="icon-btn"><FaTwitter /></button>
                            <button className="icon-btn"><FaFacebookF /></button>
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
                                alt="Fatima Afrafy"
                                className="profile-pic"
                            />
                            <div className="profile-info">
                                <h3>Fatima Afrafy</h3>
                                <p className="job-title">UI/UX Designer</p>
                                <div className="social-icons small-icons">
                                    <button className="icon-btn"><FaInstagram className='ico' /></button>
                                    <button className="icon-btn"><FaLinkedinIn className='ico' /></button>
                                    <button className="icon-btn"><FaTwitter className='ico' /></button>
                                    <button className="icon-btn"><FaFacebookF className='ico' /></button>
                                </div>
                            </div>
                        </div>
                        <p className="bio-text">
                            Aliquam eros justo, posuere loborti viverra ullamcorper posuere viverra .Aliquam
                            eros justo, posuere justo, posuere.
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
                        placeholder="Name" 
                        className="blog-form-input" 
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Your Email</label>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="blog-form-input" 
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Message</label>
                    <textarea
                        placeholder="Message here.."
                        className="blog-form-textarea"
                        rows="5"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="blog-submit-btn">
                    Submit Now <FaArrowRight className="btn-icon" />
                </button>
            </form>
        </div>
        </div>
            </div>
        </section>
    );
}``