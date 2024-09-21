

import axios from 'axios'
import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [todos,setTodos]=useState([]);
  const [users,setUser]=useState([])
    
   useEffect(()=>{
      
      axios.get('/todos')
        .then((response)=>{
          
          setTodos(response.data)
        })
          .catch((error)=>{console.log(error)})}
      )
      useEffect(()=>{
      
        axios.get('/users')
          .then((response)=>{
            
            setUser(response.data)
          })
            .catch((error)=>{console.log(error)})}
        )
  
  return (
    <>
    <h1>Todo App</h1>
    <h4> Total Todos:{`${todos.length}\nUser:${users.length}`}</h4>
    {todos.map((todos,users)=>(
      <div key={`${users.id}${todos.id}`}>
        <h2>{`User:${todos.user.username}  Todo:${todos.text} iscomplete = ${todos.isCompleted}` }</h2>
        
        
        
       
      </div>
    
    ))}
   
    </>
  );
}

export default App;
