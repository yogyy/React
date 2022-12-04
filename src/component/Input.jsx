import { useEffect, useRef } from 'react';

const Input = ({ isFocused = false, type = 'text', ...props }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      {...props}
      className='p-4 transition duration-300 w-full h-8 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-300 border-slate-300 shadow-sm rounded-lg'
      type='text'
    />
  );
};

export default Input;
