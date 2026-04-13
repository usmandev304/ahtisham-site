import { Link } from "react-router-dom";
import { LiaPencilRulerSolid, LiaBezierCurveSolid } from "react-icons/lia";
import { FaRegLightbulb, FaRegEnvelope } from "react-icons/fa";
import { useInView } from "../../home/main/useInView";
import './about_hero.css'

// Card Component with scroll animation
const AnimatedCard = ({ card, index }) => {
  const [ref, isInView] = useInView();

  const delayClass = 
    index === 0 ? 'about-card--delay-100' : 
    index === 1 ? 'about-card--delay-200' : 
    index === 2 ? 'about-card--delay-300' : 
    'about-card--delay-400';

  return (
    <div
      ref={ref}
      className={`about-card ${isInView ? 'about-card--in-view about-card--animate-slide-up-fade' : ''} ${delayClass}`}
    >
      {/* Icon Container */}
      <div className="about-card__icon">
        {card.icon}
      </div>

      {/* Title */}
      <Link
        to="#"
        className="about-card__link about-card__title"
      >
        {card.title}
      </Link>

      {/* Counter */}
      <p className="about-card__count">
        {card.count}
      </p>
    </div>
  );
};

export default function AboutHero() {
    const cards = [
        { icon: <LiaPencilRulerSolid />, title: "Web Design", count: "120 Projects" },
        { icon: <LiaBezierCurveSolid />, title: "Ui/Ux Design", count: "241 Projects" },
        { icon: <FaRegLightbulb />, title: "Web Research", count: "240 Projects" },
        { icon: <FaRegEnvelope />, title: "Marketing", count: "331 Projects" },
    ];

    return (
      <div className="about-hero__container">
        <section className="about-hero__section">
          <div className="about-hero__grid">
            {cards.map((card, index) => (
              <AnimatedCard key={index} card={card} index={index} />
            ))}
          </div>
        </section>
      </div>
    );
}