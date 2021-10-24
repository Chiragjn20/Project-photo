import React from 'react';
import './App.css';


import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';
import IMG1 from './Architecture/Cropped/Arc1.jpg'
import IMG2 from './Architecture/Cropped/Arc2.jpg'
import IMG3 from './Architecture/Cropped/Arc3.jpg'
import IMG4 from './Architecture/Cropped/Arc4.jpg'
import IMG5 from './Architecture/Cropped/Arc5.jpg'
import IMG6 from './Architecture/Cropped/Arc6.jpg'


function Archi() {
  return (
    <div>
  
  <div className="div6">
        <header  style= {{position :"absolute"}} className="home">
      <Link to ="/">  <img alt="" src={ABPWhite} width="270" height="160" /> </Link>
        
      <ul className="nav-links">
        <Link to="/"><li>Home </li></Link>
        <Link to="/portfolio"><li>Portfolio</li></Link>
        <Link to ="/ContactMe"><li>Contact Us </li></Link>  
     </ul>
     </header> 
  
       <h1 className="text1"> Architecture</h1>

       <div className="div7">
       <div className="div8" ><img alt="" src={IMG1}/></div>
       <div className="div8" ><img alt="" src={IMG2}/></div>
       <div className="div8" ><img alt="" src={IMG3}/></div>
       <div className="div8" ><img alt="" src={IMG4}/></div>
       <div className="div8" ><img alt="" src={IMG5}/></div>
       <div className="div8" ><img alt="" src={IMG6}/></div>
              </div>
      </div>
    
      </div>
  );
}

export default Archi;