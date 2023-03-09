import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Detail = () => {
    // const {id} = useParams();
    const location = useLocation();
    const post = location.state.post;

    console.log(location);

  return (
    <>
        <h1>Detail</h1>
        <h2>{post.title}</h2>
    </>
  )
}

export default Detail