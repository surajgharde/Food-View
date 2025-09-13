import React from 'react';
import '../../styles/auth-shared.css';

export default function FoodPartnerRegister() {
  return (
    <div className="page-container">
  <form className="form-box" autoComplete="off">
        <div className="form-title">Partner sign up</div>
        <div className="subtitle">Grow your business with our platform.</div>
        <div className="switch-small">Switch <a href="/">User</a> · <a href="/food-partner/register">Food partner</a></div>

        <div className="form-group">
          <label htmlFor="businessName">Business Name</label>
          <input type="text" id="businessName" name="businessName" autoComplete="off" />
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="contactName">Contact Name</label>
            <input type="text" id="contactName" name="contactName" autoComplete="off" />
          </div>
          <div className="col">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" autoComplete="off" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete="off" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" autoComplete="off" />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" autoComplete="off" />
          <div className="helper">Full address helps customers find you faster.</div>
        </div>

        <div className="form-action">
          <button type="submit" className="primary">Create Partner Account</button>
          <a className="switch-link" href="/food-partner/login">Already a partner? Sign in</a>
        </div>
      </form>
    </div>
  );
}
