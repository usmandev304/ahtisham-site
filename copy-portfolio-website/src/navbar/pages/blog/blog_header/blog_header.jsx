import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './blog_header.css';
import { FaTag, FaRegComment, FaRegCalendarAlt, FaSearch, FaFolderOpen, FaWhatsapp, FaGithub, FaLinkedinIn,  } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { BsArrowRight } from 'react-icons/bs';

// Assets
import blogImage1 from "../../../../assets/blog-img-1.webp";
import blogImage2 from "../../../../assets/blog-img-2.webp";
import blogImage3 from "../../../../assets/blog-img-3.webp";
import recentPost1 from "../../../../assets/single-post-card-img-1.webp";
import recentPost2 from "../../../../assets/single-post-card-img-2.webp";
import recentPost3 from "../../../../assets/single-post-card-img-3.webp";
import reactImg5 from '../../../../assets/about-me-user-img.png';
import { Link } from 'react-router-dom';

export default function Blog_header() {
    // --- STATE FOR CLICK/HOVER INTERACTION ---
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const [clickedCardId, setClickedCardId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // --- SIDEBAR INTERACTION STATES ---
    const [aboutMeCardHoverClass, setAboutMeCardHoverClass] = useState('');
    const [tagsCardHoverClass, setTagsCardHoverClass] = useState('');

    const blogPosts = [
        {
            id: 1,
            img: blogImage1,
            tag: "Web design",
            title: "Why Next.js is the Future of Full-Stack Web Development",
            excerpt: "Next.js has revolutionized how we think about full-stack development. By combining the power of React with seamless Server-Side Rendering (SSR) and Static Site Generation (SSG), it offers unparalleled speed and SEO benefits right out of the box. With its intuitive file-based routing and API routes, Next.js simplifies backend integration, allowing developers to build robust applications without the overhead of complex configurations. Whether you're creating a dynamic e-commerce site or a content-rich blog, Next.js provides the tools and flexibility to bring your vision to life while ensuring optimal performance and scalability."
        },
        {
            id: 2,
            img: blogImage2,
            tag: "UI/UX Design",
            title: "Mastering Scalable Backend Architecture with Node.js",
            excerpt: "From implementing robust JWT authentication to optimizing database queries with MongoDB or PostgreSQL, a well-structured Node.js backend ensures that your application remains stable even as your user base grows exponentially. With Next.js, we can build a robust and secure backend that scales effortlessly, making it the perfect choice for building high-performance web applications with ease."
        },
        {
            id: 3,
            img: blogImage3,
            tag: "Development",
            title: "The Importance of UI/UX in Functional Web Applications",
            excerpt: "In the world of modern software, a powerful backend is only as good as the interface that delivers it. While functionality ensures an application works, UI/UX design ensures that people can actually use it. A well-crafted interface reduces the learning curve for complex tasks, allowing users to navigate intricate workflows with ease. By prioritizing user-centric design, we transform raw data and complex logic into an intuitive digital experience that feels natural and efficient."
        }
    ];

    const categories = [
        { name: "Enterprise Solutions", count: "(6)" },
        { name: "Full-Stack Insights", count: "(3)" },
        { name: "Performance Optimization", count: "(4)" },
        { name: "User-Centric Design", count: "(6)" }
    ];

    const recentPosts = [
        { category: "Category", title: "Sustainable Solutions: Designing for Tomorrow", img: recentPost1 },
        { category: "Category", title: "Technological Innovations: Shaping the Future", img: recentPost2 },
        { category: "Category", title: "Adventure Awaits Exploring the Great Outdoors", img: recentPost3 }
    ];

    const tags = ["Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "Full - Stack",
        "TailwindCSS",
        "REST API",
        "Portfolio"];

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

    // Filter blog posts based on search query
    const filteredBlogPosts = searchQuery.trim() === '' 
        ? blogPosts 
        : blogPosts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const handleSearchClick = () => {
        // Search is already active via onChange, but this allows users to click the button
        // You can add additional actions here if needed
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="blog-layout-container">
            {/* Left Main Content */}
            <motion.div
                className="blog-posts-column"
                variants={staggerContainer}
                initial="visible"
                animate="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {filteredBlogPosts.length > 0 ? (
                    filteredBlogPosts.map((post) => {
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
                                    <Link to={post.id === 1 ? "/blog/blogdetails/homeblogdetails" : `/blog/blogdetails/homeblogdetails_${post.id}`}>
                                        <button className="blog-read-more-btn">
                                            Read More
                                            <BsArrowRight className="read-more-icon" />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })
                ) : (
                    <div className="no-results-message">
                        <p>No blog posts found matching "{searchQuery}"</p>
                    </div>
                )}
            </motion.div>

            {/* Right Sidebar */}
            <motion.div
                className="blog-sidebar-column"
                variants={staggerContainer}
                initial="visible"
                animate="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Search Widget */}
                <motion.div variants={fadeInUp} className="sidebar-widget search-widget-container">
                    <input 
                        type="text" 
                        placeholder="Type here" 
                        className="sidebar-search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="sidebar-search-btn" onClick={handleSearchClick}><FaSearch /></button>
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
                                <h3>Hassan Farooqi</h3>
                                <p className="job-titles">Full-Stack Developer</p>
                                <div className="social-icons small-icons">
                                    <button className="icon-btn">
                                        <a href="https://wa.me/966506470794" target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a>
                                    </button>
                                    <button className="icon-btn">
                                        <a href="https://linkedin.com/in/hassandev691" target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a>
                                    </button>
                                    <button className="icon-btn">
                                        <a href="https://github.com/hassandev691" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
                                    </button>
                                     <button className="icon-btn">
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hassandev691@gmail.com" target='_blank' rel='noopener noreferrer'><IoMdMail /></a>
                                    </button>
                                </div>
                            </div>
                        </div>

                        
                        <p className="bio-text">
                            I am a Full-Stack Developer passionate about building high-performance web applications and scalable digital solutions.</p>
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