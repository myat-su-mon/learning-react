import React, { useState } from 'react'
import productLists from '../data'
import NavBar from './NavBar'
import ProductCard from './ProductCard';

const Shop = () => {
    const [products, setProduct] = useState(productLists);
    const [cart, setCart] = useState([
        {
            id: Date.now(),
            
        }
    ])
  return (
    <div className=''>
        <div className='container'>
            <div className='row g-3'>
                <div className='col-12'>
                    <NavBar/>
                </div>
                {productLists.map(product => {
                    <div className='col-6 col-md-4 col-xl-3'>
                        <ProductCard product={product}/>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Shop