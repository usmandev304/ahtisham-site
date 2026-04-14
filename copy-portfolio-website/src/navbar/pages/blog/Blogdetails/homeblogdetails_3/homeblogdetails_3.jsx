import { FaAngleRight } from "react-icons/fa6";
import Homeblogdetails_hero_3 from "./Homeblogdetails_hero_3/Homeblogdetails_hero_2";
import img from '../../../../../assets/blog-img-3.webp'
import reactImg1 from '../../../../../assets/single-post-card-img-1.webp'
import reactImg2 from '../../../../../assets/single-post-card-img-2.webp'
import reactImg3 from '../../../../../assets/single-post-card-img-3.webp'
import reactImg4 from '../../../../../assets/blog-details-swiper-img.png'
import reactImg5 from '../../../../../assets/about-me-user-img.png'
import comment1 from '../../../../../assets/about-me-user-img.png'
import comment2 from '../../../../../assets/comments-img-2.webp'

export default function Homeblogdetails_3() {
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
                name: "Alex Rivera",
                date: "September 16, 2023",
                avatar: comment1,
                text: "Spot on about cognitive load management. Many developers focus so much on the backend logic that they forget the user has to actually navigate the data. Your point about UI/UX being a 'strategic necessity' in fintech is especially true—clarity literally prevents costly mistakes.",
                isReply: false,
            },
            {
                id: 2,
                name: "Sophia Chen",
                date: "September 16, 2023",
                avatar: comment2,
                text: "I love the emphasis on 'invisible design' here. When an application feels natural, the user doesn't even realize how much work went into the navigation. It’s great to see a developer who prioritizes accessibility and speed alongside high-end professional aesthetics.",
                isReply: true,
            },
            {
                id: 3,
                name: "Marcus Thorne",
                date: "September 16, 2023",
                avatar: comment2,
                text: "The synergy between clean architecture and user-centered design is exactly what separates a simple tool from a scalable product. Balancing technical complexity with a seamless experience is a rare skill—looking forward to seeing more from your portfolio!",
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
                    <h1 className="homeblog-header-title">The Importance of UI/UX in Functional Web Applications</h1>
                    <nav className="homeblog-breadcrumb-nav">
                        <a href="/" className="homeblog-breadcrumb-item link">Home</a>
                        <span className="homeblog-breadcrumb-icon">
                            <FaAngleRight />
                        </span>
                        <span className="homeblog-breadcrumb-item current">Blog Details</span>
                    </nav>
                </div>
            </section>
            <Homeblogdetails_hero_3 {...blogData} />
        </div>
    )
}