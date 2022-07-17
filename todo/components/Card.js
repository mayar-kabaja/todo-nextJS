import React from 'react';
import { useRouter } from 'next/router';

function Card({ title, id, time, isDone, handleIsDone, handleDelete }) {
  const router = useRouter();
  return (
    <div className="card" id={id} >
      {isDone ? (
        <strike>
          <p>{title}</p>
        </strike>
      ) : (
        <p>{title}</p>
      )}

      <span>{time}</span>
      <div className="btns">
        {isDone ? null : <button onClick={handleIsDone}>Done</button>}
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => router.push(`/task/${id}`)}>view</button>
      </div>
    </div>
  );
}

export default Card;
