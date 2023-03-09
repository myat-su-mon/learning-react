import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const Test = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(true);
    
    useEffect(() => {
      console.log("useEffect run");

      return () => {
        console.log('unmounted');
      }
    },[name]);

  return (
    <div>
      <h1>Test - {count} </h1>
      <button onClick={()=> setCount(count+1)}>Click</button>

      <p>{name ? 'mg mg' : 'ag ag'}</p>
      <button onClick={()=>setName(!name)}>change</button>
    </div>
  )
}

export default Test
