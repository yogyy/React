export default function Card({ children }) {
  return (
    <div className='shadow rounded-lg overflow-hidden bg-slate-600'>
      {children}
    </div>
  );
}

function Title({ children }) {
  return (
    <div className=' border-b p-4'>
      <h1 className='text-xl'>{children}</h1>
    </div>
  );
}

function Body({ children }) {
  return <div className='leading-relaxed p-4'>{children}</div>;
}
function Footer({ children }) {
  return <div className='bg-slate-500 p-4 font-semibold'>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;
