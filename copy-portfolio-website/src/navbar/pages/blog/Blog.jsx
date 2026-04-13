import { FaAngleRight } from "react-icons/fa6";
import Blog_header from "./blog_header/blog_header";

export default function Blogclassic() {
    return (
     <div className='about-details-wrapper'>
          <section className="about-page-header">
            <div className="about-header-overlay"></div>
            <div className="about-header-content">
              <h1 className="about-header-title">Blog Classic</h1>
              <nav className="about-breadcrumb-nav">
                <a href="/" className="about-breadcrumb-item link">Home</a>
                <span className="about-breadcrumb-icon">
                  <FaAngleRight />
                </span>
                <span className="about-breadcrumb-item current">Blog Classic</span>
              </nav>
            </div> 
          </section>
          <Blog_header />
        </div>
    )
}