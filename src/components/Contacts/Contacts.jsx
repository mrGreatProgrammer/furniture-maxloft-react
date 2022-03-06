import React from "react";
import './Contacts.css'

function Contacts() {
  return (
    <div className="contacts-div">
      <h3 className="h" id="contacts">
        Контакты
      </h3>
      <div className="contacts-content">
        <div className="contacts-content-txt">
          <h5>Адрес:</h5>
          <p>г.Нур-Султан, Ул.Жубанова 34/1</p>
          <p>900800870</p>
          <h5>Телефон:</h5>
          <p>+7 (707) 889-98-50</p>
          <h5>WhatsApp:</h5>
          <p>+7 (707) 889-98-50</p>
          <h5>E-mail:</h5>
          <p>iloftkz2021@gmail.com</p>
          <h5>instagram:</h5>
          <p>iloftkz</p>
        </div>
        <div className="contacts-content-map">
          {/* <img src="./img/Скриншот 15-11-2021 20_10_12 1.png" alt="" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49914.55129951703!2d68.7603712!3d38.5646592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d137ef4b1a19%3A0x324897f0015c7078!2z0KHQsNC00LHQsNGA0LM!5e0!3m2!1sru!2s!4v1639061088605!5m2!1sru!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
