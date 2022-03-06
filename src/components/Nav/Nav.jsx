import React from "react";
import './Nav.css'

function Nav() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu-items">
          <a className="menu-link" href="#about-company">
            О компании
          </a>
        </li>
        <li className="menu-items">
          <a className="menu-link" href="#catalog">
            Каталог
          </a>
        </li>
        <li className="menu-items">
          <a className="menu-link" href="#our-advantages">
            Приемущества
          </a>
        </li>
        <li className="menu-items">
          <a className="menu-link" href="#contacts">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
