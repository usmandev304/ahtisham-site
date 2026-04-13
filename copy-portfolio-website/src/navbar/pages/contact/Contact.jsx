import { FaAngleRight } from "react-icons/fa6";
import Contact_header from "./contact_header/contact_header";
import ContactSection from "../home/ContactSection/ContactSection";

export default function Contact() {
    return (
     <div className='about-details-wrapper'>
          <section className="about-page-header">
            <div className="about-header-overlay"></div>
            <div className="about-header-content">
              <h1 className="about-header-title">Contact</h1>
              <nav className="about-breadcrumb-nav">
                <a href="/" className="about-breadcrumb-item link">Home</a>
                <span className="about-breadcrumb-icon">
                  <FaAngleRight />
                </span>
                <span className="about-breadcrumb-item current">Contact</span>
              </nav>
            </div> 
          </section>
          <Contact_header />
          <ContactSection />
        </div>
    )
}