import React, { useState } from 'react';
import './carousel.css';
import Slider from "react-slick";
import SliderTwo from "../SliderTwo/SliderTwo"; 

function SamplePrevArrowLarge(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ ...style, display: "block", background: "",
      color:"#FFFFFF",
      position:"absolute",
      left: "50%",
      top: "90%",
      zIndex: "1",
      cursor: "pointer" }}
      onClick={onClick}
    >
      <img src="./images/icons/1.png" alt=""></img>
    </div>
  );
}

function SampleNextArrowLarge(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ ...style, display: "block", background: "",
      color:"#121212",
      position:"absolute",
      top: "90%",
      left: "53%",
      zIndex: "1",
      cursor: "pointer"  }}
      onClick={onClick}
    >
      <img src="./images/icons/2.png" alt=""></img>
    </div>
  );
}

function SamplePrevArrowSmall(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-arrow"
        style={{ ...style, display: "none", background: "",
        color:"#121212",
        position:"absolute",
        left: "40%",
        top: "90%",
      zIndex: "1" }}
        onClick={onClick}
      >
        <img src="./images/icons/1.png" alt=""></img>
      </div>
    );
  }
  
  function SampleNextArrowSmall(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-arrow"
        style={{ ...style, display: "none", background: "",
        color:"#121212",
        position:"absolute",
        top: "90%",
        left: "53%",
        zIndex: "1"  }}
        onClick={onClick}
      >
        <img src="./images/icons/2.png" alt=""></img>
      </div>
    );
  }

const settingsLarge = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 7,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <SampleNextArrowLarge />,
  prevArrow: <SamplePrevArrowLarge />
};

const settingsSmall = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrowSmall />,
    prevArrow: <SamplePrevArrowSmall />
  };

function Carousel(){

  const [slide, setSlide] = useState("no");

    function handleClick(){

      if(slide === "no"){
        document.getElementById("drop-carousel").classList.toggle("slide-down");
        document.getElementById("sliding-wrapper").style.display="block";
        setSlide("yes");
      }
      
    }


  
    return (
      <div className="App">
        <div className='carousel-section large'>
        <Slider {...settingsLarge}>
          <div className='flag-carousel-item' onClick={handleClick}>
            <img className='flag-image' src="./images/sliderImage/BD.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/G.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/G1.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/G2.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/G3.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/G4.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/SO.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/SR.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/TZ.png" alt=''></img>
          </div>
        </Slider>
        </div>

        <div className='carousel-section small'>
        <Slider {...settingsSmall}>
          <div className='flag-carousel-item' onClick={handleClick}>
            <img className='flag-image' src="./images/sliderImage/BD.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/G.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/G1.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/G2.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/G3.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/G4.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/SO.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/SR.png" alt=''></img>
          </div>
          <div className='flag-carousel-item' onClick={handleClick}>
          <img className='flag-image' src="./images/sliderImage/TZ.png" alt=''></img>
          </div>
        </Slider>
        </div>

        <p className="country-count">10 Countries</p>
            <br></br>
           <div id="drop-carousel">
           <SliderTwo />
           </div>

      </div>
    );
  
}

export default Carousel;