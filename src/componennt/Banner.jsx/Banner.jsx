import { useState } from "react";
import Popup_Whitlist from "../Popup-whitlist/Popup_Whitlist";

function Banner() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <Popup_Whitlist showThankYouPage={setShow} />}
      <section id="home" className="section">
        <div className="section__wrapper">
          <div className="content">
            <h1>
              Let’s build a better place
              <br />
              to live, start now.
            </h1>
            <h4>
              Join the NVRO community and contribute to create zero waste
              environment
              <br />
              through building our next generations character.
            </h4>
          </div>
          <div className="action">
            <button className="button" onClick={() => setShow((prev) => !prev)}>
              Request early access
            </button>
            <p>Welcome to your future investment model</p>
            <a href="#objectives" className="arrow-down"></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
