import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import './App.css'
import Posts from './pages/Posts'
import Detail from './pages/Detail'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/posts/:id/:para' element={<Detail/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>
    </>
  )
}

export default App
