import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import Rent from './pages/Rent'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SigninPage from './pages/SigninPage'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Buy' element={<Buy />} />
        <Route path='/Sell' element={<Sell />} />
        <Route path='/Rent' element={<Rent />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/Signin' element={<SigninPage />} />
      </Routes>
      </BrowserRouter>
    </div>                                                                                                              
  )
}

export default App