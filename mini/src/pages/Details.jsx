import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Details = () => {
  const location = useLocation();
  const meal = location.state.meal;

  return (
    <div className='container my-3'>
      <Link to='/'><button className='btn btn-danger'>Back</button></Link>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} width="200px" alt="meal thumb"/>
    </div>
  )
}

export default Details
