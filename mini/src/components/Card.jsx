import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className='card col-3'>
  <img src={meal.strMealThumb} className='card-img-top' alt="..."/>
  <div className='card-body'>
    <h5 className='card-title'>{meal.strMeal}</h5>
    <Link to={`/details/${meal.idMeal}`} state={{meal}}>
        <button className='btn btn-primary'>Details</button>
    </Link>
  </div>
</div>
  )
}

export default Card