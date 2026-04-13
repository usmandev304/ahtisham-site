import { FaAngleRight } from "react-icons/fa6";
import Services_cards from "./services_cards/services_cards";
import About_price_plan from "../about/about_price_plan/about_price_plan";
import About_price_detils from "../about/about_price_plan/about_price_detils/about_price_detils";

export default function Services() {
    return (
     <div className='about-details-wrapper'>
          <section className="about-page-header">
            <div className="about-header-overlay"></div>
            <div className="about-header-content">
              <h1 className="about-header-title">Service</h1>
              <nav className="about-breadcrumb-nav">
                <a href="/" className="about-breadcrumb-item link">Home</a>
                <span className="about-breadcrumb-icon">
                  <FaAngleRight />
                </span>
                <span className="about-breadcrumb-item current">Service</span>
              </nav>
            </div> 
          </section>
          <Services_cards />
          <About_price_plan />
          <About_price_detils />
        </div>
    )
}