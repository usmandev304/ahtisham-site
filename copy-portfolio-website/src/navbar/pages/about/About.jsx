import { FaAngleRight } from "react-icons/fa6";
import './about.css'
import About_hero from "./about_hero/about_hero";
import AboutSkill from "./about_skill/about_skill";
import About_experience from "./about_expeericen/about_experience";
import About_education from "./about_education/about_education";
import About_experience_2 from "./about_experience_2/about_experience_2";
import About_price_plan from "./about_price_plan/about_price_plan";
import About_price_detils from "./about_price_plan/about_price_detils/about_price_detils";
import ContactSection from "../home/ContactSection/ContactSection";

export default function About() {
    return (
     <div className='about-details-wrapper'>
          <section className="about-page-header">
            <div className="about-header-overlay"></div>
            <div className="about-header-content">
              <h1 className="about-header-title">About Me</h1>
              <nav className="about-breadcrumb-nav">
                <a href="/" className="about-breadcrumb-item link">Home</a>
                <span className="about-breadcrumb-icon">
                  <FaAngleRight />
                </span>
                <span className="about-breadcrumb-item current">About Me</span>
              </nav>
            </div> 
          </section>
          <About_hero />
          <AboutSkill />
          <About_experience />
          <About_education />
          <About_experience_2 />
          <About_price_plan />
          <About_price_detils />
          <ContactSection />
        </div>
    )
}