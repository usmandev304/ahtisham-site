import React from 'react';
import './Reviews.css';
import img1 from '../../../../assets/reviews_1.webp';
import img2 from '../../../../assets/reviews_2.webp';
import reviewimg from '../../../../assets/testimonial-icon.svg';

const reviewsData = [
  {
    id: 1,
    text: "Working With Themespark Was An Absolute Pleasure! They Understood My Vision Immediately And Brought It To Life Even Better Than I'd Imagined.",
    name: "Cameron Williamson",
    role: "Ui/Ux Designer",
    image: img1,
  },
  {
    id: 2,
    text: "ThemesPark Is Incredibly Talented And Detail-Oriented. They Took The Time To Understand My Brand And Created Something Truly Unique",
    name: "Cameron Williamson",
    role: "Ui/Ux Designer",
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