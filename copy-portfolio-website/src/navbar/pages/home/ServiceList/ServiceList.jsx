import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ServiceList.css';
import { FaCode } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";
import { LiaAngleRightSolid } from "react-icons/lia";

const services = [
  {
    id: 1,
    title: "Frontend",
    count: "45+ Projects Done",
    description: "Crafting interactive, responsive, and high-performance user interfaces with advanced animations and clean CSS.",
    icon: <FaCode />
  },
  {
    id: 2,
    title: "Backend",
    count: "30+ Systems Built",
    description: "Designing scalable APIs, database schemas, and secure server-side logic for enterprise-grade applications.",
    icon: <FaConnectdevelop />
  },
  {
    id: 3,
    title: "Full Stack",
    count: "9+ Years Exp",
    description: "Leading development teams to deliver end-to-end products from initial concept to final cloud deployment.",
    icon: <SiWebmoney />
  }
];

const rowVariants = {
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

export default function ServiceList() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="service-container">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className={`service-row ${activeIndex === index ? 'active' : ''}`}
          onMouseEnter={() => setActiveIndex(index)}
          custom={index}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="service-icon-wrapper">
            <div className="icon-circles">
              <span className='serivces-icon'>{service.icon}</span>
            </div>
          </div>

          <div className="service-title-section">
            <h3>{service.title}</h3>
            <p className="service-count">{service.count}</p>
          </div>

          <div className="service-desc-section">
            <p>{service.description}</p>
          </div>

          <div className="service-link-section">
            <a href="#" className="read-more">
              READ MORE <span><LiaAngleRightSolid className="arrow" /></span>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}