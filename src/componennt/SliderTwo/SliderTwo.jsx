import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./SliderTwo.module.css";
import {Link} from "react-router-dom";
function SliderTwo({ showData }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 3,
    },
  };


  return (
    <div className={classes.wrapper} id="sliding-wrapper">
      <div className={classes.circle}></div>
      <div className={classes.circletwo}></div>
      <Carousel responsive={responsive} draggable={true} arrows={true}
        >
        <Link to="places">
        <div className={classes.div}>
          <img
            className={classes.image}
            src="./images/sliderTwo/Rectangle 29.png"
            alt=""
          />
          <img
            className={classes.overlay}
            src="./images/sliderTwo/Rectangle 36.png"
            alt=""
          />
          <img
            className={classes.overlaytwo}
            src="./images/sliderTwo/Rectangle 37.png"
            alt=""
          />
          <div className={classes.overlaytext}>
            <h2>Sumatera Barat</h2>
            <p>
              Donasi 77% /100%
              <br />
              Rp. 4.340.000,-
            </p>
          </div>
        </div>
        </Link>
        <Link to="places">
        <div className={classes.div}>
          <img
            className={classes.image}
            src="./images/sliderTwo/Rectangle 28.png"
            alt=""
          />
          <img
            className={classes.overlay}
            src="./images/sliderTwo/Rectangle 36.png"
            alt=""
          />
          <img
            className={classes.overlaytwo}
            src="./images/sliderTwo/Rectangle 37.png"
            alt=""
          />
          <div className={classes.overlaytext}>
            <h2>Jawa Barat</h2>
            <p id="caption">
              Donasi 80% /100%
              <br />
              Rp. 8.000.000,-
            </p>
          </div>
        </div>
        </Link>
        <Link to="places">
        <div className={classes.div}>
          <img
            className={classes.image}
            src="./images/sliderTwo/Rectangle 23.png"
            alt=""
          />
          <img
            className={classes.overlay}
            src="./images/sliderTwo/Rectangle 36.png"
            alt=""
          />
          <img
            className={classes.overlaytwo}
            src="./images/sliderTwo/Rectangle 37.png"
            alt=""
          />
          <div className={classes.overlaytext}>
            <h2>Bali</h2>
            <p>
              Donasi 47% /100%
              <br />
              Rp. 5.890.000,-
            </p>
          </div>
        </div>
        </Link>
        <Link to="places">
        <div className={classes.div}>
          <img
            className={classes.image}
            src="./images/sliderTwo/Rectangle 24.png"
            alt=""
          />
          <img
            className={classes.overlay}
            src="./images/sliderTwo/Rectangle 36.png"
            alt=""
          />
          <img
            className={classes.overlaytwo}
            src="./images/sliderTwo/Rectangle 37.png"
            alt=""
          />
          <div className={classes.overlaytext}>
            <h2>DKI Jakarta</h2>
            <p>
              Donasi 87% /100%
              <br />
              Rp. 8.120.000,-
            </p>
          </div>
        </div>
        </Link>
        <Link to="places">
        <div className={classes.div}>
          <img
            className={classes.image}
            src="./images/sliderTwo/Rectangle 25.png"
            alt=""
          />
          <img
            className={classes.overlay}
            src="./images/sliderTwo/Rectangle 36.png"
            alt=""
          />
          <img
            className={classes.overlaytwo}
            src="./images/sliderTwo/Rectangle 37.png"
            alt=""
          />
          <div className={classes.overlaytext}>
            <h2>Kalimantan Timur</h2>
            <p>
              Donasi 77% /100%
              <br />
              Rp. 6.230.000,-
            </p>
          </div>
        </div>
        </Link>
      </Carousel>
      <p className="country-count" id="placeCount">34 Chapter</p>
    </div>
  );
}

export default SliderTwo;
