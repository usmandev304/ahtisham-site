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
                    Building Robust Applications for the Modern Web
                </h2>

                {/* Description paragraph */}
                <p className="education-description">
                  Let’s bring your vision to life. I specialize in building end-to-end web applications that are fast, secure, and user-centric. Let's start a conversation about your next big project today.
                </p>
            </div>
            <Services />
        </div>
    )
}