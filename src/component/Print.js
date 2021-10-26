import React ,{useEffect} from 'react';
import './App.css';

import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';
import './assets/css/theme.css';

function Print() {
  useEffect(() => {
    // Update the document title using the browser API
  window.scrollTo(0,0);  
  });
  return (
    <div className="div6" style={{height:'100vh'}} >
    <header  style= {{position :"absolute"}} className="home">
  <Link to ="/">  <img alt="" src={ABPWhite} width="270" height="160" /> </Link>    
  <ul className="nav-links">
    <Link to="/portfolio"><li>Portfolio</li></Link>
 </ul>
 </header> 

 <section className="py-5" >

<div className="container" id='con1' style={{marginTop:'250px'}}>
  <div className="row flex-center">
    <div className="col-md-6 col-xl-8 order-0">
      <h4 style={{color:'white'}}> Prints Coming Soon</h4>     
    </div>
    
  </div>
</div>


</section>



     
      </div>
  );
}

export default Print;