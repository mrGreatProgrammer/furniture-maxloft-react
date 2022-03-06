import React from "react";
import "./Catalog.css";
import rackOne from "../../img/catalog/waco_9 1.png";
import rackTwo from "../../img/catalog/011 1.png";
import rackThree from "../../img/catalog/interio-kupe_04ps 1.png";
import rackFour from "../../img/catalog/мебель-лофт-тверь-lofttfol 1.png";
import rackFive from "../../img/catalog/af24b2fd2665958e9b0305059ahd--dlya-doma-i-interera-veshalka-dlya-odezhdy-magnum1.png";
import rackSix from "../../img/catalog/7cf49f0019361bf14147d64a81hc--dlya-doma-i-interera-loft-stellazh-iz-massiva-i-vodoprovodnyh 1.png";
import rackSeven from "../../img/catalog/51a09eda544ffcdb5dfe0fee16jm--dlya-doma-i-interera-barnaya-stojka-v-stile-loft 1.png";
import rack from "../../img/catalog/3(1)1.png";
import { NavLink } from "react-router-dom";

function Catalog() {
  return (
    <div className="div-catalog">
      <h3 className="h" id="catalog">
        Каталог продукции
      </h3>
      <h4 className="furniture_for_home--h4">
        Мебель для <span className="furniture_for--span">ДОМА</span>
      </h4>
      <p className="comfortable_home--p">Привнести в свой дом уют и комфорт</p>
      <div className="the-catalog">
        <div className="acatalog">
          {/* <!-- <div className="shadow-img"> --> */}
          <img className="catalog-img" src={rackOne} alt="" />
          {/* <!-- </div> --> */}
          <p className="catalog-name">Стелажи</p>
        </div>
        <div className="acatalog">
          {/* <!-- <div className="shadow-img"> --> */}
          <img className="catalog-img" src={rackTwo} alt="" />
          {/* <!-- </div> --> */}
          <p className="catalog-name">Стелажи</p>
        </div>
        <div className="acatalog">
          {/* <!-- <div className="shadow-img"> --> */}
          <img className="catalog-img" src={rackThree} alt="" />
          {/* <!-- </div> --> */}
          <p className="catalog-name">Стелажи</p>
        </div>
      </div>
      <div className="btn-catalog">
        <NavLink to='/furniture'>
          <button className="submit-ur-application">Подробнее</button>
        </NavLink>
      </div>
      <h4 className="furniture_for_business--h4">
        Мебель для <span className="furniture_for--span">БИЗНЕСА</span>
      </h4>
      <p className="comfortable_home--p">Создайте интерьер, в который</p>
      <p className="comfortable_home--p">
        Вашим клиентам будет приятно возвращаться
      </p>
      <div className="the-catalog">
        <div className="acatalog">
          {/* <!-- <div className="shadow-img"> --> */}
          <img className="catalog-img" src={rack} alt="" />
          {/* <!-- </div> --> */}
          <p className="catalog-name">Стелажи</p>
        </div>
        <div className="acatalog">
          {/* <!-- <div className="shadow-img"> --> */}
          <img className="catalog-img" src={rackFour} alt="" />
          {/* <!-- </div> --> */}
          <p className="catalog-name">Столы</p>
        </div>
        <div className="acatalog">
          {/* <!-- <div className="shadow-img"> --> */}
          <img className="catalog-img" src={rackFive} alt="" />
          {/* <!-- </div> --> */}
          <p className="catalog-name">Вешалки</p>
        </div>
        <div className="acatalog">
          {/* <!-- <div className="shadow-img"> --> */}
          <img className="catalog-img" src={rackSix} alt="" />
          {/* <!-- </div> --> */}
          <p className="catalog-name">Полки</p>
        </div>
        <div className="acatalog">
          {/* <!-- <div className="shadow-img"> --> */}
          <img className="catalog-img" src={rackSeven} alt="" />
          {/* <!-- </div> --> */}
          <p className="catalog-name">Бары</p>
        </div>
      </div>
      <div className="btn-catalog">
        <button className="submit-ur-application">Подробнее</button>
      </div>
    </div>
  );
}

export default Catalog;
