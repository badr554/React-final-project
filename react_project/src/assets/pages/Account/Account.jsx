import React from 'react';
import "../../../style/components/_Account.scss";

export default function Account() {
  return (
    <div>
      <div className="contain">
        <h1>My Account</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><span>My Account</span></li>
        </ul>
      </div>
      <div className="account-container">
        <div className="account-section">
          <h2>Sign in</h2>
          <form className="account-form">
              <input type="text" placeholder="Username" />
  
              <input type="password" placeholder="Password" />
            <div className="form-options">
              <div className="lab">
                <input type="checkbox" name="checkbox" id="checkbox"/>
                <label for="checkbox">Stay Logged in</label>
              </div>
              <a href="#" className="forgot-password">Forgot Your Password?</a>
            </div>
            <button type="submit" className="account-btn">
              <span>Log in</span>
            </button>
          </form>
        </div>

        <div className="account-section">
          <h2>Sign up</h2>
          <form className="account-form">
              <input type="text" placeholder="Username" />

              <input type="email" placeholder="Email Address" />

              <input type="password" placeholder="Password" />

            <button type="submit" className="account-btn" >
              <span>Register</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};