/* this is for the login page */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "../styles/login.css";

const Login = () => {
    return (
        <div className = "login-container">
            <div className = "login-box">
                <h2>Sign in</h2>
                <p className = "login-subtext">Stay updated on your personal review space</p>

                <input type="text" placeholder="Email or Phone" className="login-input" />

                <div className="password-container">
                    <input type="password" placeholder="Password" className="login-input" />
                    <span className="show-password">show</span>
                </div>

                <a href="#" className="forgot-password">Forgot password?</a>

                <button className="login-button">Sign in</button>

                <div className="divider">
                    <span>or</span>
                </div>

                <button className="google-login-button">
                    <img src="https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png" alt="Google Icon" className="google-icon" />
                    Sign in with Google
                </button>

                <div className="signup-text">
                    <span>New to Reviewary? </span>
                    <a href="/signup" className="signup-link">Join now</a>
                </div>
            </div>
        </div>
    );
};

export default Login;