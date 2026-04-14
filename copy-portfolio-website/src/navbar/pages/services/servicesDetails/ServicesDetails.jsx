import { FaAngleRight } from "react-icons/fa6";
import Servicesdetails_hero from "./servicesdetails_hero/servicesdetails_hero";

export default function ServicesDetails() {
    return (
     <div className='about-details-wrapper'>
          <section className="about-page-header">
            <div className="about-header-overlay"></div>
            <div className="about-header-content">
              <h1 className="about-header-title">Services Details</h1>
              <nav className="about-breadcrumb-nav">
                <a href="/" className="about-breadcrumb-item link">Home</a>
                <span className="about-breadcrumb-icon">
                  <FaAngleRight />
                </span>
                <span className="about-breadcrumb-item current">Services Details</span>
              </nav>
            </div> 
          </section>
          <Servicesdetails_hero />
        </div>
    )
}