import { FaArrowRight } from "react-icons/fa6";
import TypeEffect from "./typingeffect/TypingEffect";
// Path fix: 4 levels up to reach 'src', then into 'assets'
import HeroSrc from "../../../../assets/heroImage/banner-user-image-one.webp";
import "./hero.css";
import MainSection from "../main/MainSection";
import Experience from "./experience/Experience";
import Skill from "../skill/Skill";
import ScrollAnimationWrapper from "../scroll-animation/ScrollAnimationWrapper";
import Latestervices from "../latestServices/LatestServices";
import Education from "../education/Education";
import Experiencehome from "../experience/Experiencehome";
import Support_company from "../support-company/Support_company";
import Latest_portfolio from "../latest-portfolio/Latest_portfolio";
import My_skill from "../my_skill/my_skill";
import ServiceList from "../ServiceList/ServiceList";
import Reviews from "../Reviews/Reviews";
import ContactSection from "../ContactSection/ContactSection";
import HomeBlog from "../homeblog/homeblog";
import Homeblogcard from "../homeblog/homeblogcard/homeblogcard";
import { motion } from 'framer-motion';
import { TfiDownload } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function herosection() {
  return (
    <>
      <div className="bg-image">
        <section className="home-hero-container">
          <div className="home-hero-content">
            <h4 className="home-hero-greeting">HELLO</h4>
            <h1 className="home-hero-title">
              i'm Hassan Farooqi a <br />
              <TypeEffect />
            </h1>
            <p className="home-hero-description">
            I am a Senior Full Stack Developer at heart and, i create features that are best suited for the job at hand.
            </p>
            <div className="home-header-btns">
            <button className="home-hero-btn">
              <Link to="/project" className="home-hero-btn-link">
                <span className="home-hero-btn-span">View Portfolio</span>  <span><FaArrowRight className="arrow" /></span>
              </Link>
            </button>
            <button className="home-hero-btn">
              <a href="/cv.pdf" download="Hassan_Farooqi Senior Full Stack Developer And Team Lead" className="home-hero-btn-link">
                <span className="home-hero-btn-span">Download CV</span>  <span><TfiDownload className="arrow" /></span>
              </a>
            </button>
            </div>
          </div>

          <div className="home-hero-image-wrapper">
            <div className="home-hero-bg-text">WEB DESIGNER</div>
            <div className="home-hero-bg-text-bottom">WEB DESIGNER</div>
            <img
              src={HeroSrc}
              alt="Jane Cooper"
              className="home-hero-image"
            />
          </div>
        </section>
      </div>


      <MainSection />


      <Experience />


      <Skill />


      <Latestervices />


      <Education />


      <Experiencehome />


      <Support_company />


      <Latest_portfolio />


      <My_skill />


      <ServiceList />


      <Reviews />


      <ContactSection />


      <HomeBlog />


      <Homeblogcard />

    </>
  );
}