import { useState, useEffect } from 'react';
import './ScrollToTopButton.css';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollCompletion, setScrollCompletion] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            const docHeight = fullHeight - windowHeight;

            // Button visibility
            setIsVisible(scrollTop > 300);

            // Scroll percentage
            if (docHeight > 0) {
                const percent = (scrollTop / docHeight) * 100;
                // Minimum fill (15%) so background always visible
                setScrollCompletion(Math.max(percent, 15));
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            style={{ '--scroll-percent': `${scrollCompletion}%` }}
        >
            <div className="wave-fill"></div>
            <span className="scroll-btn-icon">
                <FaArrowUp />
            </span>
        </button>
    );
}