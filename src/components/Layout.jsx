import React, { useEffect, useState } from 'react'
import './Layout.css'
import { AddTodo } from './AddTodo'
import { TodoList } from './TodoList'

export const Layout = () => {

    const[data,setData] = useState([])

    useEffect(() => {
        async function logMovies() {
            const response = await fetch("http://localhost:5000/todos/getTodo");
            const movies = await response.json();
            console.log(movies);
            setData(movies.data);
        }
        logMovies();
    //  fetch('http://localhost:5000/todos/getTodo').then(result => {
    //     console.log(result)
    //     // setData(result)
    //  }).catch(err => {
    //     console.log(err)
    //  })
    }, [])
    
  return (
    <div className='layout'>
        <main>
            <AddTodo/>
            <TodoList todoData={data}/>
        </main>
    </div>
  )
}
