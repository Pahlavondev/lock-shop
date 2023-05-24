import React from 'react'
import {Link} from "react-router-dom"
import footerLogo from "../../assets/footer-logo.svg"
import "./Footer.scss"
import {FaTwitter, FaFacebookF, FaWordpress} from "react-icons/fa"


function Footer() {
  return (
    <div className="footer">
        <div className="footer__container">
              <div className="footer__inner">
                <div className="footer__content">
                    <img className="footer__logo" src={footerLogo} alt="footer logo" />

                    <ul className="footer__contentList">
                        <li className="footer__contentItem">
                            <Link className="footer__contentLink" to="https://wordpress.com/website-builder/" target="_blank"> 
                                <FaWordpress />
                             </Link>
                        </li>

                        <li className="footer__contentItem">
                            <Link className="footer__contentLink" to="https://twitter.com/i/flow/login" target="_blank">
                                <FaTwitter />
                             </Link>
                        </li>

                        <li className="footer__contentItem">
                            <Link className="footer__contentLink" to="https://ru-ru.facebook.com/" target="_blank">
                                <FaFacebookF />
                             </Link>
                        </li>
                    </ul>
                </div>    

                <ul className="footer__list">
                    <li className="footer__item">   
                        <strong className="footer__strong">Навигация</strong>
                        <span>Главная</span>
                        <span>Каталог</span>
                        <span>Оптовая продажа</span>
                        <span>O нас</span>
                    </li>

                    <li className="footer__item">
                        <strong className="footer__strong">Наши контакты</strong>
                            <p className="footer__text">Телефоны</p>
                        <span>+7 (988) 565 00 38</span>
                        <span>+375 33 662 82 56</span>
                            <p className="footer__text">Email</p>
                        <span>vladpertcev@mail.ru</span>
                        <span>korobko416@gmail.com</span>
                    </li>

                    <li className="footer__item">
                        <strong className="footer__strong">Наш адрес</strong>
                        <span>Россия,</span>
                        <span>Ростов-на-Дону ул.</span>
                        <span>Богачева, 16</span>
                    </li>

                    <li className="footer__item">
                        <strong className="footer__strong">Информация</strong>
                        <span>Доставка и оплата</span>
                        <span>Гарантии</span>
                        <span>Возврат товара</span>
                    </li>
                </ul>
              </div>

              <p className="footer__bottomText">
              © 2021 Golden Soft All rights reserved.
              </p>  
        </div>
    </div>
  )
}

export default Footer