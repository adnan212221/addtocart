import React from 'react'
// import { Route } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home  from './components/Home'
import Cart from './components/Cart'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  )
}

export default App