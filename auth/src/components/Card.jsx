import React from 'react';
import {ImCoinDollar} from 'react-icons/im';
const Card = ({product}) => {
    const {id, title, description, image, price, category} = product;
  return (
    <div className='relative w-72 border flex flex-col gap-5 p-5 rounded'>
        <img src={image} className="h-44 mx-auto" />
        <h1 className='text-xl text-violet-400 font-bold'>{title?.substring(0,20)}</h1>
        <p className='text-sm text-gray-500'>{description?.substring(0,15)}</p>
        <div className='flex items-center gap-1'><ImCoinDollar className='text-xl text-violet-400 '/><p className='text-primary'>{price}</p></div>
        <p className='absolute top-3 left-[-10px] px-2 bg-violet-400 shadow-md rounded'>{category}</p>
        <button className='text-white bg-violet-400 py-2 rounded shadow-sm'>Add To Cart</button>
    </div>
  )
}

export default Card