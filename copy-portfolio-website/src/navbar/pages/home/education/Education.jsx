import Educationdetails from "./Educationdetails";
import "./education.css";

export default function Education() {
    return (
        <div className="education-container">
            <div className="education-content">
                {/* Eyebrow heading */}
                <p className="education-eyebrow">
                    Education & Experience
                </p>

                {/* Main heading */}
                <h2 className="education-heading">
                    Merging Technical Expertise with Creative Solutions
                </h2>

                {/* Description paragraph */}
                <p className="education-description">
                  I provide end-to-end development services designed to scale businesses. By combining robust backend architecture with high-performance frontend solutions, I turn complex requirements into seamless digital products.
                </p>
            </div>
            <Educationdetails />
        </div>
    )
}