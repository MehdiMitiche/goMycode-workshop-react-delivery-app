import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-item logo">LOGO</div>
      <div className="nav-item">Request Delivery</div>
      <div className="nav-item">My Requests</div>
    </div>
  );
};

export default Navbar;
