import About from "./componennt/About/About";
import Banner from "./componennt/Banner.jsx/Banner";
import Chart from "./componennt/Chart/Chart";
import Footer from "./componennt/Footer/Footer";
import Nav from "./componennt/NavBar/Nav";
import RoadMap from "./componennt/RoadMap/RoadMap";
import TokenDetails from "./componennt/TokenDetails/TokenDetails";
import VideoSection from "./componennt/VideoSection/VideoSection";
import WhtiePaper from "./componennt/WhitePaper/WhtiePaper";
import Information from "./componennt/Information/information";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Chart />
      <VideoSection />
      <Information />
      <RoadMap />
      <WhtiePaper />
      <TokenDetails />
      <About />
      <Footer />
    </>
  );
}

export default App;
