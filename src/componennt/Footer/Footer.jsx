import { useEffect, useState } from "react";
import Contribute__PopUp from "../Contribute/Contribute__PopUp";
import Popup_Whitlist from "../Popup-whitlist/Popup_Whitlist";
import Navbar from "../NavBar/Nav";

function Footer() {
  const [show, setShow] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (e.target.id === "popup-contribute") {
        setShowVideo((prev) => !prev);
      }
    });
  });
  return (
    <>
      {show && <Popup_Whitlist showThankYouPage={setShow} />}
      {showVideo && <Contribute__PopUp />}
      <section id="footer" className="section">
        <div className="section__wrapper">
          <div className="banner">
            <p className="banner__text">
              Use your contribution
              <br />
              to make a better place to live
              <div className="banner__action">
              <button
                className="button"
                onClick={() => setShowVideo((prev) => !prev)}
              >
                Contribute
              </button>
            </div>
            </p>
            
          </div>
          <ul className="social">
            <li className="social__item">
              <a
                href="https://www.facebook.com/NVRO-105354235535870/?ref=pages_you_manage"
                className="social__link social__link--facebook"
                target="_blank"
              ></a>
            </li>
            <li className="social__item">
              <a
                href="https://twitter.com/NVRO_org"
                className="social__link social__link--twitter"
                target="_blank"
              ></a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/nvrodotorg/"
                className="social__link social__link--instagram"
                target="_blank"
              ></a>
            </li>
            <li className="social__item">
              <a
                href="https://discord.gg/D5UtEuCtup"
                className="social__link social__link--discord"
                target="_blank"
              ></a>
            </li>
            <li className="social__item">
              <a
                href="https://t.me/nvrodotorgofficial"
                className="social__link social__link--telegram"
                target="_blank"
              ></a>
            </li>
            <li className="social__item">
              <a
                href="https://www.tiktok.com/@nvrodotorg?lang=en"
                className="social__link social__link--tiktok"
                target="_blank"
              ></a>
            </li>
            <li className="social__item">
              <a
                href="https://www.youtube.com/channel/UCOmjXvsmZtQbExNcptwwuoQ"
                className="social__link social__link--youtube"
                target="_blank"
              ></a>
            </li>
          </ul>
          <div className="footer">
            <div className="footer__logo">
              <img
                src="images/footer-logo-nvro.png"
                className="logo"
                alt="NVRO logo"
              />
            </div>
            <ul className="footer__menu custom-menu">
              <li className="menu__item">
                <a href="" className="menu__link">
                  Objectives
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Contribute
                </a>
              </li>
              <li className="menu__item">
                <a href="#roadmap" className="menu__link">
                  Roadmap
                </a>
              </li>
              <li className="menu__item">
                <a href="#whitepaper" className="menu__link">
                  Whitepaper
                </a>
              </li>
              <li className="menu__item">
                <a href="#tokenomics" className="menu__link">
                  Tokenomics
                </a>
              </li>
              <li className="menu__item">
                <a href="#about" className="menu__link">
                  About Us
                </a>
              </li>
              <li className="menu__item">
              <button
                className="button custom-action-btn"
                onClick={() => setShow((prev) => !prev)}
              >
                Buy NVRO Token
              </button>
              </li>
            </ul>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
