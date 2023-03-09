import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Template from '../../components/Template'

const Dashboard = () => {
  return (
    <Template>
      <h1>Dashboard</h1>
      <div className="btn-group">
        <Link to='/dashboard/addcategory'>
            <button className='btn btn-primary'>add category</button>
        </Link>
        <Link to='/dashboard/addpost'>
            <button className='btn btn-secondary'>add post</button>
        </Link>
      </div>
      <div className='bg-primary my-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quos.
      </div>
      <div className='bg-secondary my-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi!
        <Outlet/>
      </div>
    </Template>
  )
}

export default Dashboard
