import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "../styles/App.css";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/home");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="page-layout">
      <div className="form-box">
        {/* Login link in top-right corner for consistency */}
        <div className="signup-link">
          <Link to="/signup">Sign up</Link>
        </div>

        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Your password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
