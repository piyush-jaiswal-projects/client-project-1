function TokenDetails() {
  return (
    <section id="tokenomics" className="section">
      <div className="section__wrapper">
        <div className="title">
          <h3>Tokenomics</h3>
          <h2>Token Details</h2>
        </div>
        <div className="content">
          <div className="content__item">
            <img src="./images/tokenomics-chart.png" />
          </div>
          <div className="content__item">
            <ul className="detail">
              <li className="detail__item">
                <span className="detail__title">Token Name</span>
                <span className="detail__value">Enviro Token</span>
              </li>
              <li className="detail__item">
                <span className="detail__title">Token Symbol</span>
                <span className="detail__value">NVRO</span>
              </li>
              <li className="detail__item">
                <span className="detail__title">Token Supply</span>
                <span className="detail__value">5.000.000.000</span>
              </li>
              <li className="detail__item">
                <span className="detail__title">Decimals</span>
                <span className="detail__value">18</span>
              </li>
              <li className="detail__item">
                <span className="detail__title">Blockchain</span>
                <span className="detail__value">BSC - BEP 20</span>
              </li>
              <li className="detail__item">
                <span className="detail__title">Tax</span>
                <span className="detail__value">4%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TokenDetails;
