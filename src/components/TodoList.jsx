import React from 'react';

export const TodoList = ({todoData}) => {
  return (
        todoData?.map((todo) => {
        return <div key={todo._id}>
            <h1>{todo?.title}</h1>
            <p>{todo?.description}</p>
        </div>
        })
  )
}
