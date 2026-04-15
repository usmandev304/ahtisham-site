import customline from '../../../../assets/custom-line.webp'
import { motion } from 'framer-motion';
import './skill.css';

export default function Skill() {
    const designSkills = [
        { name: 'DEVELOPMENT', percentage: 90 },
        { name: 'WEBFLOW', percentage: 75 },
        { name: 'DEPLOYMENTS/DEVOPS', percentage: 85 },
        { name: 'AI MODEL TRAINING', percentage: 90 },
        { name: 'Frontend Development', percentage: 95 },
        { name: 'Databases', percentage: 85 },
        { name: 'Architecture & System Design', percentage: 80 },
    ];

    const developmentSkills = [
        { name: 'Python', percentage: 90 },
        { name: 'AI', percentage: 80 },
        { name: 'JavaScript', percentage: 80 },
        { name: 'PHP', percentage: 90 },
        { name: 'Backend Development', percentage: 80 },
        { name: 'CMS & E-Commerce', percentage: 90 },
        { name: 'Tools & Version Control', percentage: 95 },
    ];

    const SkillBar = ({ name, percentage, delay }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay, ease: 'easeOut' }}
                className="skill-bar"
            >
                <div className="skill-bar-header">
                    <span className="skill-bar-title">{name}</span>
                    {/* The percentage has been moved out of the header */}
                </div>
                <div className="skill-bar-bg">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
                        className="skill-bar-fill"
                    >
                        {/* The percentage is now inside the fill bar to travel with it */}
                        <span className="skill-bar-percentage">{percentage}%</span>
                    </motion.div>
                </div>
            </motion.div>
        );
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
        }),
    };

    return (
        <div className="m">
            <div className="skill-container home-skill-container">
                <section className="skill-section">
                    <div className="skill-grid">

                        {/* Design Skills Column */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={0}
                            variants={cardVariants}
                        >
                            <div className="skill-card">
                                <h3 className="skill-title">
                                    Skills
                                    <img src={customline} alt="" className="skill-title-line" />
                                </h3>
                                <div className="skill-list">
                                    {designSkills.map((skill, index) => (
                                        <SkillBar key={index} name={skill.name} percentage={skill.percentage} delay={index * 0.1} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Development Skills Column */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={1}
                            variants={cardVariants}
                        >
                            <div className="skill-card">
                                <h3 className="skill-title">
                                    <span></span> Skills
                                    <img src={customline} alt="" className="skill-title-line" />
                                </h3>
                                <div className="skill-list">
                                    {developmentSkills.map((skill, index) => (
                                        <SkillBar key={index} name={skill.name} percentage={skill.percentage} delay={index * 0.1} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </section>
            </div>
        </div>
    );
}