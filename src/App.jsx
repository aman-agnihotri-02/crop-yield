import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Predict from './pages/Predict';
import LoginSignup from './pages/LoginSignup';
import Chatbox from './pages/Chatbox'; // Import Chatbox component
import '@google/model-viewer';



function App() {
  useEffect(() => {import('@google/model-viewer');}, []);
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="navbar-logo">CropYieldAI</h1>
        </div>
        <div className="navbar-right">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
            About
          </NavLink>
          <NavLink to="/predict" className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
            Predict
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
            Login/Signup
          </NavLink>
        </div>
      </nav>

      {/* Main Content */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="container" id='home'>
              <h1 id = "fontt">Crop Yield Prediction</h1>
              <p>Predict crop yields with precision using advanced AI models.</p>
              <div>
              <model-viewer id="kitchen" src="src\tree.glb" camera-controls camera-orbit="45deg 75deg 2m" field-of-view="30deg" style={{ width: '200vh', height: '50vh' }} />
              {/* <img src="https://img-new.cgtrader.com/items/4817115/630dc54f24/large/cadillac-ct4-v-2022-3d-model-630dc54f24.jpg" alt="" /> */}
              </div>
              <div className="button-container">
                <button className="button predict-button" onClick={() => window.location.href = '/predict'}>Predict Now</button>
                {/* <button className="button chat-ai-button" onClick={() => setShowChatbox(!showChatbox)}>Chat AI</button> */}
              </div>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>

      {/* Chatbox Component */}
      <Chatbox />
    </Router>
  );
}



export default App;

<model-viewer id="kitchen" src="\car.glb" camera-controls camera-orbit="45deg 75deg 2m" field-of-view="30deg" style={{ width: '100%', height: '500px' }}/>

