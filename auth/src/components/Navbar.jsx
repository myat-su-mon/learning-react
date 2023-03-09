import React from 'react';
import { FaShopify } from 'react-icons/fa';

const Navbar = ({logoutHandler}) => {
    const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <nav className='flex justify-between items-center p-3'>
        <div className='flex items-center'>
            <FaShopify className='text-xl text-violet-400'/>
            <h1 className='font-semibold tracking-wider'>MMS-Shop</h1>
            <p>{user.name}</p>
            <img src={user?.image} className="w-10 border p-1 rounded-full"/>
            <button onClick={logoutHandler} className='bg-gray-800 px-4 py-1 rounded shadow-md text-white'>Logout</button>
        </div>
    </nav>
  )
}

export default Navbar
