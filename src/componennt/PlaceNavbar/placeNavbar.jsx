import React, { useState } from 'react';
import '../PlaceNavbar/placeNavbar.css';
import { Link } from "react-router-dom";

function Header() {

  // Code to automatically close dropdown box on larger screens
  window.addEventListener('resize', function (event) {
    var width = window.innerWidth;
    if (width > 690)
      document.getElementById("dropDiv").style.display = "none"
  });


  // Declaration of state toeffect visibility of components
  const [state, setState] = useState("hidden");


  return (
    <div className='nav-bar'>

      <div className="small-device-nav hidden">

      {/* Link to go back to main page/route */}
       <Link to="/">
          <div className="design-wrapper">
            <li className='link back'>Back to Chapters</li>
          </div>
        </Link>
        
        {/* BRAND LOGO */}
        <div className="logo-div">
          <img
            src="/images/logo-nvro.png"
            className="logo logo-img"
            alt="NVRO logo"
          />
          <img
            src="/images/logo-nvro-inverse.png"
            className="logo logo--inverse"
            alt="NVRO logo"
          />
        </div>


      </div>


      {/* NAVIGATION LIST / MENU BAR */}
      <ul className='nav-links-list hiddenNavBar'>
        <Link to="/">
          <div className="design-wrapper">
            <li className='link back'>Back to Chapters</li>
          </div>
        </Link>
        <div className="logo-div">
          <img
            src="/images/logo-nvro.png"
            className="logo logo-img"
            alt="NVRO logo"
          />
          <img
            src="/images/logo-nvro-inverse.png"
            className="logo logo--inverse"
            alt="NVRO logo"
          />
        </div>
        <li className='link'><a href='#experience'>Objectives</a></li>
        <li className='link'><a href='#portfolio'>Contribute</a></li>
        <li className='link'><a href='#certificate'>Roadmap</a></li>
        <li className='link'><a href='#about'>whitepaper</a></li>
        <li className='link'><a href='#about'>Takenomics</a></li>
        <li className='link'><a href='#about'>About Us</a></li>
      </ul>

      {/* DROP DOWN BUTTON FOR NAVIGATION ON SMALLER DEVICES */}
      <button className='drop-down-btn hidden' id='dropButton' onClick={
        () => {
          if (state === "hidden") {
            document.getElementById("dropDiv").style.display = "block"
            setState("visible");
          }
          else if (state === "visible") {
            document.getElementById("dropDiv").style.display = "none"
            setState("hidden");
          }
        }
      }>
        <img className='drop-down-img' id='dropImage' src='./images/more.png' alt='DropDown'></img>
      </button>

      {/* DROP DOWN NAVIGATION DIV */}
      <div className="drop-down-div" id='dropDiv'>
        <li className='link'><a href='#home'>Objectives</a></li>
        <li className='link'><a href='#about'>Contribute</a></li>
        <li className='link'><a href='#skills'>Roadmap</a></li>
        <li className='link'><a href='#experience'>whitepaper</a></li>
        <li className='link'><a href='#portfolio'>Takenomics</a></li>
        <li className='link'><a href='#certificate'>About Us</a></li>
      </div>

    </div>
  );
}

export default Header;