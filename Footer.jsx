import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }),
      });
      const text = await response.text();
      setMessage(text);
    } catch (error) {
      setMessage("Failed to send email. Try again.");
    }
  };

  return (
    <footer className="footer">
      <div className="newsletter">
        <strong>SIGN UP FOR OUR DAILY INSIDER</strong>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-content">
        <div className="column">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>

        <div className="column">
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="column">
          <h3>Stay connected</h3>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p>DEV@Deakin</p>
        <div className="links">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Code of Conduct</span>
        </div>
      </div>

      {message && <div className="response">{message}</div>}
    </footer>
  );
}

export default Footer;
