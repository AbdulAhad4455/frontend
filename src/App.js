

import axios from 'axios'
import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [jokes,setJokes]=useState([]);
 
    
   const ShowText = useEffect(()=>{
      
      axios.get('/api/jokes')
        .then((response)=>{
          
          setJokes(response.data)
        })
          .catch((error)=>{console.log(error)})}
      )
  
  return (
    <>
    <h1>Hello World</h1>
    <h4> Total Jokes:{jokes.length}</h4>
    {jokes.map((jokes)=>(
      <div key={jokes.id}>
        <h2>{jokes.tittle}</h2>
        <h3>{jokes.content}</h3>
       
      </div>
    
    ))}
    <button onClick={ShowText}>Api Show</button>
    </>
  );
}

export default App;
