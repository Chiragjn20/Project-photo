import React from 'react';
import './App.css';


import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';
import IMG1 from './Studio/Cropped/Mod-1.jpg'
import IMG2 from './Studio/Cropped/Mod-2.jpg'
import IMG3 from './Studio/Cropped/Mod-3.jpg'
import IMG4 from './Studio/Cropped/Mod-4.jpg'
import IMG5 from './Studio/Cropped/Mod-5.jpg'
import IMG6 from './Studio/Cropped/Mod-6.jpg'


function Modell1() {
  return (
    <div className="div6">
        <header  style= {{position :"absolute"}} className="home">
      <Link to ="/">  <img alt="" src={ABPWhite} width="270" height="160" /> </Link>
        
      <ul className="nav-links">
        <Link to="/portfolio"><li>Portfolio</li></Link>
     </ul>
     </header> 
  
       <h1 className="text1"  style={{paddingTop:'150px'}}> Model</h1>

       <div className="div7">
       <div className="div8" ><img alt="" src={IMG1}/></div>
       <div className="div8" ><img alt="" src={IMG2}/></div>
       <div className="div8" ><img alt="" src={IMG3}/></div>
       <div className="div8" ><img alt="" src={IMG4}/></div>
       <div className="div8" ><img alt="" src={IMG5}/></div>
       <div className="div8" ><img alt="" src={IMG6}/></div>
               </div>
      </div>
  );
}

export default Modell1;