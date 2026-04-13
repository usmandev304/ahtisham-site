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
 
export default function Herosection() {
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};

const imageAnim = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8 }
  }
};
  return (
    <>
    <div className="hero-bg-image">
     <motion.div
  className="hero-grids"
  variants={container}
  initial="hidden"
  animate="show"
>

  {/* LEFT SIDE */}
  <motion.div className="hero-left-contents" variants={slideLeft}>
    
    <motion.h1
      className="hero-titles hero-title-sm"
      variants={fadeUp}
    >
      HELLO
    </motion.h1>

    <motion.div
      className="hero-subtitle-wrapper"
      variants={fadeUp}
    >
      <p className="hero-subtitle">i'm Jane Cooper a</p>
      <TypeEffect />
    </motion.div>

    <motion.p
      className="hero-description"
      variants={fadeUp}
    >
      I am a Senior Full Stack Developer at heart and, i create features
      that are best suited for the job at hand.
    </motion.p>

    <motion.div
      className="hero-button-wrapper"
      variants={fadeUp}
    >
      <motion.button
        className="profile"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>View Portfolio</span>
        <FaArrowRight />
      </motion.button>
    </motion.div>

  </motion.div>

  {/* RIGHT SIDE */}
  <motion.div
    className="hero-right-content"
    variants={imageAnim}
  >
    
    <motion.p
      className="hero-float-text"
      variants={fadeUp}
    >
      WEB DESIGNER
    </motion.p>

    <motion.img
      src={HeroSrc}
      alt="Jane Cooper"
      className="hero-image"
      variants={imageAnim}
    />

    <motion.p
      className="hero-float-text-bottom text-stroke"
      variants={fadeUp}
    >
      WEB DESIGNER
    </motion.p>

  </motion.div>

</motion.div>
  </div>
      <ScrollAnimationWrapper>
        <MainSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Experience />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Skill />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Latestervices />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Education />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Experiencehome />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Support_company />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Latest_portfolio />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <My_skill />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <ServiceList />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Reviews />
      </ScrollAnimationWrapper>
       <ScrollAnimationWrapper>
        <ContactSection />
      </ScrollAnimationWrapper>
       <ScrollAnimationWrapper>
        <HomeBlog />
      </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
        <Homeblogcard />
      </ScrollAnimationWrapper>
    </>
  );
}
