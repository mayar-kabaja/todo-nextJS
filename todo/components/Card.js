import React from 'react'

function Card({ title , id , time , description , isDone , handleIsDone , handleDelete}) {
  return (
    <div className='card' id={id}>
        <p>{title}</p>
        <span>{time}</span>
        {
            isDone ? <p><strike>{description}</strike></p> : <p>{description}</p>
        }
        <div className='btns'>
        {
            isDone ? null :<button onClick={handleIsDone}>Done</button>
        }
        <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default Card