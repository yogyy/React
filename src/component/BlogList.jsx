import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({ blogs, title }) => {
  return (
    <div className='flex flex-col h-4/5'>
      <div className=''>
        <h2>{title}</h2>
        <br />
        {blogs.map((blog) => (
          <div className=' justify-center items-center' key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2 className='font-bold'>{blog.title}</h2>
              <p>summary : {blog.body}</p>
              <p className='font-mono italic'>written by {blog.author}</p>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList
