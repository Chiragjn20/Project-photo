import React from 'react';
import './App.css';


import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';


function Modell1() {
  return (
    <div className="div6">
        <header  style= {{position :"absolute"}} className="home">
      <Link to ="/">  <img alt="" src={ABPWhite} width="270" height="160" /> </Link>
        
      <ul className="nav-links">
        <Link to="/"><li>Home </li></Link>
        <Link to="/portfolio"><li>Portfolio</li></Link>
        <Link to ="/ContactMe"><li>Contact Us </li></Link>  
     </ul>
     </header> 
  
       <h1 className="text1"> Model</h1>

       <div className="div7">
       <div className="div8" ><img alt="" src=""/></div>
               </div>
      </div>
  );
}

export default Modell1;