import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

export default function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='text-xl bg-slate-500 items-center text-center grid gap-y-3 px-10 h-screen'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading ngabs...</div>}
      {blogs && <BlogList blogs={blogs} title='All blogs' />}
    </div>
  );
}
