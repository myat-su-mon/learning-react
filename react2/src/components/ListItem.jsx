import React from 'react'
import StatusBar from './StatusBar';

const ListItem = ({list, updateCheck, deleteList}) => {
  const x = list.isDone? "text-decoration-line-through" : ""; 
  return (
    <li className='list-group-item'>
      <div className='d-flex align-items-center'>
        <input onChange={()=>updateCheck(list,id)} type="checkbox" checked={list.isDone} className='form-check-input me-2' />
        <span className={`${x} fw-bold`}>{list.text}</span>
        <button onClick={deleteList} className='btn btn-danger btn-sm ms-auto'>del</button>
      </div>
    </li>
  )
}

export default ListItem
