import React, { useState } from 'react';
import './about_price_detils.css';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const pricingData = [
  {
    title: "Starter",
    price: "5.00",
    features: ["5 Social Media Account", "Free Platform Access", "24/7 Customer Support"],
    isFeatured: false,
  },
  {
    title: "Basic",
    price: "230.00",
    features: ["5 Social Media Account", "Free Platform Access", "Marketing Platform", "24/7 Customer Support", "Life time support"],
    isFeatured: true,
  },
  {
    title: "Premium",
    price: "45.00",
    features: ["5 Social Media Account", "Free Platform Access", "24/7 Customer Support"],
    isFeatured: false,
  }
];

// Parent animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export default function About_price_detils() {

  const [hoverClasses, setHoverClasses] = useState({});

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const classes = [];

    if (x < rect.width / 2) classes.push('hover-left');
    else classes.push('hover-right');

    if (y < rect.height / 2) classes.push('hover-top');
    else classes.push('hover-bottom');

    setHoverClasses(prev => ({
      ...prev,
      [index]: classes.join(' ')
    }));
  };

  const handleMouseLeave = (index) => {
    setHoverClasses(prev => ({
      ...prev,
      [index]: ''
    }));
  };

  return (
    <div className="pricing-container">

      <motion.div
        className="pricing-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {pricingData.map((plan, index) => (
          <motion.div
            key={index}
            className={`pricing-card directional-effect ${plan.isFeatured ? 'featured' : ''} ${hoverClasses[index] || ''}`}
            variants={cardVariants}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <h4 className="plan-title">{plan.title}</h4>

            <h2 className="plan-price">
              <span className="currency">$</span> {plan.price}
            </h2>

            <p className="plan-duration">Per Month</p>

            <div className="dividers"></div>

            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icons" /> {feature}
                </li>
              ))}
            </ul>

            <button className="cta-button">
              <span>Get Started</span>
              <FaArrowRight className="arrow-icon" />
            </button>

          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}