import React from 'react'
import Carousel from "react-material-ui-carousel";
import home from "../../assets/home-cart.png"
import "./Home.scss"

function Home() {

    let items = [
        {
          name: "Golden Soft",
          text:"Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.",
          subtitle:"Подходит для установки на деревянную/межкомнатную дверь.",
          image: home,
        },
    
        {
          name: "House Soft",
          text:"Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.",
          subtitle:"Подходит для установки на деревянную/межкомнатную дверь.",
          image: home,
        },

        {
            name: "Home Soft",
            text:"Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.",
            subtitle:"Подходит для установки на деревянную/межкомнатную дверь.",
            image: home,
          },
  

      ];
    
      return (
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      );
    }

    function Item ({item}) {
        return (
            <div className="home">
            <div className="home__container">
                <div className="home__img">
                    <img className="home__image" src={item.image} alt="lock" />
                </div>
        
                <div className="home__content">
                    <h1 className="home__title"> {item.name} <br /> GS-200Z-5 для офиса</h1>
                    <p className="home__text"> {item.text} </p>
                    <p className="home__subtitle"> {item.subtitle} </p>
        
                    <div className="home__wrapper">
                        <span className="home__money">Цена</span>
                        <p className="home__moneytext"> <strong className="home__strong">33 000₽</strong>
                         <del className="home__del">37 000₽</del> </p>
                    </div>  
        
                    <button className="home__button">Добавить в корзину</button>
                </div>
            </div>
            </div>
          )
    }


export default Home