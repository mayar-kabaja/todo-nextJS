import React from 'react'

function Card({ title , id , time , description , isDone}) {
  return (
    <div className='card' id={id}>
        <p>{title}</p>
        <span>{time}</span>
        {
            isDone ? <p><strike>{description}</strike></p> : <p>{description}</p>
        }
        <div className='btns'>
        {
            isDone ? null :<button >Done</button>
        }
        <button>Delete</button>
        </div>
    </div>
  )
}

export default Card