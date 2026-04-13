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
                    Empowering Creativity through
                </h2>
                
                {/* Description paragraph */}
                <p className="education-description">
                    Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational
                </p>
            </div>
            <Educationdetails />
        </div>
    )
}