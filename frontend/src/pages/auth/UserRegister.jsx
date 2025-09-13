import React from 'react';
import '../../styles/auth-shared.css';

export default function UserRegister() {
  return (
    <div className="page-container">
  <form className="form-box" autoComplete="off">
        <div className="form-title">User Register</div>
        <div className="subtitle">Create your personal account.</div>
        <div className="switch-small">Switch <a href="/">User</a> · <a href="/food-partner/register">Food partner</a></div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" autoComplete="off" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete="off" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" autoComplete="off" required />
        </div>
        <div className="form-action">
          <button type="submit">Register</button>
          <a className="switch-link" href="/user/login">Already have an account? Login</a>
        </div>
      </form>
    </div>
  );
}
