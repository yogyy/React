import { useState } from 'react';

export default function PlaceContentCenter({ children }) {
  const [name, setName] = useState();
  return (
    <div className='bg-black'>
      <div className='bg-slate-800 text-black min-h-screen flex items-center justify-center antialiased tracking-tighter'>
        <div className='max-w-xl w-full'>{children}</div>
      </div>
    </div>
  );
}
