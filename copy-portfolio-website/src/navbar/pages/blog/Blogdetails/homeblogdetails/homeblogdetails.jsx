import React from 'react';
import './homeblogdetails.css';
import { FaAngleRight } from "react-icons/fa6";
import Homeblogdetails_hero from './homeblogdetails_hero/homeblogdetails_hero';

export default function HomeBlogDetails() {
  return (
    <div className='blog-details-wrapper'>
      <section className="homeblog-page-header">
        <div className="homeblog-header-overlay"></div>
        <div className="homeblog-header-content">
          <h1 className="homeblog-header-title">Inspiring the World, One Project at a Time for the man</h1>
          <nav className="homeblog-breadcrumb-nav">
            <a href="/" className="homeblog-breadcrumb-item link">Home</a>
            <span className="homeblog-breadcrumb-icon">
              <FaAngleRight />
            </span>
            <span className="homeblog-breadcrumb-item current">Blog Details</span>
          </nav>
        </div>
      </section>
      <Homeblogdetails_hero />
    </div>
  );
}