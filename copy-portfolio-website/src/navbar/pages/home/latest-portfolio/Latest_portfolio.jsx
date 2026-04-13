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
          Transforming Ideas into <br /> Exceptional
        </h2>
        <p className="portfolio-description">
          Business consulting consultants provide expert advice and guida businesses 
          to help them improve their performance, efficiency, and organizational
        </p>
      </div>
    </section>
    <Portfolio_project />
    </div>
  );
}