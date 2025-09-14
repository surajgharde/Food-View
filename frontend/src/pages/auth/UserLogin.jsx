import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';

const UserLogin = function () {
  return (
    <div className="page-container">
  <form className="form-box" autoComplete="off">
        <div className="form-title">User Login</div>
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
          <Link className="switch-link" to="/user/register">Don't have an account? Register</Link>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
