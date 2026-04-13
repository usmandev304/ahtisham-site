import { FaAngleRight } from "react-icons/fa6";
import Homeblogdetails_hero_3 from "./Homeblogdetails_hero_3/Homeblogdetails_hero_2";

export default function Homeblogdetails_3() {
    return (
     <div className='blog-details-wrapper'>
          <section className="homeblog-page-header">
            <div className="homeblog-header-overlay"></div>
            <div className="homeblog-header-content">
              <h1 className="homeblog-header-title">Each one showcases our approach and dedication man</h1>
              <nav className="homeblog-breadcrumb-nav">
                <a href="/" className="homeblog-breadcrumb-item link">Home</a>
                <span className="homeblog-breadcrumb-icon">
                  <FaAngleRight />
                </span>
                <span className="homeblog-breadcrumb-item current">Blog Details</span>
              </nav>
            </div>
          </section>
        <Homeblogdetails_hero_3 />
        </div>
    )
}