import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>DEV@Deakin</h2>
      <div className="links">
        <Link to="/">Post Question</Link>
        <Link to="/articles">Post Article</Link>
        <Link to="/find">Find Posts</Link>
      </div>
    </nav>
  );
}
