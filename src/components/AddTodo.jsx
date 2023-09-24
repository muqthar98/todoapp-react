import React, { useState } from 'react'

export const AddTodo = () => {
    const[title,setTitle] = useState('');
    const[description,setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        async function logMovies() {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
            };
            await fetch("http://localhost:5000/todos/createTodo",requestOptions)
        }
        logMovies().then(() => {
            setTitle('');
            setDescription('');
        })
    }

  return (
    <div>
        <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button onClick={submitHandler}>Add</button>
    </div>
  )
}
