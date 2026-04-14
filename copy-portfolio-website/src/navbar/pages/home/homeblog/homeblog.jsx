import React from 'react';
import './homeblog.css'; // Make sure the CSS file is in the same folder

export default function HomeBlog() {
    return (
        <section className="blog-header-section">
            <div className="blog-header-container">
                <span className="blog-subheading">BLOG AND NEWS</span>
                <h2 className="blog-main-heading">
                   Insights into Full-Stack Development<br />
                  & Modern Web Trends
                </h2>
            </div>
        </section>
    );
}