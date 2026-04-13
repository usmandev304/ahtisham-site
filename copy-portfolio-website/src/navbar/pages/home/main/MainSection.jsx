import { Link } from "react-router-dom";
import { LiaPencilRulerSolid, LiaBezierCurveSolid } from "react-icons/lia";
import { FaRegLightbulb, FaRegEnvelope } from "react-icons/fa";
import "./MainSection.css";
import { useInView } from "./useInView";

// Card Component with scroll animation - different duration and delay per card
const AnimatedCard = ({ card, index }) => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`animated-card ${isInView ? 'in-view animate-slide-up-fade' : ''} card-${index}`}
    >
      {/* Icon Container */}
      <div className="animated-card-icon">
        {card.icon}
      </div>

      {/* Title */}
      <Link
        to="#"
        className="link-underline animated-card-title"
      >
        {card.title}
      </Link>

      {/* Counter */}
      <p className="animated-card-counts">
        {card.count}
      </p>
    </div>
  ); 
};

export default function MainSection() {
    const cards = [
        { icon: <LiaPencilRulerSolid className="home-animated-card-icons"/>, title: "Web Design", count: "120 Projects" },
        { icon: <LiaBezierCurveSolid className="home-animated-card-icons"/>, title: "Ui/Ux Design", count: "241 Projects" },
        { icon: <FaRegLightbulb className="home-animated-card-icon"/>, title: "Web Research", count: "240 Projects" },
        { icon: <FaRegEnvelope className="home-animated-card-icon"/>, title: "Marketing", count: "331 Projects" },
    ];

    return (
      <div className="main-section-containers">
        <section className="main-section">
          <div className="main-section-grid">
            {cards.map((card, index) => (
              <AnimatedCard key={index} card={card} index={index} />
            ))}
          </div>
        </section>
      </div>
    );
}