import React from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
    const posts = [
        {id: 1, title: "post one title"},
        {id: 2, title: "post two title"},
        {id: 3, title: "post three title"},
        {id: 4, title: "post four title"},
        {id: 5, title: "post five title"},
    ]

  return (
    <>
    <h1>Posts</h1>
    { posts.map(post=>(
        <div key={post.id}>
            <h1>{post.title}</h1>
            <Link to={`/posts/${post.id}/para`} state={{post}}>
                <button>detail</button>
            </Link>
        </div>
    )) }
    </>
  )
}

export default Posts