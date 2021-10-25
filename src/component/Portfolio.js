import React from 'react';
import './App.css';
import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';
import IMG1 from './Portfolio/Por-1.jpg'
import IMG2 from './Portfolio/Por-2.jpg'
import IMG3 from './Portfolio/Por-3.jpg'
import IMG4 from './Portfolio/Por-4.jpg'
import IMG5 from './Portfolio/Por-5.jpg'
import IMG6 from './Portfolio/Por-6.jpg'

function Portfolio() {
  return (
    <div className="home" >

      <header className="new-one" style= {{position :"absolute" }}>
      <Link to ="/">  <img src={ABPWhite} width="270" height="160" alt="" /> </Link>
        
      <ul className="nav-links">
        <Link to ="/ContactMe"><li>Contact Us </li></Link>  
     </ul>
     </header>  
            <div className="div5">

            <h2 className="text1"> Portfolio </h2>
            
             <div className="div7">

                  <div >
             <Link to="/portfolio/fashion" >
             
             <div className="div8" >  <img alt="" src={IMG2}/></div>        <p> Fashion </p>
              </Link>

              <Link to="/portfolio/food" >
               
              <div className="div8" > <img alt="" src={IMG4}/></div>            <p> Products and Food</p>
                  </Link>
            

               </div>
               <div>

              <Link to="/portfolio/modell1" >
              
              <div className="div8" ><img alt="" src={IMG3}/></div>           <p> Model Portfolio</p>
              </Link>

                  
              <Link to="/portfolio/archi" >
              
              <div className="div8" >   <img alt="" src={IMG5}/></div>       <p> Architecture</p>
              </Link>

              </div>

          <div>

          <Link to="/portfolio/conceptual" >  
          <div className="div8" >     <img alt="" src={IMG1}/></div>       <p> Conceptual </p>
               </Link>

              

              <Link to="/portfolio/video" >
              
              <div className="div8" ><img alt="" src={IMG6}/></div>        <p> Video Production and Editing </p>
              </Link>

              </div>
           
            </div>
        
           </div>
           
      
    </div>
  );
}


export default Portfolio;