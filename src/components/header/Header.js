import React from "react"
import logo from "../../assets/logo.svg"
import down from '../../assets/down.svg'
import phoneCall from '../../assets/phone-call.svg'
import like from "../../assets/vector.svg"
import basket from "../../assets/frame.svg"
import { Link } from "react-router-dom"

import "./Header.scss"

function Header() {
  return (
    <div className="header">
    <div className="header__container">
        <div className="header__inner">
            <Link className="header__logo" to="/">
                <img className="header__image" src={logo} alt="logo" />
            </Link>

            <div className="header__content">
                <ul className="header__list">
                    <li className="header__item">
                        <Link className="header__link" to="/">
                        Главная
                        </Link>
                    </li>


                    <li className="header__item">
                        <Link className="header__link header__link--content" to="/">
                        Каталог 
                        <img className="header__linkImage" src={down} alt="down" />
                        </Link>
                    </li>


                    <li className="header__item"> 
                        <Link className="header__link" to="/">
                        Оптовая продажа
                        </Link>
                    </li>

                    <li className="header__item">
                        <Link className="header__link" to="/">
                        O нас
                        </Link>
                    </li>

                </ul>
            </div>

        </div>
    
        <div className="header__contact">
            <div className="header__wrapper">
            <img className="header__imageContact" src={phoneCall} alt="phone-call" />
            <span className="header__phoneNumber">+7 (966) 55 88 499</span>
            </div>

            <div className="header__add">
                <div className="header__like">
                    <img src={like} alt="like" />
                </div>

                <div className="header__basket">
                    <img src={basket} alt="basket" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header