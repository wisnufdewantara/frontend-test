// src/components/Auth/Login.js
import React, { useState } from 'react';
import '../AppComponent.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();      
    };
  
    return (
      <div className="LoginContainer">
        <div className="FormWrapper">
          <div className="Logo" />
          <h2 className="Title">Dashboard Kit</h2>
          <h3 className="Subtitle">Log In to Dashboard Kit</h3>
          <form onSubmit={handleLogin}>
            <div className="InputContainer">
              <label htmlFor="email" className="InputLabel">Email</label>
              <input
                type="email"
                id="email"
                className="Input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
              />
            </div>
            <div className="InputContainer">
              <label htmlFor="password" className="InputLabel">Password</label>
              <input
                type="password"
                id="password"
                className="Input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <div className="ForgotPassword">
                <a href="#" className="TextLink">Forgot password?</a>
              </div>
            </div>
            <button type="submit" className="Button">Log In</button>
          </form>
          <p>
            Don't have an account? <a href="#" className="TextLink">Sign up</a>
          </p>
        </div>
      </div>
    );
  };

export default Login;
