import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">DEV@Deakin</div>

      <div className="nav-center">
        <input className="search-bar" type="text" placeholder="Search..." />
      </div>

      <div className="nav-right">
        <Link to="/home">Post</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
