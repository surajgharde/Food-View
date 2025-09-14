import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';

const FoodPartnerRegister = function() {
  // const handleSubmit = async (e) => {
  //   const businessName = e.target.businessName.value;
  //   const contactName = e.target.contactName.value;
  //   const phone = e.target.phone.value;
  //   const email = e.target.email.value;
  //   const password = e.target
  // }
  return (
    <div className="page-container">
  <form className="form-box" autoComplete="off">
        <div className="form-title">Partner sign up</div>
        <div className="subtitle">Grow your business with our platform.</div>
  <div className="switch-small">Switch <Link to="/">User</Link> · <Link to="/food-partner/register">Food partner</Link></div>

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
          <Link className="switch-link" to="/food-partner/login">Already a partner? Sign in</Link>
        </div>
      </form>
    </div>
  );
}

export default FoodPartnerRegister;