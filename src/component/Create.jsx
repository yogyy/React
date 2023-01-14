import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('luthor')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSUbmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }

    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added')
      setIsPending(false)
      navigate('/')
    })
  }

  return (
    <div className='bg-slate-700 py-10 h-screen w-full mx-auto'>
      <div className='create  '>
        <h2>Add a new blog</h2>
        <form onSubmit={handleSUbmit}>
          <label>Blog Title :</label>
          <input
            type='text'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='add title'
          />
          <label htmlFor=''>Blog Body :</label>
          <textarea
            type='text'
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='add content'
          ></textarea>
          <label>Blog author :</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value='const'>Const</option>
            <option value='luthor'>Luthor</option>
          </select>
          {!isPending && <button>Add blog</button>}
          {isPending && <button disabled>Adding blog.. </button>}
        </form>
      </div>
    </div>
  )
}

export default Create
