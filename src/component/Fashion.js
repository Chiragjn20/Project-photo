import React from 'react';
import './App.css';

import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';
import IMG1 from './Fashion/Cropped/Fas-1.jpg'
import IMG2 from './Fashion/Cropped/Fas-2.jpg'
import IMG3 from './Fashion/Cropped/Fas-3.jpg'
import IMG4 from './Fashion/Cropped/Fas-4.jpg'
import IMG5 from './Fashion/Cropped/Fas-5.jpg'
import IMG6 from './Fashion/Cropped/Fas-6.jpg'
import IMG7 from './Fashion/Cropped/Fas-7.jpg'
import IMG8 from './Fashion/Cropped/Fas-8.jpg'
import IMG9 from './Fashion/Cropped/Fas-9.jpg'
import IMG10 from './Fashion/Cropped/Fas-10.jpg'
import IMG11 from './Fashion/Cropped/Fas-11.jpg'
import IMG12 from './Fashion/Cropped/Fas-12.jpg'
import IMG13 from './Fashion/Cropped/Fas-13.jpg'
import IMG14 from './Fashion/Cropped/Fas-14.jpg'
import IMG15 from './Fashion/Cropped/Fas-15.jpg'

function Fashion() {
  return (
    <div className="div6">
        <header  style= {{position :"absolute"}} className="home">
      <Link to ="/">  <img alt="" src={ABPWhite} width="270" height="160" /> </Link>
        
      <ul className="nav-links">
        <Link to="/portfolio"><li>Portfolio</li></Link>
     </ul>
     </header> 
  
        
       <h1 className="text1" style={{paddingTop:'150px'}}> Fashion</h1>

       <div className="div7">
       <div className="div8" ><img alt="" src={IMG1}/></div>
       <div className="div8" ><img alt="" src={IMG2}/></div>
       <div className="div8" ><img alt="" src={IMG3}/></div>
       <div className="div8" ><img alt="" src={IMG4}/></div>
       <div className="div8" ><img alt="" src={IMG5}/></div>
       <div className="div8" ><img alt="" src={IMG6}/></div>
       <div className="div8" ><img alt="" src={IMG7}/></div>
       <div className="div8" ><img alt="" src={IMG8}/></div>
       <div className="div8" ><img alt="" src={IMG9}/></div>
       <div className="div8" ><img alt="" src={IMG10}/></div>
       <div className="div8" ><img alt="" src={IMG11}/></div>
       <div className="div8" ><img alt="" src={IMG12}/></div>
       <div className="div8" ><img alt="" src={IMG13}/></div>
       <div className="div8" ><img alt="" src={IMG14}/></div>
       <div className="div8" ><img alt="" src={IMG15}/></div>
           </div>
      </div>
  );
}

export default Fashion;

