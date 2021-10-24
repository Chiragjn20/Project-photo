import React from 'react';
import './App.css';

import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';

function ContactMe() {
  return (
    <div>
  
        <header  style= {{position :"absolute"}} className="home">
      <Link to ="/">  <img src={ABPWhite} width="270" height="160" /> </Link>
        
      <ul className="nav-links">
        <Link to="/"><li>Home </li></Link>
        <Link to ="/portfolio"><li>Portfolio </li></Link>  
     </ul>
     </header>

       <div> 
         <h2 className="text2"> Contact Us </h2> 

            <h3> Questions or Comments  </h3>

            <p> For inquiries into my work or my availability, please use the form to contact me. I thank you for interest, and I will do my best to get back to soon! </p>

         </div>
     
    
      </div>
  );
}

export default ContactMe;