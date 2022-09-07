function About() {
  return (
    <section id="about" className="section">
      <div className="section__wrapper">
        <h2 className="title">About Us</h2>
        <p className="content">
          When looking forward, global waste is expected to grow to 3.40 billion
          tonnes by 2050, more than double population growth over the same
          period. The East Asia and Pacific region is generating most of the
          world’s waste, at 23 percent, and the Middle East and North Africa
          region is producing the least in absolute terms, at 6 percent.
          <br />
          <br />
          However, the fastest growing regions are Africa, South Asia, and the
          Middle East and North Africa, where, by 2050, total waste generation
          is expected to more than triple, double, and double respectively. In
          these regions, more than half of waste is currently openly dumped, and
          the trajectories of waste growth will have vast implications for the
          environment, health, and prosperity, thus requiring urgent action.
          <br />
          <br />
          In order to solve these issues, we have prepared a solid plan to
          answer these issues, and to build awareness about waste management.
        </p>
        <div className="team">
          <div className="team__header">
            <img
              src="./images/team-title-horizontal.svg"
              className="team__title team__title--horizontal"
              alt=""
            />
            <img
              src="./images/team-title-vertical.png"
              className="team__title team__title--vertical"
              alt=""
            />
          </div>
          <ul className="team__list" id="width-cutom">
            <li className="team__item">
              <img src="./images/team-kirdy.png" className="team__photo" alt=""/>
              <span className="team__name">Kirdy</span>
              <span className="team__position">Chief Executive Officer</span>
              <ul className="team__detail">
                <li>Strategic partnership</li>
                <li>Government relation</li>
                <li>Business development</li>
              </ul>
            </li>

            <li className="team__item">
              <img src="./images/team-nugi.png" className="team__photo" alt=""/>
              <span className="team__name">Nugi</span>
              <span className="team__position">Chief Operation Officer</span>
              <ul className="team__detail">
                <li>NFT management</li>
                <li>Marketing & branding strategy</li>
                <li>Internal corporate development</li>
              </ul>
            </li>

            <li className="team__item">
              <img src="./images/team-evans.png" className="team__photo" alt=""/>
              <span className="team__name">Evans</span>
              <span className="team__position">Chief Communication</span>
              <ul className="team__detail">
                <li>Public relations & sponsorship</li>
                <li>Token & Crypto related management</li>
                <li>Digital specialist</li>
              </ul>
            </li>

            <li className="team__item">
              <img src="./images/renaldy.png" className="team__photo" alt=""/>
              <span className="team__name">Renaldy</span>
              <span className="team__position">Chief Technical Officer</span>
              <ul className="team__detail">
                <li>Product & Development</li>
                <li>Treasury</li>
              </ul>
            </li>

            <li className="team__item">
              <img src="./images/team-tania.png" className="team__photo" alt=""/>
              <span className="team__name">Tania</span>
              <span className="team__position">Corporate Secretary</span>
              <ul className="team__detail">
                <li>Corporate legality</li>
                <li>Business partner relation</li>
              </ul>
            </li>
          </ul>

          <ul className="team__list">
            <li className="team__item">
              <img
                src="./images/farih.png"
                alt="farih-pic"
                className="team__photo"
              />
              <span className="team__name">Farih</span>
              <span className="team__position">
                Product NFT & Marketing Strategic NFT
              </span>
            </li>

            <li className="team__item">
              <img
                src="./images/fika.png"
                alt="fika-pic"
                className="team__photo"
              />
              <span className="team__name">Fika</span>
              <span className="team__position">Marketing Strategic</span>
              <ul className="team__detail">
                <li>Crypto & Project Related</li>
              </ul>
            </li>

            <li className="team__item">
              <img
                src="./images/meri.png"
                alt="meri-pic"
                className="team__photo"
              />
              <span className="team__name">Meri</span>
              <span className="team__position">Finance & Accounting</span>
            </li>

            <li className="team__item">
              <img
                src="./images/mike.png"
                alt="mike-pic"
                className="team__photo"
              />
              <span className="team__name">Mike</span>
              <span className="team__position">Creative & Design Graphic</span>
            </li>

            <li className="team__item">
              <img
                src="./images/ratna.png"
                alt="ratna-pic"
                className="team__photo"
              />
              <span className="team__name">Ratna</span>
              <span className="team__position">Secretary</span>
            </li>
          </ul>

          <ul className="team__list">
            <li className="team__item">
              <img
                src="./images/cici.png"
                alt="cici-pic"
                className="team__photo"
              />
              <span className="team__name">Cici</span>
              <span className="team__position">Strategic Partner</span>
            </li>

            <li className="team__item">
              <img
                src="./images/ibada.png"
                alt="ibada-pic"
                className="team__photo"
              />
              <span className="team__name">Ibada</span>
              <span className="team__position">Community Development</span>
              <ul className="team__detail">
                <li>Project waste management related</li>
              </ul>
            </li>

            <li className="team__item">
              <img
                src="./images/azarine.png"
                alt="azarine-pic"
                className="team__photo"
              />
              <span className="team__name">Azarine Jachja</span>
              <span className="team__position">
                Sponsor, Partnership and Events
              </span>
            </li>

            <li className="team__item">
              <img src="#" alt="" className="team__photo" />
              <span className="team__name"></span>
              <span className="team__position"></span>
            </li>

            <li className="team__item">
              <img src="#" alt="" className="team__photo" />
              <span className="team__name"></span>
              <span className="team__position"></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
