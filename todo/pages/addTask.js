import React, { useState } from 'react';
import Link from 'next/link';

function AddTask() {
  const [errMsg, setErrMsg] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (data.get('title') && data.get('description')) {
      try {
        await fetch('/api/todo', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: data.get('title'), description: data.get('description') }),
        });
        setMsg('Task Added')
      } catch (error) {
          setErrMsg('Somthig Faild')
      }
    } else { 
        setErrMsg('Fields Is Required')
    }
  };
  return (
    <div className="add-task-container">
      <h2>Add Task ..</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Task Title" name="title" />
        <textarea placeholder="Task Description" name="description" />
        <button type="submit">Add</button>
        { errMsg && <p className='error'>{errMsg}</p>}
        { msg && <p className='success'>{msg}</p>}
        <Link href="/">
          <a>My Tasks</a>
        </Link>
      </form>
    </div>
  );
}

export default AddTask;
