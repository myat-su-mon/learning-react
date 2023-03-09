import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Details from './pages/Details'
import Meals from './pages/Meals'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Meals/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App
