import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  }

  return (
    <div className='container mx-auto'>
      <Navbar logoutHandler={logoutHandler}/>
      <Products/>
    </div>
  )
}

export default Dashboard
