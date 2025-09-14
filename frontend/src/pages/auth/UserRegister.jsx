import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


 const UserRegister = function () {

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      const response = await axios.post("http://localhost:3000/api/auth/user/register",{
        fullName: name,
        email,
        password
      },{
        withCredentials: true
      })

      console.log(response.data);

      navigate("/")

    };

  return (
    <div className="page-container">
  <form className="form-box" autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-title">User Register</div>
        <div className="subtitle">Create your personal account.</div>
  <div className="switch-small">Switch <Link to="/">User</Link> · <Link to="/food-partner/register">Food partner</Link></div>
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
          <Link className="switch-link" to="/user/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
}

export default UserRegister;