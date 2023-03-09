import React from 'react'
import Card from '../components/Card'
import { meals } from '../data'

const Meals = () => {
  return (
    <div className='container my-3'>
      <button className='btn btn-primary'>Meals</button>
      <div className='d-flex flex-wrap gap-3 my-3'>
        {meals.map(meal => <Card key={meal.idMeal} meal={meal}/>)}
      </div>
    </div>
  )
}

export default Meals
