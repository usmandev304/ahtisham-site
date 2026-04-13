import React from 'react';
import { motion } from 'framer-motion';
import './homeblogcard.css';
import { FaUser, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../../../../../assets/blog-img-1.webp';
import img2 from '../../../../../assets/blog-img-2.webp';
import img3 from '../../../../../assets/blog-img-3.webp';

const blogData = [
    {
        id: 1,
        author: "Mesbah",
        date: "April 10",
        title: "Inspiring the World, One Project at a Time for the man",
        imgSrc: img1,
        link: "/blog/blogdetails/homeblogdetails"
    },
    {
        id: 2,
        author: "Mesbah",
        date: "April 10",
        title: "Let's bring your ideas to life! Contact me, and let's",
        imgSrc: img2,
        link: "/blog/blogdetails/homeblogdetails_2"
    },
    {
        id: 3,
        author: "Mesbah",
        date: "April 10",
        title: "Each one showcases our approach and dedication man",
        imgSrc: img3,
        link: "/blog/blogdetails/homeblogdetails_3"
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function Homeblogcard() {
    return (
        <section className="blog-section-wrapper">
            <div className="blog-grid-container">
                {blogData.map((blog, index) => (
                    <motion.div
                        key={blog.id}
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Link to={blog.link} className="blog-card-link">
                            <div className="blog-card">

                                {/* Image & Badge Wrapper */}
                                <div className="blog-image-wrapper">
                                    <img src={blog.imgSrc} alt={blog.title} className="blog-image" />

                                    {/* Floating Author/Date Badge */}
                                    <div className="blog-badge">
                                        <span className="badge-item">
                                            <FaUser className="badge-icon" /> {blog.author}
                                        </span>
                                        <span className="badge-item">
                                            <FaCalendarAlt className="badge-icon" /> {blog.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="blog-content">
                                    <h3 className="blogs-title">{blog.title}</h3>

                                    <span className="blog-read-more">
                                        READ MORE <FaChevronRight className="read-more-icon" />
                                    </span>
                                </div>

                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}