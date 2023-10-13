import React from "react";
import "./css/DoctorLogin.css"; // Import your CSS file for styling

const DoctorLogin = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="login-image">
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/58/30/24/1000_F_258302473_TN25oZ5Dt9MYHPEr5vAD62cUgRBSwNAG.jpg" // Replace with your image URL
          alt="Login Image"
        />
      </div>
    </div>
  );
};

export default DoctorLogin;
