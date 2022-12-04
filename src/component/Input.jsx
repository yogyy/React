export default function Input({ type = 'text', ...props }) {
  return (
    <input
      {...props}
      className='transition duration-300 w-full h-8 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-300 border-slate-300 shadow-sm rounded-lg'
      type='text'
    />
  );
}
