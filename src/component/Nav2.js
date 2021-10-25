import React from 'react';
import {Link } from 'react-router-dom';
import './App.css';
import './Home.css';
import ABPWhite from './ABPWhite.png';
import Instagram from './Instagram.png';
import Email from './email.png';
import WhatsApp from './Whatsapp.png';
import './assets/css/theme.css';
function Nav2() {
  return (
      <div className="div10">
           <main className="main" id="top">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-4 d-block" data-navbar-on-scroll="data-navbar-on-scroll" style={{position:'absolute'}}>
        <div className="container"><a className="navbar-brand" href="index.html"> <Link to='/'><img alt="" src={ABPWhite}  /> </Link></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
          <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
            <Link to='/portfolio' >  <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link" href="#aboutUs">Portfolio</a></li> </Link>
           <Link to='/contactme'>   <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link" href="#clients">Contact us</a></li></Link>
            </ul>
           </div>
        </div>
      </nav>
      <section id="home">
        <div className="bg-holder" >
        </div>

        <div className="container">
          <div className="row align-items-center min-vh-50 min-vh-sm-100">
            <div className="col-md-7 col-lg-6 text-md-start text-center">
              {/* <h1 className="text-light fs-6 fs-xl-8 font-cursive fw-normal mb-5">Your awesome<br />traffic permit <br />consultant.</h1><a className="btn btn-primary" href="#" role="button">GET STARTED
                <svg className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                </svg></a> */}
            </div>
          </div>
        </div>
      </section>

      <section id="clients">

        <div className="container">
          <div className="row">
            <div className="col-xxl-9">
              <div className="position-relative offset-9 offset-sm-10 offset-lg-11 mb-3"></div>
              <div className="carousel slide" id="carouselExampleDark" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row h-100 mx-1 mb-5 mt-3 gx-md-2 gx-lg-4">
                      <div className="col-md-4 mb-5 mb-md-0">
                        <div className="card card-span h-100 shadow-primary">
                          <div className="card-body my-3">
                          <h2> Sharing Stories</h2>
                            <p className="mb-0 px-3 px-md-2 px-xxl-3" style={{color:'black'}}>
                            Through my prints and blogs, I invite you to bring bits of my stories into your life and home. 
                New prints are released regularly, so check back often. If you sign up for updates, you will get notified
                 about new prints.                               </p>
                            <div className="align-items-xl-center d-block d-xl-flex px-3 mt-3 align-self-end">
                              <div className="flex-1 align-items-center pt-2">
                               <Link to='/prints'> <button id="idb"> Get Print</button></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-5 mb-md-0">
                        <div className="card card-span h-100 shadow-primary">
                          <div className="card-body my-3">
                          <h2> Photography as Art</h2>
                            <p className="mb-0 px-3 px-md-2 px-xxl-3" style={{color:'black'}}>
                            I am surrounded both by natural beauty and distinct art forms. I use my camera to shoot images that can 
                tell about the subject and most importantly, sell it to the audience. A good picture is one that tells and sells. </p>
                      <div className="align-items-xl-center d-block d-xl-flex px-3 mt-3 align-self-end">
                              <div className="flex-1 align-items-center pt-2">
                               <Link to='/portfolio'> <button id="idb">See Portfolio </button></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-5 mb-md-0">
                        <div className="card card-span h-100 shadow-primary">
                          <div className="card-body my-3">
                          <h2> My Background</h2>
                            <p className="mb-0 px-3 px-md-2 px-xxl-3" style={{color:'black'}}>
                            I'm inspired by the beauty of same events that happen everyday yet leave a different impact every time like sunsets.
                  I have tried different genres of photography and I'm still learning as much as I can. </p>
                       <div className="align-items-xl-center d-block d-xl-flex px-3 mt-3 align-self-end">
                              <div className="flex-1 align-items-center pt-2">
                               <Link to='/contactme'> <button id="idb">Contact Us</button> </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                

      </section>
      
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
     


    </main>

        


    </div>
  );
}

export default Nav2;