import React from 'react';
import {Link } from 'react-router-dom';
import './App.css';
import './Home.css';
import ABPWhite from './ABPWhite.png';
import IMG_5400 from './IMG_5400.jpg';
import Instagram from './Instagram.png';
import Email from './email.png';
import WhatsApp from './Whatsapp.png';
function Nav() {
  return (
      <div>
    <nav >
        <header className="maiHead">
      <Link to ="/">  <img alt="" id="img1" src={ABPWhite} width="270" height="160" /> </Link>

      
        
      <ul className="nav-links">
       
        <Link to="/portfolio"><li>Portfolio </li></Link>
        <Link to ="/ContactMe"><li>Contact Us </li></Link>  
     </ul>
     
        </header>
    </nav>
    <div className="div3">
            <div class="container">
            <img src={IMG_5400} width= '100%' />
  </div>

 
  
        <div className = "division" >
        <div> 
            <h2> Sharing Stories</h2>
            <p> Through my prints and blogs, I invite you to bring bits of my stories into your life and home. 
                New prints are released regularly, so check back often. If you sign up for updates, you will get notified
                 about new prints. </p>
                 <button> Get Print </button>
        
        </div><hr/>
        <div> 
            <h2> Photography as Art</h2>
            <p> I am surrounded both by natural beauty and distinct art forms. I use my camera to shoot images that can 
                tell about the subject and most importantly, sell it to the audience. A good picture is one that tells and sells. </p>
                 <button> See Portfolio </button>
        
        </div><hr/>
        <div> 
            <h2> My Background</h2>
            <p> I'm inspired by the beauty of same events that happen everyday yet leave a different impact every time like sunsets.
                  I have tried different genres of photography and I'm still learning as much as I can. </p>
                 <button> Contact Me </button>
        
        </div>
        </div>
        
        <div class="class3">
            <a id="atag"href="https://www.instagram.com/abhaybnsal/" target="_blank" > <img src={Instagram} alt=""/> </a>
            <a id="atag" href="mailto:email@example.com" target="_blank"><img src={Email} alt=""/> </a>
            <a id="atag"  href="whatsapp://send?text=Hello!&phone=+916378542402 " target="_blank" > <img src={WhatsApp} alt=""/> </a>
           </div>

                  <p className="text2"> Copyrightx&copy; Abhay Bansal Photography - All Rights Reserved.</p>
   
        </div>
    </div>
  );
}

export default Nav;