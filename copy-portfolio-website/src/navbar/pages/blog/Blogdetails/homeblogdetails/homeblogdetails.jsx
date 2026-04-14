import React from 'react';
import './homeblogdetails.css';
import { FaAngleRight } from "react-icons/fa6";
import Homeblogdetails_hero from './homeblogdetails_hero/homeblogdetails_hero';
import img from '../../../../../assets/blog-img-1.webp'
import reactImg1 from '../../../../../assets/single-post-card-img-1.webp'
import reactImg2 from '../../../../../assets/single-post-card-img-2.webp'
import reactImg3 from '../../../../../assets/single-post-card-img-3.webp'
import reactImg4 from '../../../../../assets/blog-details-swiper-img.png'
import reactImg5 from '../../../../../assets/about-me-user-img.png'
import comment1 from '../../../../../assets/about-me-user-img.png'
import comment2 from '../../../../../assets/comments-img-2.webp'

export default function HomeBlogDetails() {
  const blogData = {
    img,
    reactImg1,
    reactImg2,
    reactImg3,
    reactImg4,
    reactImg5,
    comment1,
    comment2,
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Full-Stack", "TailwindCSS", "REST API", "Portfolio"],
    commentsData: [
      {
        id: 1,
        name: "Hamza Sheikh",
        date: "September 16, 2023",
        avatar: comment1,
        text: "Your article on Next.js is very informative! You explained the difference between SSR and SSG in very simple and easy-to-understand terms. Looking forward to more technical content like this.",
        isReply: false,
      },
      {
        id: 2,
        name: "Arsalan Ahmed",
        date: "September 16, 2023",
        avatar: comment2,
        text: "It's a very informative article! The way you explained the benefits of server-side rendering in Next.js in such detail is very helpful for developers. Keep sharing such insights!",
        isReply: true,
      },
      {
        id: 3,
        name: "Sarah Jenkins",
        date: "September 16, 2023",
        avatar: comment2,
        text: "Great read. I've been following your work for a while, and your approach to clean architecture is impressive. It's rare to find a developer who balances performance and design so well.",
        isReply: false,
      }
    ],
    profileName: "Hassan Farooqi",
    profileJobTitle: "Full-Stack Developer",
    bioText: "I am a Full-Stack Developer passionate about building high-performance web applications and scalable digital solutions."
  };

  return (
    <div className='blog-details-wrapper'>
      <section className="homeblog-page-header">
        <div className="homeblog-header-overlay"></div>
        <div className="homeblog-header-content">
          <h1 className="homeblog-header-title">Why Next.js is the Future of Full-Stack Web Development</h1>
          <nav className="homeblog-breadcrumb-nav">
            <a href="/" className="homeblog-breadcrumb-item link">Home</a>
            <span className="homeblog-breadcrumb-icon">
              <FaAngleRight />
            </span>
            <span className="homeblog-breadcrumb-item current">Blog Details</span>
          </nav>
        </div>
      </section>
      <Homeblogdetails_hero {...blogData} />
    </div>
  );
}