import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "./slidertwo.css";
import {Link} from "react-router-dom";
function SliderTwo({ showData }) {


  const settingsLarge = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrowLarge />,
    prevArrow: <SamplePrevArrowLarge />,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const settingsSmall = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrowSmall />,
    prevArrow: <SamplePrevArrowSmall />,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  function SamplePrevArrowLarge(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-arrow"
        style={{ ...style, display: "block", background: "",
        color:"#FFFFFF",
        position:"absolute",
        left: "50%",
        top: "110%",
        zIndex: "1",
        cursor: "pointer" }}
        onClick={onClick}
      >
        <img src="./images/icons/1w.png" alt=""></img>
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
        top: "110%",
        left: "53%",
        zIndex: "1",
        cursor: "pointer"  }}
        onClick={onClick}
      >
        <img src="./images/icons/2w.png" alt=""></img>
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
          <img src="./images/icons/1w.png" alt=""></img>
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
          <img src="./images/icons/2w.png" alt=""></img>
        </div>
      );
    }


  return (
    // <div className="slider2-section" id="sliding-wrapper">
    <div className="sliding-wrap" id="sliding-wrapper">
    <div className="circle"></div>
      <div className="circleTwo"></div>
    <div className="slider2-section large">
    <Slider {...settingsLarge}>
    <Link to="/places">
          <div className="slider2-item-div">
          <img className="slider2-img" src="./images/SliderTwo/Rectangle 29.png" alt=""></img>
          <div className="overlay-text">
          <h2>Sumatera Barat</h2>
            <p>
              Donasi 77% /100%
              <br />
              Rp. 4.340.000,-
            </p>
          </div>
          </div>
          </Link>

          <Link to="/places">
          <div className="slider2-item-div">
          <img className="slider2-img" src="./images/SliderTwo/Rectangle 28.png" alt=""></img>
          <div className="overlay-text">
          <h2>Jawa Barat</h2>
            <p>
              Donasi 80% /100%
              <br />
              Rp. 8.000.000,-
            </p>
          </div>
          </div>
          </Link>

          <Link to="/places">
          <div className="slider2-item-div">
          <img className="slider2-img" src="./images/SliderTwo/Rectangle 23.png" alt=""></img>
          <div className="overlay-text">
          <h2>Bali</h2>
            <p>
              Donasi 47% /100%
              <br />
              Rp. 5.890.000,-
            </p>
          </div>
          </div>
          </Link>

          <Link to="/places">
          <div className="slider2-item-div">
          <img className="slider2-img" src="./images/SliderTwo/Rectangle 24.png" alt=""></img>
          <div className="overlay-text">
          <h2>DKI Jakarta</h2>
            <p>
              Donasi 87% /100%
              <br />
              Rp. 8.120.000,-
            </p>
          </div>
          </div>
          </Link>

          <Link to="/places">
          <div className="slider2-item-div">
          <img className="slider2-img" src="./images/SliderTwo/Rectangle 25.png" alt=""></img>
          <div className="overlay-text">
          <h2>Kalimantan Timur</h2>
            <p>
              Donasi 77% /100%
              <br />
              Rp. 6.230.000,-
            </p>
          </div>
          </div>
          </Link>

          
        </Slider>
      <p className="country-count" id="placeCount">34 Chapter</p>
    </div>

    <div className="slider2-section small">
    <Slider {...settingsSmall}>
    <Link to="/places">
          <div className="slider2-item-div">
          <img className="slider2-img" src="./images/SliderTwo/Rectangle 29.png" alt=""></img>
          <div className="overlay-text">
          <h2>Sumatera Barat</h2>
            <p>
              Donasi 77% /100%
              <br />
              Rp. 4.340.000,-
            </p>
          </div>
          </div>
          </Link>

          <Link to="/places">
          <div className="slider2-item-div">
          <img className="slider2-img" src="./images/SliderTwo/Rectangle 28.png" alt=""></img>
          <div className="overlay-text">
          <h2>Jawa Barat</h2>
            <p>
              Donasi 80% /100%
              <br />
              Rp. 8.000.000,-
            </p>
          </div>
          </div>
          </Link>

          <Link to="/places">
          <div className="slider2-item-div">
          <img className="slider2-img" src="./images/SliderTwo/Rectangle 23.png" alt=""></img>
          <div className="overlay-text">
          <h2>Bali</h2>
            <p>
              Donasi 47% /100%
              <br />
              Rp. 5.890.000,-
            </p>
          </div>
          </div>
          </Link>

          <Link to="/places">
          <div className="slider2-item-div">
          <img className="slider2-img" src="./images/SliderTwo/Rectangle 24.png" alt=""></img>
          <div className="overlay-text">
          <h2>DKI Jakarta</h2>
            <p>
              Donasi 87% /100%
              <br />
              Rp. 8.120.000,-
            </p>
          </div>
          </div>
          </Link>

          <Link to="/places">
          <div className="slider2-item-div">
          <img className="slider2-img" src="./images/SliderTwo/Rectangle 25.png" alt=""></img>
          <div className="overlay-text">
          <h2>Kalimantan Timur</h2>
            <p>
              Donasi 77% /100%
              <br />
              Rp. 6.230.000,-
            </p>
          </div>
          </div>
          </Link>

          
        </Slider>
      <p className="country-count" id="placeCount">34 Chapter</p>
    </div>
    </div>

  );
}

export default SliderTwo;
