import React from 'react';
import { Triangle } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-900'>
      <Triangle
        height='60'
        width='60'
        color='#4fa94d'
        ariaLabel='triangle-loading'
        wrapperStyle={{}}
        wrapperClassName=''
        visible={true}
      />
    </div>
  );
}
