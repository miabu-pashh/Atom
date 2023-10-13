// TextOverlay.js
import React, { useState, useEffect } from "react";
import "./css/TextOverlay.css"; // Import the CSS for styling

function TextOverlay({ messages }) {
  const [visibleMessage, setVisibleMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      if (messageIndex < messages.length) {
        console.log("the set message is: ", messages[messageIndex]);
        setVisibleMessage(messages[messageIndex]);
        setMessageIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(messageTimer); // Clear the interval when all messages are displayed
      }
    }, 2000);
    console.log("the vibile message is : ", visibleMessage); // Clear the interval when the component unmounts

    return () => clearInterval(messageTimer);
  }, [messages, messageIndex]);
  return (
    <div className="text-overlay">
      <div className="message">{visibleMessage}</div>
    </div>
  );
}

export default TextOverlay;
