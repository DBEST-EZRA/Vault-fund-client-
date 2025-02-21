import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="containerB">
      <nav className="navbar">
        <div className="navbar-logo">Vibrant Water Drilling</div>
        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className={`menu-icon ${isOpen ? "open" : ""}`}>
            {isOpen ? "✖" : "☰"}
          </span>
        </button>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="track-progress">Track Progress</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
