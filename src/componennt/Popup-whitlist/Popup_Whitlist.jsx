import { useState } from "react";
import axios from "axios";
function Popup_Whitlist({ showThankYouPage }) {
  const [showThank, setShowThank] = useState(false);
  const [section, setSection] = useState(true);
  function formSubmit(e) {
    const valueone = document.querySelector(".input_one").value;
    const valuetwo = document.querySelector(".input_two").value;
    console.log(valueone);
    if (valueone && valuetwo) {
      axios
        .post("https://wl.nvro.org/submit", {
          name: valueone,
          email: valuetwo,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setSection(false);
    setShowThank(true);
  }
  return (
    <section id="popup-waitlist" className="popup">
      <div className="wrapper">
        {section && (
          <form onSubmit={formSubmit} className="form" action="#">
            <h5 className="form__title">
              Be the first people to get NVRO token!
            </h5>
            <p className="form__description">
              Drop your details below to be part of build a better place to live
              Start Now.
            </p>
            <input
              type="text"
              className="form__input input_one"
              placeholder="Your name"
              data-bind="value:name"
            />
            <input
              type="email"
              className="form__input input_two"
              placeholder="Your email address"
              data-bind="value:email"
            />
            <input
              type="submit"
              className="form__button button"
              value="Join the waitlist"
              data-bind="click: join_waitinglist"
            />
          </form>
        )}
        {showThank && (
          <>
            <form className="form">
              <h5 className="form__title">Thank you!</h5>
              <p className="form__description">
                We have sent your invitation to your email
              </p>
              <input
                type="button"
                className="form__button button"
                value="Close"
                data-bind="click: close_popup"
                onClick={() => showThankYouPage((prev) => !prev)}
              />
            </form>
          </>
        )}
      </div>
    </section>
  );
}

export default Popup_Whitlist;
