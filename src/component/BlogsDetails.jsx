import { useNavigate, useParams } from 'react-router-dom';
import Button from './Button';
import Loader from './Loader';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);

  const navigate = useNavigate();

  const handleDlt = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      {isPending && <Loader />}
      {error && <div>{error}</div>}
      {blog && (
        <div className='w-full bg-slate-500 flex place-content-center'>
          <article className='text-xl  items-center text-center flex justify-center flex-col px-10 gap-6 h-screen w-4/5'>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p>Writen by {blog.author}</p>
            <Button onClick={handleDlt} text='delete' />
            {/* <button className='rounded shadow p-2 bg-white'>hapus</button> */}
          </article>
        </div>
      )}
    </div>
  );
};
export default BlogDetails;
