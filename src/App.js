import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Count from './components/count/Count'
import Service from './components/service/Service'
import Category from './components/category/Category'
import Product from './components/product/Product'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Count />
      <Service />
      <Category />
      <Product />
      <Contact />
      <Footer />
 </>
  )
}

export default App