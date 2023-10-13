import React, { useState } from "react";
import "./css/NavBar.css"; // Import the CSS for styling
import UserLogin from "./UserLogin";

function NavBar() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="/medical-insurance.png"
          alt="Logo"
          style={{ height: "60px", width: "60px" }}
        />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
      </ul>

      {showLogin && (
        <div className="login-modal">
          <UserLogin onClose={handleCloseLogin} />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
