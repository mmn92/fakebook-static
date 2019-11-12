import React from "react";
import "../styles/Header.css";

import profileIcon from '../assets/profile-icon.png';

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#">
        faKebook
      </a>
      <nav className="profile">
        <a className="profile-link" href="#">
          Meu perfil
        </a>
        <img className="profile-icon" src={profileIcon} alt="profile icon" />
      </nav>
    </header>
  );
}

export default Header;
