import React from 'react'
import "./Card.scss"

import product1 from "../../../assets/product1.png"
import product2 from "../../../assets/product2.png"
import product3 from "../../../assets/product3.png"
import product4 from "../../../assets/product4.png"

import sign from "../../../assets/sign.svg"

function Card() {
  return (
    <div className="card">
       <ul className="card__list">
        <li className="card__item">
        <div className="card__inner">
          <div className="card__content">
            <p className="card__cash">
              <img className="card__img" src={sign} alt="sign" />
             <span className="card__span"> B наличии </span>
            </p>

            <p className="card__sale">
            SALE
            </p>
          </div>

          <img className="card__image" src={product1} alt="Дверной Замок Golden Soft для отеля" />
        </div>

        <div className="card__wrapper">
          <p className="card__text">Дверной Замок Golden Soft для отеля</p>

          <p className="card__money">
            <strong className="card__strong">33 000₽</strong>
            <del className="card__del">37 000₽</del>  
          </p>
        </div>
        </li>

        <li className="card__item">
        <div className="card__inner">
          <div className="card__content">
            <p className="card__cash">
              <img className="card__img" src={sign} alt="sign" />
              <span className="card__span"> B наличии </span>
            </p>

            <p className="card__sale">
            SALE
            </p>
          </div>

          <img className="card__image" src={product2} alt="Дверной Замок Golden Soft для отеля" />
        </div>

        <div className="card__wrapper">
          <p className="card__text">Вариативный замок Golden Soft для отеля</p>

          <p className="card__money">
            <strong className="card__strong">7 000₽</strong>
            <del className="card__del">8 000₽</del>
          </p>
        </div>
        </li>

        <li className="card__item">
        <div className="card__inner">
          <div className="card__content">
            <p className="card__cash">
              <img className="card__img" src={sign} alt="sign" />
              <span className="card__span"> B наличии </span>
            </p>

            <p className="card__sale">
            SALE
            </p>
          </div>

          <img className="card__image" src={product3} alt="Дверной Замок Golden Soft для офиса" />
        </div>

        <div className="card__wrapper">
          <p className="card__text">Вариативный замок Golden Soft для отеля</p>

          <p className="card__money">
            <strong className="card__strong">33 000₽</strong>
            <del className="card__del">39 000₽</del>
          </p>
        </div>
        </li>

        <li className="card__item">
        <div className="card__inner">
          <div className="card__content">
            <p className="card__cash">
              <img className="card__img" src={sign} alt="sign" />
              <span className="card__span"> B наличии </span>
            </p>

            <p className="card__sale">
            SALE
            </p>
          </div>

          <img className="card__image" src={product4} alt="Дверной Замок Golden Soft для офиса" />
        </div>

        <div className="card__wrapper">
          <p className="card__text">Вариативный замок Golden Soft для отеля</p>

          <p className="card__money">
            <strong className="card__strong">9 000₽</strong>
            <del className="card__del">12 000₽</del>
          </p>
        </div>
        </li>
       </ul>
    </div>
  )
}

export default Card