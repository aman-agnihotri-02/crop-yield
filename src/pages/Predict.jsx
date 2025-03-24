import React, { useState } from 'react';
import './Predict.css'; // Import the CSS file

const Predict = () => {
  const [formData, setFormData] = useState({
    cropType: '',
    soilType: '',
    weatherCondition: '',
    area: '',
  });

  const [prediction, setPrediction] = useState(null); // State to store prediction result

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a prediction result (random value)
    const randomYield = (Math.random() * 100).toFixed(2); // Random yield between 0 and 100
    setPrediction(`Predicted Yield: ${randomYield} tons per acre`);
  };

  const handleReset = () => {
    setFormData({
      cropType: '',
      soilType: '',
      weatherCondition: '',
      area: '',
    });
    setPrediction(null); // Reset prediction
  };

  const handleRandomValue = () => {
    const randomCrop = ['wheat', 'rice', 'corn', 'soybean'][Math.floor(Math.random() * 4)];
    const randomSoil = ['loamy', 'clay', 'sandy', 'silt'][Math.floor(Math.random() * 4)];
    const randomWeather = ['sunny', 'rainy', 'cloudy', 'stormy'][Math.floor(Math.random() * 4)];
    const randomArea = Math.floor(Math.random() * 100) + 1; // Random area between 1 and 100

    setFormData({
      cropType: randomCrop,
      soilType: randomSoil,
      weatherCondition: randomWeather,
      area: randomArea,
    });
  };

  return (
    <div className="predict-container">
      <div className="predict-hero">
        <h1 className="predict-title animate-pop-in">Crop Yield Prediction</h1>
        <p className="predict-description animate-pop-in">
          Predict your crop yield with precision using advanced AI models.
        </p>
      </div>

      <form className="predict-form animate-slide-up" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cropType">Crop Type</label>
          <select
            id="cropType"
            name="cropType"
            value={formData.cropType}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select Crop Type</option>
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="corn">Corn</option>
            <option value="soybean">Soybean</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="soilType">Soil Type</label>
          <select
            id="soilType"
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select Soil Type</option>
            <option value="loamy">Loamy</option>
            <option value="clay">Clay</option>
            <option value="sandy">Sandy</option>
            <option value="silt">Silt</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="weatherCondition">Weather Condition</label>
          <select
            id="weatherCondition"
            name="weatherCondition"
            value={formData.weatherCondition}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select Weather Condition</option>
            <option value="sunny">Sunny</option>
            <option value="rainy">Rainy</option>
            <option value="cloudy">Cloudy</option>
            <option value="stormy">Stormy</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="area">Area (in acres)</label>
          <input
            type="number"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="form-select"
            placeholder="Enter area in acres"
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="button predict-button">
            Predict
          </button>
          <button type="button" className="button reset-button" onClick={handleReset}>
            Reset
          </button>
          <button type="button" className="button random-button" onClick={handleRandomValue}>
            Random Value
          </button>
        </div>
      </form>

      {prediction && (
        <div className="prediction-result animate-pop-in">
          <h3>{prediction}</h3>
        </div>
      )}
    </div>
  );
};

export default Predict;