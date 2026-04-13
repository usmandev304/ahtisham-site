import { FaAngleRight } from "react-icons/fa6";
import Project2hero from "./project2hero/Project2hero";

export default function Projectdetail2() {
    return (
         <div className='projectdetails'>
           <section className="hero-container">
             <div className="hero-overlay"></div>
             <div className="hero-content">
               <h1 className="hero-title">Personal Portfolio HTML5 Template</h1>
               <nav className="breadcrumb">
                 <a href="/" className="breadcrumb-link">Home</a>
                 <span><FaAngleRight className="breadcrumb-separator"/></span>
                 <span className="breadcrumb-current">Project Details</span>
               </nav>
             </div>
           </section>
           <Project2hero />
             </div>        
    )
}