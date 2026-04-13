import { FaAngleRight } from "react-icons/fa6";
import ProjectHeader from "./project-header/projectHeader";

export default function Project() {
    return (
     <div className='about-details-wrapper'>
          <section className="about-page-header">
            <div className="about-header-overlay"></div>
            <div className="about-header-content">
              <h1 className="about-header-title">Project</h1>
              <nav className="about-breadcrumb-nav">
                <a href="/" className="about-breadcrumb-item link">Home</a>
                <span className="about-breadcrumb-icon">
                  <FaAngleRight />
                </span>
                <span className="about-breadcrumb-item current">Project</span>
              </nav>
            </div> 
          </section>
          <ProjectHeader />
        </div>
    )
}