import { FaAngleRight } from "react-icons/fa6";
import ProjectHero from './projecthero/projecthero';

export default function Projectdetails1() {
  return (
    <div className='projectdetails'>
      <section className="hero-container">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Noir - Creative Portfolio HTML Template</h1>
          <nav className="breadcrumb">
            <a href="/" className="breadcrumb-link">Home</a>
            <span><FaAngleRight className="breadcrumb-separator" /></span>
            <span className="breadcrumb-current">Project Details</span>
          </nav>
        </div>
      </section>
      <ProjectHero />
    </div>
  );
} 