import { motion } from 'framer-motion';
import './about_price_plan.css';

export default function About_price_plan() {
  return (
    <section className="about-price_plan-section">
      <div className="about-price_plan-container">

        {/* Subtitle */}
        <motion.h5
          className="about-price_plan-subtitle"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          My Price plan
        </motion.h5>

        {/* Title */}
        <motion.h2
          className="about-price_plan-title"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Enhancing Collaboration <br /> between Remote
        </motion.h2>

      </div>
    </section>
  );
}