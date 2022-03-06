import React from "react";
import "./AboutCompany.css";
import aboutComp from "../../img/8e4d00_6c78c57b941e41dfb2735cb3c9b13b08 1.png"

function AboutCompany() {
  return (
    <div className="div-about-company">
      <h3 className="h" id="about-company">
        О компании
      </h3>
      <div className="about-company-content">
        <div className="about-company">
          <p className="about-company-p">
            Мы изготавливаем авторскую мебель на заказ в стиле лофт для дома и
            бизнеса. Мы работаем на рынках B2B и B2C. Мы не только продаем, но и
            сами проектируем и производим мебель от этапа отрисовки макета до
            доставки и монтажа готового изделия. Вся наша продукция
            изготавливается мелко-серийно либо по индивидуальным заказам.
          </p>

          <p className="about-company-p">
            Вы можете заказать изготовление мебели в стиле лофт любой сложности
            по:
          </p>
          <ul className="about-company-list">
            <li>
              <span>Дизайн проекту</span>
            </li>
            <li>
              <span>Фотографиям и картинкам</span>
            </li>
            <li>
              <span>Вашим эскизам и чертежам</span>
            </li>
          </ul>
        </div>
        <img
          className="about-company-img"
          src={aboutComp}
          alt=""
        />
      </div>
    </div>
  );
}

export default AboutCompany;
