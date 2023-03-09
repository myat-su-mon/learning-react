import React, {useState} from 'react'

function ShowName() {
    const [show, setShow] = useState(false);

  return (
    <>
      {show && <h1>Hello World</h1>}
      <button onClick={()=>setShow(!show)} className='btn btn-primary'>
        {show ? "Hide" : " Show"} My Name
      </button>
    </>
  )
}

export default ShowName
