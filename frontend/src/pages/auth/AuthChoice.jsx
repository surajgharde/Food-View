import React from 'react';
import '../../styles/auth-shared.css';

export default function AuthChoice() {
  return (
    <div className="page-container">
      <div className="form-box choice-box">
        <div className="form-title">Create an account</div>
        <div className="choice-grid">
          <a className="choice-card" href="/user/register">Register as User</a>
          <a className="choice-card" href="/food-partner/register">Register as Food Partner</a>
        </div>
      </div>
    </div>
  );
}
