import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h1 className="logotype">
          <span className="logo-span">MAX</span>LOFT
        </h1>
        <nav>
          <ul className="menu">
            <li className="menu-items">
              <a href="#about-company">О компании</a>
            </li>
            <li className="menu-items">
              <a href="#catalog">Каталог</a>
            </li>
            <li className="menu-items">
              <a href="#our-advantages">Приемущества</a>
            </li>
            <li className="menu-items">
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className="dontknow"></div>
      </div>
    </footer>
  );
}

export default Footer;
