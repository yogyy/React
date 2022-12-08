import React from 'react';

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2 className='font-bold'>{blog.title}</h2>
          <p className='font-mono italic'>written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
