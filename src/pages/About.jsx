import React from 'react';
import './About.css'; // Import the About.css file

const About = () => {
  return (
    <div className="about-container">
      <h1>About CropYieldAI</h1>
      <div className="about-content">
        <img
          src="https://i0.wp.com/geopard.tech/wp-content/uploads/2022/06/63.2-min.jpg?resize=810%2C439&ssl=1" // Replace with your image URL
          alt="Crop Yield Prediction"
          className="about-image"
        />
        <div className="about-text">
          <h2>Use Case of the Project</h2>
          <p>
            CropYieldAI is an advanced platform designed to help farmers and agricultural experts predict crop yields with high accuracy. By leveraging machine learning and AI, our system analyzes various factors such as soil quality, weather conditions, and crop type to provide actionable insights.
          </p>
          <p>
            The primary use cases of CropYieldAI include:
          </p>
          <ul>
            <li>Optimizing crop selection based on soil and climate data.</li>
            <li>Predicting yields to plan harvests and manage resources efficiently.</li>
            <li>Providing real-time recommendations to improve crop health and productivity.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;