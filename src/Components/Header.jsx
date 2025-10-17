import { useState } from 'react';
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;