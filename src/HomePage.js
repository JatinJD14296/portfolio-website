import React from 'react';
import './HomePage.css'; // Import CSS file for styling

function HomePage () {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing my coding skills and projects</p>
      </div>
      <div className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Professional Design</li>
          <li>Responsive Layout</li>
          <li>Dynamic Content</li>
          <li>Easy Navigation</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
