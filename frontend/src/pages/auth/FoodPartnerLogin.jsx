import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';

 const FoodPartnerLogin = function () {
  return (
    <div className="page-container">
  <form className="form-box" autoComplete="off">
        <div className="form-title">Food Partner Login</div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete="off" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" autoComplete="off" required />
        </div>
        <div className="form-action">
          <button type="submit">Login</button>
          <Link className="switch-link" to="/food-partner/register">Don't have an account? Register</Link>
        </div>
      </form>
    </div>
  );
}

export default FoodPartnerLogin;
