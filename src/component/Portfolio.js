import React,{useEffect} from 'react';
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

  useEffect(() => {
    // Update the document title using the browser API
  window.scrollTo(0,0);  
  });

  return (
    <div className="div6">
    <header  style= {{position :"absolute"}} className="home">
  <Link to ="/">  <img alt="" src={ABPWhite} width="270" height="160" /> </Link>
    
  <ul className="nav-links">
    <Link to="/portfolio"><li>Portfolio</li></Link>
 </ul>
 </header> 

   <h1 className="text1"  style={{paddingTop:'160px'}}> Portfolio</h1>
            <div className="div5">
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