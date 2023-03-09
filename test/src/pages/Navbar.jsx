import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">home</NavLink> |
        <NavLink to="/about">about</NavLink> |
        <NavLink to="/contact">contact</NavLink> |
        <NavLink to="/posts">posts</NavLink> |
    </nav>
  )
}

export default Navbar