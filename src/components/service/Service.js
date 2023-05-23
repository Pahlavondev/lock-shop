import React from 'react'
import "./Service.scss"

import service1 from "../../assets/service1.svg"
import service2 from "../../assets/service2.svg"
import service3 from "../../assets/service3.svg"

function Service() {
  return (
    <div className="service">
    <div className="service__container">
        <h2 className="service__title">Почему GoldenService?</h2>
         
            <ul className="service__list">
                <li className="service__item">
                    <div className="service__wrapper">
                        <img className="service__image" src={service1} alt="service" />
                        <p className="service__text">Возврат удвоенной стоимости каждого замка в случае брака.</p>
                    </div>
                </li>

                <li className="service__item">
                    <div className="service__wrapper">
                        <img className="service__image" src={service2} alt="service" />
                        <p className="service__text">Наносим ваш логотип компании на наш продукт</p>
                    </div>
                </li>

                <li className="service__item">
                    <div className="service__wrapper">
                        <img className="service__image" src={service3} alt="service" />
                        <p className="service__text">Возврат удвоенной стоимости каждого замка в случае брака.</p>
                    </div>
                </li>
            </ul>
    </div>
    </div>
  )
}

export default Service