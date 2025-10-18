import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">DEV@Deakin</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Questions</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">Tutorials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
