import React from 'react'
import "./Category.scss"
import category1 from "../../assets/category1.png"
import category2 from "../../assets/category2.png"
import category3 from "../../assets/category3.png"
import category4 from "../../assets/category4.png"


function Category() {
  return (
    <div className="category">
        <div className="category__container">
            <h2 className="category__title">Категории</h2>

            <ul className="category__list">
                <li className="category__item">
                    <div className="category__wrapper">
                        <div className="category__content">
                        <h3 className="category__text">Для отелей</h3>
                        <button className="category__button">Перейти</button>
                        </div>

                        <img className="category__image" src={category1} alt="Для отелей" />
                    </div>
                </li>

                <li className="category__item">
                    <div className="category__wrapper">
                        <div className="category__content">
                        <h3 className="category__text">Для шкафчиков</h3>
                        <button className="category__button">Перейти</button>
                        </div>

                        <img className="category__image" src={category2} alt="Для шкафчиков" />
                    </div>
                </li>

                <li className="category__item">
                    <div className="category__wrapper">
                        <div className="category__content">
                        <h3 className="category__text">Для офисов</h3>
                        <button className="category__button">Перейти</button>
                        </div>

                        <img className="category__image" src={category3} alt="Для офисов" />
                    </div>
                </li>

                <li className="category__item">
                    <div className="category__wrapper">
                        <div className="category__content">
                        <h3 className="category__text">Замки для дома</h3>
                        <button className="category__button">Перейти</button>
                        </div>

                        <img className="category__image" src={category4} alt="Замки для дома" />
                    </div>
                </li>
            </ul>

            <button className="category__commonButton">Bce категории</button>
        </div> 
    </div>
  )
}

export default Category