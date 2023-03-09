import React, {useRef} from 'react';

const Input = ({createList}) => {
    const inputText = useRef();
    const showAlert = () => createList(inputText.current.value);

    // select input => document.getElementById('dds');
    // input.value
    // event listen -> alert('hello')
  return (
    <div className='row g-3'>
      <div className='col-8'>
        <input ref={inputText} type="text" className='form-control'/>
      </div>
      <div className='col-4'>
        <button onClick={showAlert} className='btn btn-primary w-25'>Add</button>
      </div>
    </div>
  )
}

export default Input
