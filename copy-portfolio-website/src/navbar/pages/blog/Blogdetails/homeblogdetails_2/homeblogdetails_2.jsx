import { FaAngleRight } from "react-icons/fa6";
import Homeblogdetails_hero_2 from "./Homeblogdetails_hero_2/Homeblogdetails_hero_2";

export default function Homeblogdetails_2() {
    return (
     <div className='blog-details-wrapper'>
          <section className="homeblog-page-header">
            <div className="homeblog-header-overlay"></div>
            <div className="homeblog-header-content">
              <h1 className="homeblog-header-title">Let's bring your ideas to life! Contact me, and let's</h1>
              <nav className="homeblog-breadcrumb-nav">
                <a href="/" className="homeblog-breadcrumb-item link">Home</a>
                <span className="homeblog-breadcrumb-icon">
                  <FaAngleRight />
                </span>
                <span className="homeblog-breadcrumb-item current">Blog Details</span>
              </nav>
            </div>
          </section>
          <Homeblogdetails_hero_2 />
        </div>
    )
}