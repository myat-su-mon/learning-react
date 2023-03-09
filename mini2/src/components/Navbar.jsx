import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
  <div className='container-fluid'>
    <NavLink className='navbar-brand'>Template</NavLink>
    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
      <div className='navbar-nav'>
        <NavLink to='/' className='nav-link' aria-current='page'>Home</NavLink>
        <NavLink to='/about' className='nav-link'>About</NavLink>
        <NavLink to='/contact' className='nav-link'>Contact</NavLink>
        <NavLink to='/dashboard' className='nav-link'>Dashboard</NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
