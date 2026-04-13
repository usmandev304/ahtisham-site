import React from 'react';
import './Projectdetails4.css';
import { FaAngleRight } from "react-icons/fa6";
import Project4Hero from './Project4Hero/Project4Hero';

export default function Projectdetails4() {
  return (
    <div className='projectdetails'>
      <section className="hero-container">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Harri – Electronics eCommerce Vue Nuxt 3 Template</h1>
          <nav className="breadcrumb">
            <a href="/" className="breadcrumb-link">Home</a>
            <span><FaAngleRight className="breadcrumb-separator" /></span>
            <span className="breadcrumb-current">Project Details</span>
          </nav>
        </div>
      </section>
      <Project4Hero />
    </div>
  );
}