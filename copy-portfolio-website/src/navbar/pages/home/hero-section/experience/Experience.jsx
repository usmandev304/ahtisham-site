import { useState, useEffect, useRef } from 'react';
import './Experience.css';

/* ---------------- ODOMETER DIGIT ---------------- */
function OdometerDigit({ digit, digitH, index, triggerKey, spins = 2 }) {
  const innerRef = useRef(null);

  useEffect(() => {
    if (!innerRef.current) return;

    const target = parseInt(digit);
    const nums = [];

    for (let s = 0; s < spins; s++) {
      for (let n = 0; n <= 9; n++) nums.push(n);
    }
    for (let n = 0; n <= target; n++) nums.push(n);

    innerRef.current.innerHTML = nums
      .map(
        n =>
          `<span style="height:${digitH}px;display:block;line-height:${digitH}px;">${n}</span>`
      )
      .join('');

    innerRef.current.style.transition = 'none';
    innerRef.current.style.transform = 'translateY(0)';

    const timeout = setTimeout(() => {
      const duration = 1.8 + index * 0.15;
      innerRef.current.style.transition = `transform ${duration}s cubic-bezier(0.12, 0.8, 0.32, 1)`;
      innerRef.current.style.transform = `translateY(-${(nums.length - 1) * digitH}px)`;
    }, 80 + index * 100);

    return () => clearTimeout(timeout);
  }, [triggerKey, digitH]);

  return (
    <div style={{ overflow: 'hidden', height: digitH, display: 'inline-block' }}>
      <div ref={innerRef} style={{ display: 'flex', flexDirection: 'column' }} />
    </div>
  );
}

/* ---------------- ODOMETER ---------------- */
function Odometer({ value, digitH, fontSize, color, fontFamily, triggerKey }) {
  const digits = value.replace(/[^0-9]/g, '');
  const totalDigits = digits.length;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        fontFamily,
        fontSize,
        fontWeight: 'bold',
        color,
        lineHeight: 1,
      }}
    >
      {value.split('').map((char, i) => {
        if (/[0-9]/.test(char)) {
          const digitIndex = value.slice(0, i).replace(/[^0-9]/g, '').length;
          const spins = totalDigits - digitIndex;

          return (
            <OdometerDigit
              key={i}
              digit={char}
              digitH={digitH}
              index={digitIndex}
              triggerKey={triggerKey}
              spins={spins}
            />
          );
        }

        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              height: digitH,
              lineHeight: `${digitH}px`,
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

/* ---------------- DATA ---------------- */
const stats = [
  { number: "20k+", label: "Our Projects Completed" },
  { number: "10k+", label: "Our Natural Products" },
  { number: "200+", label: "Clients Reviews" },
  { number: "1,000+", label: "Our Satisfied Clients" },
];

/* ---------------- MAIN COMPONENT ---------------- */
export default function Experience() {
  const [borderState, setBorderState] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [triggerKey, setTriggerKey] = useState(0);
  const [digitHeightMain, setDigitHeightMain] = useState(165); // Main experience number
  const [digitHeightStats, setDigitHeightStats] = useState(40); // Stats numbers
  const containerRef = useRef(null);

  /* 🔥 RESPONSIVE HEIGHT */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setDigitHeightMain(100); // main card number
        setDigitHeightStats(48); // right-side stats number
      }
       else {
        setDigitHeightMain(165); // main card number
        setDigitHeightStats(40); // right-side stats number
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* 👇 BORDER EFFECT */
  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const classes = [
      x < rect.width / 2 ? 'left' : 'right',
      y < rect.height / 2 ? 'top' : 'bottom',
    ].join(' ');

    setBorderState(prev => ({ ...prev, [index]: classes }));
  };

  const handleMouseLeave = (index) => {
    setBorderState(prev => ({ ...prev, [index]: '' }));
  };

  /* 👇 INTERSECTION OBSERVER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTriggerKey(k => k + 1);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="experience-container">

      {/* MAIN CARD */}
      <div className="experience-main-card">
        <Odometer
          value="25"
          digitH={digitHeightMain}
          fontSize={`${digitHeightMain}px`}
          color="#FF014F"
          fontFamily="sans-serif"
          triggerKey={triggerKey}
        />
        <p className="experience-label">Years Of Experience</p>
        <p className="experience-description">
         Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency
        </p>
      </div>

      {/* STATS */}
      <div className="experience-stat">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`stat-card hero-service-card ${borderState[index] || ''} ${isVisible ? 'animate-slide-up' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="stat-number">
              <Odometer
                value={item.number}
                digitH={digitHeightStats}
                fontSize={`${digitHeightStats}px`}
                color="#fff"
                fontFamily="sans-serif"
                triggerKey={triggerKey}
              />
            </div>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>

    </div>
  );
}