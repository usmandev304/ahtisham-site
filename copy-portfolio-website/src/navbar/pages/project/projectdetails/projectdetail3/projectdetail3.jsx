import React from 'react';
import './projectdetail3.css';
import { FaAngleRight } from "react-icons/fa6";
import Project3hero from './project3hero/project3hero';

export default function Projectdetail3() {
  return (
    <div className='projectdetails'>
      <section className="hero-container">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Education Template For Vue Nuxt Template</h1>
          <nav className="breadcrumb">
            <a href="/" className="breadcrumb-link">Home</a>
            <span><FaAngleRight className="breadcrumb-separator" /></span>
            <span className="breadcrumb-current">Project Details</span>
          </nav>
        </div>
      </section>
      <Project3hero />
    </div>
  );
}