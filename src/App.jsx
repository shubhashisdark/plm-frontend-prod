import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import SigninPage from './pages/SigninPage.jsx'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Signin' element={<SigninPage />} />
      </Routes>
      </BrowserRouter>
    </div>                                                                                                              
  )
}

export default App