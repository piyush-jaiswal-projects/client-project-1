import { useEffect, useState } from "react";
import Popup_Whitlist from "../Popup-whitlist/Popup_Whitlist";

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const header = document.getElementById("header");

    window.addEventListener("scroll", function (e) {
      if (this.scrollY > 80) {
        header.classList.add("section--sticky");
      } else {
        header.classList.remove("section--sticky");
      }
    });
  });

  return (
    <>
      {show && <Popup_Whitlist showThankYouPage={setShow} />}

      <section id="header" className="section">
        <div className="section__wrapper">
          <div className="header">
            <div className="header__logo">
              <img
                src="/images/logo-nvro.png"
                className="logo"
                alt="NVRO logo"
              />
              <img
                src="/images/logo-nvro-inverse.png"
                className="logo logo--inverse"
                alt="NVRO logo"
              />
            </div>
            <ul className="header__menu menu">
              <li className="menu__item">
                <a href="#objectives" className="menu__link">
                  Objectives
                </a>
              </li>
              <li className="menu__item">
                <a href="#contribute" className="menu__link">
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
            </ul>
            <div className="header__action">
              <button
                className="button"
                onClick={() => setShow((prev) => !prev)}
              >
                Buy NVRO Token
              </button>
            </div>
          </div>
          <div className="header header--mobile">
            <div className="header__logo">
              <img
                src="/images/logo-nvro.png"
                className="logo"
                alt="NVRO logo"
              />
              <img
                src="/images/logo-nvro-inverse.png"
                className="logo logo--inverse"
                alt="NVRO logo"
              />
            </div>
            <input
              id="menu-toggle"
              type="checkbox"
              className="header__menu-toggle"
            />
            <label for="menu-toggle" className="header__menu-toggle-button">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <ul className="header__menu menu">
              <li className="menu__item">
                <a href="#objectives" className="menu__link">
                  Objectives
                </a>
              </li>
              <li className="menu__item">
                <a href="#contribute" className="menu__link">
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
                  className="button"
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

export default Nav;
