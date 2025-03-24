import React from 'react';
import './WhyUseCropYield.css';
import { FaChartLine, FaTractor, FaCloudSun } from 'react-icons/fa';

const WhyUseCropYield = () => {
  return (
    <div className="why-use-container">
      <h2>Why Use CropYieldAI?</h2>
      <div className="why-use-grid">
        <div className="why-use-card">
          <FaChartLine className="icon" />
          <h3>Data-Driven Insights</h3>
          <p>Analyze climate, soil quality, and historical yield data for informed decisions.</p>
        </div>
        <div className="why-use-card">
          <FaTractor className="icon" />
          <h3>Increase Efficiency</h3>
          <p>Optimize resources and reduce waste through smart forecasting techniques.</p>
        </div>
        <div className="why-use-card">
          <FaCloudSun className="icon" />
          <h3>Climate Adaptability</h3>
          <p>Provides real-time weather and environmental impact assessments.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUseCropYield;
