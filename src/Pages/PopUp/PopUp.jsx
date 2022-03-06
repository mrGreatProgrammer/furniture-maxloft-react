import React from 'react'
import './PopUp.css'
import bricks from '../../img/kisspng-stone-wall-brick-clip-art-get-brick-texture-png-pictures-5ab138695d4222(Traced).svg'


function PopUp() {
  return (
    <div className="popup">
        <div className="left">
            <div>
                <img className="popup--bricks-img"
                    src={bricks}
                    alt="" />
            </div>
            <h1 className="logotype"><span className="logo-span">MAX</span>LOFT</h1>
            <p className="the-addr">Республика Казахстан, г. Нур-Султан,

                Ул. Жубанова 34/1</p>
        </div>
        <div className="right">
            <h3 className='pop__up--h3'><span className="logo-span">Заполните форму
                </span></h3>
            <h3 className='pop__up--h3 dark'>и мы свяжемся с вами</h3>
            <div className="fill-form">
                <form action="../thanks-popup/thanks-popup.html">
                    <p><input type="text" name="" id="u-name" placeholder="Ваше имя" required /></p>
                    <p><input type="text" name="" id="u-phone" placeholder="Ваш телефон" required /></p>
                    <p><input type="text" name="" id="u-e-mail" placeholder="E-mail" required /></p>
                    <p><textarea name="" id="u-comment" cols="30" rows="10" placeholder="Комментарий" required></textarea></p>
                    <input type="checkbox" name="agreement" id="agreement" /><label for="agreement">Я согласен с политикой
                        конфиденциальности</label>
                    <div className="div-btn">
                        <p><button className="popup--submit-ur-application"><a href="../thanks-popup/thanks-popup.html">Оставить заявку</a></button></p>
                    </div>
                </form>
            </div>
            <div className="insta">
                <img src="./instagramm.png" alt="instagramm" /> <span className='dark'>iloftkz</span>
            </div>
            <div className="contacts dark">email:  iloftkz2021@gmail.com  |  тел: +7 (707) 889-98-50    WhatsApp: +7 (707) 889-98-50</div>
        </div>
    </div>
  )
}

export default PopUp