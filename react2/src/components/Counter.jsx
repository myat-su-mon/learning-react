import React, {useState} from 'react'

function Counter({start, increaseCount, decreaseCount}) {
    const substract = () => {
        if (count > 0) {
            setCount(count-1);
        }
    }; 

  return (
    <div className='d-flex align-items-center border m-3 p-3 rounded'>
      <h1 className='me-auto mb-0'>Counter : {start}</h1>
      <button onClick={decreaseCount} className='btn btn-primary me-2'>-</button>
      <button onClick={increaseCount} className='btn btn-primary'>+</button>
    </div>
  )
}

export default Counter
