function Contribute__PopUp() {
  return (
    <section id="popup-contribute" className="popup">
      <div className="wrapper">
        <form className="form">
          <h2 className="form__title">
            Use your contribution to make our community a better place.
          </h2>
          <input type="number" className="form__input" placeholder="Amount" />
          <div className="form__action">
            <span className="form__text">Pay with</span>
            <input
              type="submit"
              className="form__button button"
              value="NVRO Token"
            />
          </div>
          <div className="form__options">
            <span className="form__text">or</span>
            <label for="option-credit-card" className="form__option">
              <input
                type="radio"
                id="option-credit-card"
                name="contribute_options"
                value="credit-card"
              />
              <span className="form__option-text">Credit Card</span>
              <img
                src="./images/credit-cards.png"
                className="form__option-image"
              />
            </label>
            <label for="option-paypal" className="form__option">
              <input
                type="radio"
                id="option-paypal"
                name="contribute_options"
                value="paypal"
              />
              <span className="form__option-text">Paypal</span>
              <img src="./images/paypal.png" className="form__option-image" />
            </label>
            <label for="option-gopay" className="form__option">
              <input
                type="radio"
                id="option-gopay"
                name="contribute_options"
                value="gopay"
              />
              <span className="form__option-text">Gopay</span>
              <img src="./images/gopay.png" className="form__option-image" />
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contribute__PopUp;
