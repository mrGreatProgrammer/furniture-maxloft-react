import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import { NavLink } from "react-router-dom";
import bricks from "../../img/kisspng-stone-wall-brick-clip-art-get-brick-texture-png-pictures-5ab138695d4222(Traced).svg";
import headerImg from "../../img/osobennosti-oformleniya-spalni-v-temnyh-tonah-7.png";

function Header() {
  return (
    <header>
      <div style={{ zIndex: 0 }}>
        <img className="bricks-img" src={bricks} alt="" />
        <img src={bricks} alt="" className="bricks-img-two" />
      </div>
      <div className="log">
        <h1 className="logotype">
          <span className="logo-span">MAX</span>LOFT
        </h1>
        <NavLink to="./popup">
          <button className="submit-ur-application one">Оставить заявку</button>
        </NavLink>
      </div>
      <Nav />

      <div className="content-header">
        <div className="toorder">
          <h3 className="header--h3">Мебель на заказ</h3>
          <p className="header-p first">
            Мебель в стиле лофт на заказ по доступным ценам
          </p>
          <NavLink to="./popup">
            <button className="submit-ur-application two">
              Оставить заявку
            </button>
          </NavLink>
        </div>
        <div className="header-img">
          <img className="header-img" src={headerImg} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
