import { Link } from "react-router-dom";
import logo from "../pic/iiSD_logo_only_Emblem.DHc3DEp8.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}

        <Link to="/" className="brand">

          <img
            src={logo}
            alt="logo"
            className="logo"
          />

          <div className="brand-text">

            <span className="brand-title">
              IISD
            </span>

            <span className="brand-sub">
              Smart Office
            </span>

          </div>

        </Link>

        {/* Menu */}

        <nav className="menu">

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </nav>

        {/* Button */}

        <Link
          to="/login"
          className="login-btn"
        >
          Sign In
        </Link>

      </div>

    </header>
  );
}