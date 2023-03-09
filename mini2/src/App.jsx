import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import AddCategory from './pages/dashboard/AddCategory';
import AddPost from './pages/dashboard/AddPost';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/Home';
import Test from './Test';

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='/dashboard/addcategory' element={<AddCategory/>}/>
          <Route path='/dashboard/addpost' element={<AddPost/>}/>
        </Route>
      </Routes> */}
      <h4>App</h4>
      <Test/>
    </>
  )
}

export default App
