import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Count from './components/count/Count'
import Service from './components/service/Service'
import Category from './components/category/Category'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Count />
      <Service />
      <Category />
    </>
  )
}

export default App