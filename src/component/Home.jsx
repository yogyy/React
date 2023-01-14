import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
import Loader from './Loader';

export default function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='text-xl bg-slate-500  h-5/6'>
      <div className='justify-center'>
        {error && <div>{error}</div>}
        {isPending && <Loader />}
        {blogs && <BlogList blogs={blogs} title='All blogs nih' />}
      </div>
    </div>
  );
}
