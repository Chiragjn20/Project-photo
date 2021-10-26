import React,{useEffect} from 'react';
import './App.css';


import {Link } from 'react-router-dom';
import ABPWhite from './ABPWhite.png';
import IMG1 from './Architecture/Cropped/Arc1.jpg'
import IMG2 from './Architecture/Cropped/Arc2.jpg'
import IMG3 from './Architecture/Cropped/Arc3.jpg'
import IMG4 from './Architecture/Cropped/Arc4.jpg'
import IMG5 from './Architecture/Cropped/Arc5.jpg'
import IMG6 from './Architecture/Cropped/Arc6.jpg'
import IMG7 from './Architecture/Cropped/Arc-7.jpg'
import IMG8 from './Architecture/Cropped/Arc-8.jpg'
import IMG9 from './Architecture/Cropped/Arc-9.jpg'
import IMG10 from './Architecture/Cropped/Arc-10.jpg'
import IMG11 from './Architecture/Cropped/Arc-11.jpg'
import IMG12 from './Architecture/Cropped/Arc-12.jpg'
import IMG13 from './Architecture/Cropped/Arc-13.jpg'
import IMG14 from './Architecture/Cropped/Arc-14.jpg'
import IMG15 from './Architecture/Cropped/Arc-15.jpg'
import IMG16 from './Architecture/Cropped/Arc-16.jpg'
import IMG17 from './Architecture/Cropped/Arc-17.jpg'
import IMG18 from './Architecture/Cropped/Arc-18.jpg'
import IMG19 from './Architecture/Cropped/Arc-19.jpg'
import IMG20 from './Architecture/Cropped/Arc-20.jpg'
import IMG21 from './Architecture/Cropped/Arc-21.jpg'
import IMG22 from './Architecture/Cropped/Arc-22.jpg'
import IMG23 from './Architecture/Cropped/Arc-23.jpg'
import IMG24 from './Architecture/Cropped/Arc-24.jpg'
import IMG25 from './Architecture/Cropped/Arc-25.jpg'
import IMG26 from './Architecture/Cropped/Arc-26.jpg'



import Instagram from './Instagram.png';
import Email from './email.png';
import WhatsApp from './Whatsapp.png';
import './assets/css/theme.css';


function Archi() {
  useEffect(() => {
    // Update the document title using the browser API
  window.scrollTo(0,0);  
  });
  return (
    <div>
  
  <div className="div6">
        <header  style= {{position :"absolute"}} className="home">
      <Link to ="/">  <img alt="" src={ABPWhite} width="270" height="160" /> </Link>
        
      <ul className="nav-links">
        
        <Link to="/portfolio" ><li>Portfolio</li></Link>
       
     </ul>
     </header> 
  
       <h1 className="text1"  style={{paddingTop:'150px'}}> Architecture</h1>

       <div className="div7" id ="archi">
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
       <div className="div8" ><img alt="" src={IMG23}/></div>
       <div className="div8" ><img alt="" src={IMG24}/></div>
       <div className="div8" ><img alt="" src={IMG25}/></div>
       <div className="div8" ><img alt="" src={IMG26}/></div>
              </div>
              <section className="py-5">

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
      
    
      </div>
  );
}

export default Archi;