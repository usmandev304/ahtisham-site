import React from 'react';
import './Reviews.css';
import img1 from '../../../../assets/reviews_1.webp';
import img2 from '../../../../assets/reviews_2.webp';
import reviewimg from '../../../../assets/testimonial-icon.svg';

const reviewsData = [
  {
    id: 1,
    text: "Working with Hassan was an absolute pleasure! He understood my technical requirements immediately and delivered a high-performance solution that exceeded my expectations.",
    name: "Alex Johnson",
    role: "CEO, Tech Startup",
    image: img1,
  },
  {
    id: 2,
    text: "Hassan is incredibly talented and detail-oriented. He didn't just build a website; he built a scalable system that truly reflects my brand's identity. Highly recommended for any complex web project!",
    name: "Sarah Khan",
    role: "Product Manager",
    image: img2,
  },
];

export default function Reviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            
            {/* Background Image */}
            <div className="review-bg">
              <img src={review.image} alt={review.name} />
            </div>

            {/* Content */} 
            <div className="review-content">
              <div>
                <h2 className="review-text">{review.text}</h2>

                <div className="review-user">
                  <h3>{review.name}</h3>
                  <p>{review.role}</p>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="quote-icon">
                <img src={reviewimg} alt="Quote Icon"  className='quote-img'/>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}