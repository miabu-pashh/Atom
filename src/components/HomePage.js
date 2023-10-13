import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ChatBot.css";
import { Route, useHistory } from "react-router-dom";

import NavBar from "./NavBar";
import ImageCarousel from "./ImageCarousel";
import "./css/ImageCarousel.css"; // Import the CSS for the carousel
import "./css/TextOverlay.css"; // Import the CSS for the overlay

const HomePage = () => {
  const images = [
    "https://www.uchicagomedicine.org/-/media/images/ucmc/forefront/channel-pages/heart-and-vascular/universal/stock-doctor-with-patient-hero.jpg?h=385&as=1&hash=5F385370ACFD49AC72751A579B8340B7",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeKHOQnL8B4iPMT4-fR5CG1fxIPN1nQEF4A&usqp=CAU",
    "https://www.cdc.gov/drugoverdose/featured-topics/images/doctor-patient.jpg",
    "https://www.usnews.com/object/image/00000169-7d49-d24f-a37f-fdcfd61a0001/190314-olderpatientdoctortalking-stock.jpg?update-time=1552656670710&size=responsive640",
    // Add more image URLs as needed
  ];

  const interval = 3000;

  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Show the overlay after a delay (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const divStyle = {
    backgroundImage:
      'url("https://findado.osteopathic.org/wp-content/uploads/2021/08/GettyImages-1214206519.jpg")', // Replace with your image URL
    backgroundSize: "cover",
    height: "100vh",
    marginTop: 0,
  };
  const centerDivStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10%",
    width: "50%",
    margin: "auto",

    height: "100vh", // Makes the container take up the full viewport height
  };

  const buttonStyle = {
    backgroundColor: "green", // Customize the button styles
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline - block",
  };
  const linkStyle = {
    textDecoration: "none", // Remove the underline from the link
  };

  return (
    // <div className="home-page" style={divStyle}>
    <div style={divStyle}>
      {/* <NavBar /> */}
      <div style={centerDivStyle}>
        <Link to="/getStarted" style={linkStyle}>
          <button style={buttonStyle}>GET STARTED</button>
        </Link>
        <br></br>
        <Link to="/DoctorLogin" style={linkStyle}>
          <button style={buttonStyle}>DOCTOR LOGIN</button>
        </Link>
      </div>

      {/* <div><ImageCarousel images={images} interval={interval} /></div> */}
    </div>
  );
};

export default HomePage;
