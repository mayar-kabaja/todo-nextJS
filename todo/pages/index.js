import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card } from '../components';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const getNotes = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/todo', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setTasks(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNotes();
  });
  return (
    <div className="container">
      <Link href='/addTask'>
        <button>Add Task</button>
      </Link>
      <ul className='card-container'>
        {tasks?.map(({ title, id, date, description, isDone }) => (
          <Card
            title={title}
            id={id}
            time={date.split('T')[1].split('.')[0]}
            description={description}
          />
        ))}
      </ul>
    </div>
  );
}
