import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ResturantMenu from './pages/ResturantMenu'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Error from './components/Error'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div className='flex min-h-screen w-screen flex-col justify-between'>
      {/* Navbar */}
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/> 
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>

    
         <Route path='restaurant/:resId' element={<ResturantMenu/>}/>
         <Route path='/cart' element={<Cart/>}/>
      
        {/* 404 Page */}
        <Route path='*' element={<Error/>}/>
      </Routes>
      
      
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App
