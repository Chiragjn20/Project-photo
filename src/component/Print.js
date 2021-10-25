import React from 'react';
import './App.css';

import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';
import Instagram from './Instagram.png';
import Email from './email.png';
import WhatsApp from './Whatsapp.png';
import './assets/css/theme.css';

function Print() {
  return (
    <div className="div6" >
    <header  style= {{position :"absolute"}} className="home">
  <Link to ="/">  <img alt="" src={ABPWhite} width="270" height="160" /> </Link>    
  <ul className="nav-links">
    <Link to="/portfolio"><li>Portfolio</li></Link>
 </ul>
 </header> 

 <section className="py-5" >

<div className="container" style={{marginTop:'200px'}}>
  <div className="row flex-center">
    <div className="col-md-6 col-xl-8 order-0">
      <h4 style={{color:'white'}}> Prints Coming Soon</h4>     
    </div>
    
  </div>
</div>


</section>



      <section className="py-5" style={{marginTop:'210px'}}>

<div className="container">
  <div className="row flex-center">
    <div className="col-md-6 col-xl-8 order-0">
      <p className="text-center text-md-start">Copyright &copy;2021 Abhay Bansal Photography - All Rights Reserved</p>
    </div>
    <div className="col-md-6 col-xl-3 order-1">
      {/* <p className="text-center text-md-end text-xl-start">Contact Us&nbsp;
        <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#EE4D47" viewBox="0 0 16 16">
          <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
        </svg>&nbsp;by&nbsp;<a className="text-1000 fw-bold" href="https://themewagon.com/" target="_blank">ThemeWagon </a>
      </p> */}

               <p className="text5" >Social</p>
      
               <ul className="list-unstyled list-inline mb-6 mb-md-0 text-center text-md-end text-xl-start" style={{display:'flex'}}>
                <li className="list-inline-item mr-2"><a className="text-decoration-none" href="https://www.instagram.com/abhaybnsal/"><img className="list-social-icon" src={Instagram} width="50" height="50" alt="..." /></a></li>
                <li className="list-inline-item mr-2"><a className="text-decoration-none" href="mailto:abhayswm01@gmail.com"><img className="list-social-icon" src={Email } width="50" height="50" alt="..." /></a></li>
                <li className="list-inline-item mr-2"><a className="text-decoration-none" href="whatsapp://send?text=Hello!&phone=+916378542402"><img className="list-social-icon" src={WhatsApp} width="50" height="50" alt="..." /></a></li>
              </ul>
    </div>
  </div>
</div>


</section>
      </div>
  );
}

export default Print;