import React from 'react';
import { useRouter } from 'next/router';

function Task({ task: { title, date, isDone, description } }) {
  const { back } = useRouter();
  return (
    <div style={{ margin: '0 2rem' }}>
      {isDone ? (
        <strike>
          <h2>{title}</h2>
          <span>{date.split('T')[1].split('.')[0]}</span>
          <p>{description}</p>
        </strike>
      ) : (
        <>
          <h2>{title}</h2>
          <span>{date.split('T')[1].split('.')[0]}</span>
          <p>{description}</p>
        </>
      )}

      <button type="button" onClick={() => back()}>
        Back
      </button>
    </div>
  );
}
export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/task', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  const paths = data.data.map(({ _id }) => ({ params: { id: _id.toString() } }));

  return { paths, fallback: false };
};
export const getStaticProps = async ({ params: { id } }) => {
  console.log(id);
  const response = await fetch(`http://localhost:3000/api/task/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return { props: { task: data.data } };
};
export default Task;
