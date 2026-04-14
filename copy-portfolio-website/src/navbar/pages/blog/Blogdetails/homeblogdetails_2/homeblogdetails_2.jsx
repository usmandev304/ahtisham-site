import { FaAngleRight } from "react-icons/fa6";
import Homeblogdetails_hero_2 from "./Homeblogdetails_hero_2/Homeblogdetails_hero_2";
import img from '../../../../../assets/blog-img-2.webp'
import reactImg1 from '../../../../../assets/single-post-card-img-1.webp'
import reactImg2 from '../../../../../assets/single-post-card-img-2.webp'
import reactImg3 from '../../../../../assets/single-post-card-img-3.webp'
import reactImg4 from '../../../../../assets/blog-details-swiper-img.png'
import reactImg5 from '../../../../../assets/about-me-user-img.png'
import comment1 from '../../../../../assets/about-me-user-img.png'
import comment2 from '../../../../../assets/comments-img-2.webp'

export default function Homeblogdetails_2() {
    const blogData = {
        img,
        reactImg1,
        reactImg2,
        reactImg3,
        reactImg4,
        reactImg5,
        comment1,
        comment2,
        tags: [
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
            "Full-Stack",
            "TailwindCSS",
            "REST API",
            "Portfolio"
        ],
        commentsData: [
            {
                id: 1,
                name: "Hamza Sheikh",
                date: "September 16, 2023",
                avatar: comment1,
                text: "Excellent breakdown of SSR vs. SSG! Next.js really is a game-changer for SEO-heavy projects. Your explanation of the file-based routing makes it sound so much more approachable for beginners",
                isReply: false,
            },
            {
                id: 2,
                name: "Arsalan Ahmed",
                date: "September 16, 2023",
                avatar: comment2,
                text: "I’ve been moving my client projects over to Next.js lately, and the performance gains are undeniable. Great point about the unified framework—it really does cut down on context switching between backend and frontend.",
                isReply: true,
            },
            {
                id: 3,
                name: "Sarah Jenkins",
                date: "September 16, 2023",
                avatar: comment2,
                text: "The way you explained the benefits of server-side rendering is very helpful for developers. Clean architecture is so often overlooked in full-stack tutorials, so I appreciate you emphasizing it here!",
                isReply: false,
            }
        ],
        profileName: "Fatima Afrafy",
        profileJobTitle: "UI/UX Designer",
        bioText: "Aliquam eros justo, posuere loborti viverra ullamcorper posuere viverra .Aliquam eros justo, posuere justo, posuere."
    };

    return (
        <div className='blog-details-wrapper'>
            <section className="homeblog-page-header">
                <div className="homeblog-header-overlay"></div>
                <div className="homeblog-header-content">
                    <h1 className="homeblog-header-title">Mastering Scalable Backend Architecture with Node.js</h1>
                    <nav className="homeblog-breadcrumb-nav">
                        <a href="/" className="homeblog-breadcrumb-item link">Home</a>
                        <span className="homeblog-breadcrumb-icon">
                            <FaAngleRight />
                        </span>
                        <span className="homeblog-breadcrumb-item current">Blog Details</span>
                    </nav>
                </div>
            </section>
            <Homeblogdetails_hero_2 {...blogData} />
        </div>
    )
}