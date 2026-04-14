import { div } from 'framer-motion/client';
import './Latestportfolio.css';
import Portfolio_project from './portfolio-project/Portfoio_project';

export default function Latest_portfolio() {
  return (
    <div>
      <section className="portfolio-section">
        <div className="portfolio-sectionportfolio-section">
          <h5 className="portfolio-subtitle">LATEST PORTFOLIO</h5>
          <h2 className="portfolio-title">
          Transforming Ideas into Exceptional <br /> Web Experiences
          </h2>
          <p className="portfolio-description">
           Where clean code meets creative design. I deliver end-to-end full-stack development that focuses on speed, scalability, and stability.
          </p>
        </div>
      </section>
      <Portfolio_project />
    </div>
  );
}