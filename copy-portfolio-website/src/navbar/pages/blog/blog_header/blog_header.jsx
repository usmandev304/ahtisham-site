import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './blog_header.css';
import { FaTag, FaRegComment, FaRegCalendarAlt, FaSearch, FaFolderOpen, FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

// Assets
import blogImage1 from "../../../../assets/blog-classic-card-img-1.webp";
import blogImage2 from "../../../../assets/blog-classic-card-img-2.webp";
import blogImage3 from "../../../../assets/blog-classic-card-img-3.webp";
import recentPost1 from "../../../../assets/single-post-card-img-1.webp";
import recentPost2 from "../../../../assets/single-post-card-img-2.webp";
import recentPost3 from "../../../../assets/single-post-card-img-3.webp";
import reactImg5 from '../../../../assets/about-me-user-img.webp';

export default function Blog_header() {
    // --- STATE FOR CLICK/HOVER INTERACTION ---
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const [clickedCardId, setClickedCardId] = useState(null);

    // --- SIDEBAR INTERACTION STATES ---
    const [aboutMeCardHoverClass, setAboutMeCardHoverClass] = useState('');
    const [tagsCardHoverClass, setTagsCardHoverClass] = useState('');

    const blogPosts = [
        {
            id: 1,
            img: blogImage1,
            tag: "Web design",
            title: "Stand Out From The Crowd With A Professional Portfolio",
            excerpt: "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra. Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper"
        },
        {
            id: 2,
            img: blogImage2,
            tag: "UI/UX Design",
            title: "The Future of Minimalist Web Design Trends",
            excerpt: "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra. Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper"
        },
        {
            id: 3,
            img: blogImage3,
            tag: "Development",
            title: "Mastering React Hooks for Modern Applications",
            excerpt: "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra. Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper"
        }
    ];

    const categories = [
        { name: "Business Solution", count: "(6)" },
        { name: "Web Development Wizardry", count: "(3)" },
        { name: "Content Creation and Strategy", count: "(4)" },
        { name: "UI/UX Design Innovation", count: "(6)" }
    ];

    const recentPosts = [
        { category: "Category", title: "Sustainable Solutions: Designing for Tomorrow", img: recentPost1 },
        { category: "Category", title: "Technological Innovations: Shaping the Future", img: recentPost2 },
        { category: "Category", title: "Adventure Awaits Exploring the Great Outdoors", img: recentPost3 }
    ];

    const tags = ["All Project", "Resume", "Graphics", "Web Design", "CV", "Starts", "Creative Portfolio", "Portfolio", "CV Card", "Start shape"];

    // --- ANIMATION VARIANTS ---
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // --- HANDLERS ---
    const handleCardMouseMove = (e, setClassFn) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const classes = [];
        if (x < rect.width / 2) classes.push('hover-left'); else classes.push('hover-right');
        if (y < rect.height / 2) classes.push('hover-top'); else classes.push('hover-bottom');
        setClassFn(classes.join(' '));
    };

    return (
        <div className="blog-layout-container">
            {/* Left Main Content */}
            <motion.div 
                className="blog-posts-column"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {blogPosts.map((post) => {
                    // Check if card should show hover effect (either mouse is over OR it was clicked)
                    const isEffectActive = hoveredCardId === post.id || clickedCardId === post.id;

                    return (
                        <motion.div key={post.id} variants={fadeInUp} className="blog-post-card">
                            <div
                                className="hover-containers"
                                onMouseEnter={() => setHoveredCardId(post.id)}
                                onMouseLeave={() => setHoveredCardId(null)}
                                onClick={() => setClickedCardId(clickedCardId === post.id ? null : post.id)}
                            >
                                <img 
                                    src={post.img} 
                                    alt="Blog Post" 
                                    className={`main-image ${isEffectActive ? 'hovered' : ''}`} 
                                />
                                <div className={`two-images-group ${isEffectActive ? 'hovered' : ''}`}>
                                    <img src={post.img} alt="Slide Part" />
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <div className="blog-post-meta">
                                    <span className="meta-item"><FaTag className="meta-icon" /> {post.tag}</span>
                                    <span className="meta-item"><FaRegComment className="meta-icon" /> Comments (05)</span>
                                    <span className="meta-item"><FaRegCalendarAlt className="meta-icon" /> April 2026</span>
                                </div>
                                <h2 className="blog-post-title">{post.title}</h2>
                                <p className="blog-post-excerpt">{post.excerpt}</p>
                                <button className="blog-read-more-btn">
                                    Read More <BsArrowRight className="read-more-icon" />
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Right Sidebar */}
            <motion.div 
                className="blog-sidebar-column"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Search Widget */}
                <motion.div variants={fadeInUp} className="sidebar-widget search-widget-container">
                    <input type="text" placeholder="Type here" className="sidebar-search-input" />
                    <button className="sidebar-search-btn"><FaSearch /></button>
                </motion.div>

                {/* Category Widget */}
                <motion.div variants={fadeInUp} className="sidebar-widget">
                    <h3 className="widget-title">Category <span className="title-dot"></span></h3>
                    <ul className="blog-category-list-blog">
                        {categories.map((cat, i) => (
                            <li key={i} className="blog-category-item">
                                <span className="blog-category-name"><BsArrowRight className="category-arrow" /> {cat.name}</span>
                                <span className="blog-category-count">{cat.count}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Recent Post Widget */}
                <motion.div variants={fadeInUp} className="sidebar-widget">
                    <h3 className="widget-titles">Recent Post <span className="title-dot"></span></h3>
                    <div className="recent-posts-list">
                        {recentPosts.map((post, i) => (
                            <div className="recent-post-item" key={i}>
                                <img src={post.img} alt="" className="recent-post-thumbnail" />
                                <div className="recent-post-info">
                                    <span className="recent-post-categorys"><FaFolderOpen className="meta-icon-small" /> {post.category}</span>
                                    <h4 className="recent-post-title">{post.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* About & Tags Group */}
                <div className="sidebar-column">
                    <motion.div 
                        variants={fadeInUp}
                        className={`sidebar-card directional-cards ${aboutMeCardHoverClass}`}
                        onMouseMove={(e) => handleCardMouseMove(e, setAboutMeCardHoverClass)}
                        onMouseLeave={() => setAboutMeCardHoverClass('')}
                    >
                        <h2 className="card-headers">About Me <span className="accent-dot"></span></h2>
                        <div className="profile-section">
                            <img src={reactImg5} alt="Profile" className="profile-pic" />
                            <div className="profile-info">
                                <h3>Fatima Afrafy</h3>
                                <p className="job-titles">UI/UX Designer</p>
                                <div className="social-icons small-icons">
                                    <button className="icon-btn"><FaInstagram /></button>
                                    <button className="icon-btn"><FaLinkedinIn /></button>
                                    <button className="icon-btn"><FaTwitter /></button>
                                    <button className="icon-btn"><FaFacebookF /></button>
                                </div>
                            </div>
                        </div>
                        <p className="bio-text">Expert designer creating digital experiences with a focus on modern aesthetics.</p>
                    </motion.div>

                    <motion.div 
                        variants={fadeInUp}
                        className={`sidebar-card directional-cards ${tagsCardHoverClass}`}
                        onMouseMove={(e) => handleCardMouseMove(e, setTagsCardHoverClass)}
                        onMouseLeave={() => setTagsCardHoverClass('')}
                    >
                        <h2 className="card-headers">Tags <span className="accent-dot"></span></h2>
                        <div className="tags-container">
                            {tags.map((tag, i) => <span key={i} className="tag-pills">{tag}</span>)}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}