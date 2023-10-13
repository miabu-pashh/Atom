import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import HomePage from "./HomePage";
import UserLogin from "./UserLogin";
// Import your Login component
import GetStarted from "./GetStarted";
import Register from "./Register";
import DoctorLogin from "./DoctorLogin";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        {/* Use 'element' instead of 'component' */}
        <Route path="/login" element={<UserLogin />} />{" "}
        <Route path="/getStarted" element={<GetStarted />} />{" "}
        {/* Use 'element' instead of 'component' */}
        <Route path="/Register" element={<Register />} />{" "}
        <Route path="/DoctorLogin" element={<DoctorLogin />} />{" "}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
