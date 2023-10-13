// ImageCarousel.js
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory
import UserLogin from "./UserLogin";
import { Link } from "react-router-dom";
import GetStarted from "./GetStarted";

const ImageCarousel = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className="image-carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Image ${index}`} />
          <Link to="/getStarted">
            <button>GET STARTED</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
