import React from 'react'

import './App.css';
import { useState } from "react";
import Axios from "axios";
// import { Link } from 'react-router-dom';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [role, setRole] = useState("");
  const [team, setTeam] = useState("");

  const addPlayers = () => {
    Axios.post("http://localhost:3001/create",{
      name:name,
      age:age,
      role:role,
      team:team
    }).then(() => {
      console.log("Successfully Added");
    });
  };
  
  // const displayInfo = () =>{
  //   console.log(name + age + role + team);
  // }

  return (
    <div className="App1">
      <div className='player_information'>
        <label>Name:</label>
        <input 
         type='text'
         onChange={(event)=>{
          setName(event.target.value);
         }}
         />
        <label>Age:</label>
        <input 
         type='number'
         onChange={(event)=>{
          setAge(event.target.value);
         }}
         />
        <label>Role:</label>
        <input 
         type='text'
         onChange={(event)=>{
          setRole(event.target.value);
         }}
         />
        <label>Team:</label>
        <input 
         type='text'
         onChange={(event)=>{
          setTeam(event.target.value);
         }}
         />
        <button onClick={addPlayers}>Add Player</button>
      </div>
      </div>
  );
}

export default App
