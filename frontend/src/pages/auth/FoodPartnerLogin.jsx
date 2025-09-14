import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


 const FoodPartnerLogin = function () {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;

      const response = await axios.post("http://localhost:3000/api/auth/food-partner/login",{
        email,
        password
      },{withCredentials: true})

      console.log(response.data)

      navigate("/create-food");
    }
  return (
    <div className="page-container">
  <form className="form-box" autoComplete="off" onSubmit={handleSubmit}>
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
