import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="container">
      <div className={`form-box ${isSignUp ? "active" : ""}`}>
        <div className="form-content">
          {/* Left Section (Login Form) */}
          <div className="form login-form">
            <h2>Log In</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn">Log In</button>
            <p>
              Don't have an account?{" "}
              <span onClick={() => setIsSignUp(true)}>Sign Up</span>
            </p>
          </div>

          {/* Right Section (Signup Form) */}
          <div className="form signup-form">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button className="btn">Sign Up</button>
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsSignUp(false)}>Log In</span>
            </p>
          </div>
        </div>

        {/* Sliding Panel */}
        <div className="slider">
          <div className="slider-panel">
            <h2>{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h2>
            <p>
              {isSignUp
                ? "Already have an account? Log in to continue."
                : "New here? Sign up and join us today!"}
            </p>
            <button className="toggle-btn" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Log In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
