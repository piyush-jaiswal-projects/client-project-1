import "./information.css";
import Carousel from "../Carousel/carousel";


function Information() {




    return (
        <div className="information-section">
            <h1 className="section-title">
                Lorem ipsum dolor <u>sit amet</u>
            </h1>
            <p className="section-tagline">
                Diam eu, aliquam aenean netus pharetra pellentesque purus cursus
            </p>

            <Carousel />
        </div>
    );
}

export default Information;