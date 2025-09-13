import React from 'react';
import '../../styles/auth-shared.css';

export default function UserLogin() {
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
          <a className="switch-link" href="/user/register">Don't have an account? Register</a>
        </div>
      </form>
    </div>
  );
}
