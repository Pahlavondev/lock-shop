import React from "react";
import "./Product.scss";
import Card from "../product/card/Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const scrollLeft = () => {
  document.getElementById("content").scrollLeft -= 400;
};

const scrollRight = () => {
  document.getElementById("content").scrollLeft += 400;
};

function Product() {
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__inner">
          <h2 className="product__title">Наши популярные продукты</h2>

          <div className="product__buttons">
            <button onClick={scrollLeft} className="product__button">
              <FiChevronLeft />
            </button>

            <button onClick={scrollRight} className="product__button">
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div id="content" className="carousel">
          <div className="carousel__item">
            <Card />
          </div>

          <div className="carousel__item">
            <Card />
          </div>

          <div className="carousel__item">
            <Card />
          </div>

          <div className="carousel__item">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
