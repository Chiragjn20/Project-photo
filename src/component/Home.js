import React from 'react';
import './App.css';

import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';
function Home() {
  return (
    <div>
  
        <header className="home">
      <Link to ="/">  <img src={ABPWhite} width="270" height="160" /> </Link>
        
      <ul className="nav-links">
        <Link to="/portfolio"><li>Portfolio </li></Link>
        <Link to ="/ContactMe"><li>Contact Us </li></Link>  
     </ul>
     </header>

       <div>
       <h1> hello world</h1>
     <h2> we're inside </h2>
       </div>
     
    
      </div>
  );
}

export default Home;