import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Places from "./componennt/Place/place";
import PlaceNavbar from "./componennt/PlaceNavbar/placeNavbar";
import Footer from "./componennt/Footer/Footer";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={
          <div>
          <App />
          </div>
        } />
        <Route path="/places" element={
          <div>
          <PlaceNavbar />
          <Places />
          <Footer />
          </div>
        } />
        
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
