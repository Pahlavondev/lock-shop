import React from 'react'
import "./Contact.scss"

function Contact() {
  return (
    <div className="contact">
        <div className="contact__container">
            <div className="contact__inner">
                    <h2 className="contact__title">
                    Мы Вам перезвоним
                    </h2>

                    <p className="contact__text">
                    Если y вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.
                    </p>

                    <form className="contact__form">
                        <input className="contact__input" type="text" placeholder="Ваше имя" autoComplete="off" />

                        <input className="contact__input" type="email" placeholder="Ваш Email" autoComplete="off" />

                        <button className="contact__button">Отправить</button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Contact