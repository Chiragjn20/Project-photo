import React from 'react';
import './App.css';


import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';
import IMG1 from './ProductandFood/Cropped/Food-1.jpg'
import IMG2 from './ProductandFood/Cropped/Food-2.jpg'
import IMG3 from './ProductandFood/Cropped/Food-3.jpg'
import IMG4 from './ProductandFood/Cropped/Food-4.jpg'
import IMG5 from './ProductandFood/Cropped/Food-5.jpg'
import IMG6 from './ProductandFood/Cropped/Food-6.jpg'


function Food() {
  return (
    <div>
  
  <div className="div6">
        <header  style= {{position :"absolute"}} className="home">
      <Link to ="/">  <img alt="" src={ABPWhite} width="270" height="160" /> </Link>
        
      <ul className="nav-links">
        
        <Link to="/portfolio"><li>Portfolio</li></Link>
       
     </ul>
     </header> 
  
       <h1 className="text1"  style={{paddingTop:'150px'}}> Product and Food</h1>

       <div className="div7"  >
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

export default Food;