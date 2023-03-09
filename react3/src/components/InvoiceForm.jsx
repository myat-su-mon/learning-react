import React from 'react'
import { useRef } from 'react'

const InvoiceForm = ({items, addList}) => {
    const formRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);

        addList(formData.get('item_id'), parseInt(formData.get('quantity')));
        formData.current.reset();
    };

  return (
    <div className='border rounded p-3'>
        <form ref={formRef} id='create'></form>
        <div className='row g-3'>
            <div className="col-12 col-md-4">
                <label htmlFor='' className='form-label'>Select Item</label>
                <select name='' id='' form='create' className='form-select'>
                    {items.map( item => {
                        <option key={item.id} value={item.id}>{item.name}</option>
                    })}
                </select>
            </div>
            <div className="col-12 col-md-4">
                <label htmlFor='' className='form-label'>Quantity</label>
                <input type="number" name="" id="" form='create' className='form-control' required/>
            </div>
            <div className="col-12 col-md-4">
                <button form='create' className='btn btn-lg w-100 h-100 btn-primary'>Add Item</button>
            </div>
        </div>
    </div>
  )
}

export default InvoiceForm
