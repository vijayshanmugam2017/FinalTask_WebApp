import './App.css';
import React from "react";
import { Link } from "react-router-dom";

function Navebar(){
    return(
        <ul className='mainpage'>
        <li><button><Link to='/getrequest'>Get Request</Link></button></li>
        <li><button><a href='http://localhost:3001/get'>Get Users</a></button></li>
        </ul>
    );
}

export default Navebar;