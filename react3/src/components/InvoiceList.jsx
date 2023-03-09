import React from 'react'

const InvoiceList = ({lists, increaseList, decreaseList}) => {
  return (
    <>
      {lists.length > 0 && (
          <table className='table'>
            <thead>
              <tr>
                <th>Item</th>
                <th className='text-end'>Price</th>
                <th className='text-end'>Quantity</th>
                <th className='text-end'>Cost</th>
              </tr>
            </thead>
            <tbody>
              {lists.map(list => {
                <tr className='align-middle' key={list.id}>
                  <td>{list.item.name}</td>
                  <td className='text-end'>{list.item.price}</td>
                  <button className='btn btn-sm btn-outline-primary' onClick={decreaseList.bind(null, list.id)}><i className='bi bi-dash'></i></button>
                  <td><span className='d-inline-block w-25 px-2'>{list.quantity}</span></td>
                  <button className='btn btn-sm btn-outline-primary' onClick={increaseList.bind(null, list.id)}><i className='bi bi-plus'></i></button>
                  <td className='text-end'>{list.cost}</td>
                </tr>
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className='text-center'>Total</td>
                <td className='text-end'>{lists.reduce((pv, cv) =>  pv + cv.cost , 0)}</td>
              </tr>
            </tfoot>
          </table>
      )}
    </>
  )
}

export default InvoiceList
