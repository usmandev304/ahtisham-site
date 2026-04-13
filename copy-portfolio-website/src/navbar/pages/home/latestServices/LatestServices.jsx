import Services from "./Services";

export default function LatestServices() {
    return (
        <div className="education-container">
            <div className="education-content">
                {/* Eyebrow heading */}
                <p className="education-eyebrow">
                    Latest Service
                </p>

                {/* Main heading */}
                <h2 className="education-headings">
                   I like Making Things That Are Enjoyable And Special
                </h2>

                {/* Description paragraph */}
                <p className="education-description">
             Let’s bring your vision to life. I love making things that are enjoyable and special—reach out today to start a conversation about your next big project
                </p>
            </div>
            <Services />
        </div>
    )
}