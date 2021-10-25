import React from 'react';
import './App.css';


import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';
import IMG1 from './Concepts/Cropped/Con1.jpg'
import IMG2 from './Concepts/Cropped/Con2.jpg'
import IMG3 from './Concepts/Cropped/Con3.jpg'
import IMG4 from './Concepts/Cropped/Con4.jpg'
import IMG5 from './Concepts/Cropped/Con5.jpg'
import IMG6 from './Concepts/Cropped/Con6.jpg'
import IMG7 from './Concepts/Cropped/Con7.jpg'
import IMG8 from './Concepts/Cropped/Con8.jpg'
import IMG9 from './Concepts/Cropped/Con9.jpg'
import IMG10 from './Concepts/Cropped/Con10.jpg'
import IMG11 from './Concepts/Cropped/Con11.jpg'
import IMG12 from './Concepts/Cropped/Con12.jpg'
import IMG13 from './Concepts/Cropped/Con13.jpg'
import IMG14 from './Concepts/Cropped/Con14.jpg'
import IMG15 from './Concepts/Cropped/Con15.jpg'
import IMG16 from './Concepts/Cropped/Con16.jpg'
import IMG17 from './Concepts/Cropped/Con17.jpg'
import IMG18 from './Concepts/Cropped/Con18.jpg'
import IMG19 from './Concepts/Cropped/Con19.jpg'
import IMG20 from './Concepts/Cropped/Con20.jpg'
import IMG21 from './Concepts/Cropped/Con21.jpg'
import IMG22 from './Concepts/Cropped/Con22.jpg'

function Conceptual() {
  return (
    <div className="div6">
    <header  style= {{position :"absolute"}} className="home">
  <Link to ="/">  <img alt="" src={ABPWhite} width="270" height="160" /> </Link>
    
  <ul className="nav-links">
    <Link to="/portfolio"><li>Portfolio</li></Link>
 </ul>
 </header> 

   <h1 className="text1"  style={{paddingTop:'150px'}}> Conceptual</h1>

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
       <div className="div8" ><img alt="" src={IMG16}/></div>
       <div className="div8" ><img alt="" src={IMG17}/></div>
       <div className="div8" ><img alt="" src={IMG18}/></div>
       <div className="div8" ><img alt="" src={IMG19}/></div>
       <div className="div8" ><img alt="" src={IMG20}/></div>
       <div className="div8" ><img alt="" src={IMG21}/></div>
       <div className="div8" ><img alt="" src={IMG22}/></div>

      </div>
  </div>
  );
}

export default Conceptual;