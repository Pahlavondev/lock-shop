import React from 'react'
import "./Count.scss"

function Count() {
  return (
    <div className="count">
        <div className="count__container">
            <ul className="count__list">
                <li className="count__item">
                    <div className="count__wrapper">
                        <h3 className="count__number">5,567</h3>
                        <p className="count__text">Счастливых клиентов</p>
                    </div>
                </li>

                <li className="count__item">
                    <div className="count__wrapper">
                        <h3 className="count__number">1245</h3>
                        <p className="count__text">Продуктов на выбор</p>
                    </div>
                </li>

                <li className="count__item">
                    <div className="count__wrapper">
                        <h3 className="count__number">372</h3>
                        <p className="count__text">Продаж в день</p>
                    </div>
                </li>

                <li className="count__item">
                    <div className="count__wrapper">
                        <h3 className="count__number">20</h3>
                        <p className="count__text">Лет на рынке</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Count