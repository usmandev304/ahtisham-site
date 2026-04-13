import { motion } from 'framer-motion';
import './Portfoioproject.css';
import { FiArrowUpRight } from "react-icons/fi";
import img1 from '../../../../../assets/project_image/proect_1.webp';
import img2 from '../../../../../assets/project_image/proect_2.webp';
import img3 from '../../../../../assets/project_image/proect_3.webp';
import img4 from '../../../../../assets/project_image/proect_4.webp';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "Noir - Creative Portfolio HTML Template",
        category: "Web App",
        img: img1,
        link: '/project/projectdetails/projectdetails1'
    },
    {
        title: "Personal Portfolio HTML5 Template",
        category: "Web App",
        img: img2,
        link: '/project/projectdetails/projectdetails2'
    },
    {
        title: "Education Template For Vue Nuxt Template",
        category: "Online Learning and Education",
        img: img3,
        link: '/project/projectdetails/projectdetails3'
    },
    {
        title: "Harri – Electronics eCommerce Vue Nuxt 3 Template",
        category: "eCommerce",
        img: img4,
        link: '/project/projectdetails/projectdetails4'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function Portfolio_project() {
    return (
        <div className="portfolio-containers">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Link to={project.link} className="project-link">
                        <div className="project-wrapper">
                            <div className="project-card">
                                <div className="card-glow"></div>
                                <p className="card-label">Personal Portfolio</p>
                                <div className="image-container">
                                    {project.img ? (
                                        <img src={project.img} alt={project.title} className="project-image" />
                                    ) : null}
                                </div>
                            </div>

                            <div className="project-info">
                                <div className="text-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-category">{project.category}</p>
                                </div>
                                <div className="action-button">
                                    <FiArrowUpRight />
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}