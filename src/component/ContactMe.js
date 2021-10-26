import React ,{useEffect} from 'react';
import './App.css';

import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';
import WhatsApp1 from './MUOW.png';
import './assets/css/theme.css';

function ContactMe() {
  useEffect(() => {
    // Update the document title using the browser API
  window.scrollTo(0,0);  
  });
  return (
    <div className="div6" style={{height:'100vh'}}>
    <header  style= {{position :"absolute"}} className="home">
  <Link to ="/">  <img alt="" src={ABPWhite} width="270" height="160" /> </Link>    
  <ul className="nav-links">
    <Link to="/portfolio"><li>Portfolio</li></Link>
 </ul>
 </header> 

 <section className="py-5" >

<div className="container" style={{marginTop:'250px'}}>
  <div className="row flex-center">
    <div className="col-md-6 col-xl-8 order-0">
      <h4 style={{color:'white'}}> Questions or Comments</h4>
      <p> For inquiries into my work or my availability, please use the form to contact me. I thank you for interest, and I will do my best to get back to soon! </p>
      <li className="list-inline-item mr-2"><a className="text-decoration-none" href="whatsapp://send?text=Hello!&phone=+916378542402"><img className="list-social-icon" src={WhatsApp1} width="280" height="60" alt="..." /></a></li>

        
    </div>
    
  </div>
</div>


</section>



      
      </div>
  );
}

export default ContactMe;