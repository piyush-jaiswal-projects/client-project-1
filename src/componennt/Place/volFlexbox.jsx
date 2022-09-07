// CODE FOR VOLUNTEERS FLEXBOX ON /places ROUTE
import React from "react";

export default function VolFlexbox(){

    // FUNCTION TO SHOW BIODATA ON CLICKING VOLUNTEER DIV
    function showBiodata() {
        document.getElementById("vol-btn").style.fontSize = "18px";
        document.getElementById("vol-btn").style.borderBottom = "2px solid #FFFFFF";
        document.getElementById("document").style.display = "none";
        document.getElementById("volunteers").style.display = "none";
        document.getElementById("clusters").style.display = "none";
        document.getElementById("programs").style.display = "none";
        document.getElementById("biodata").style.display = "flex";
      }


    return(
        <div className="Volunteer-flexbox" id="volunteers">
            <div className="flexBox-item" onClick={showBiodata}>
              <img src="./images/volunteers/Rectangle 70.png" className="place-item-img" alt=""></img>
              <h2 className="vol-name">Tony Danza</h2>
              <p className="vol-star">⭐⭐⭐⭐</p>
            </div>
            <div className="flexBox-item" onClick={showBiodata}>
              <img src="./images/volunteers/Rectangle 72.png" className="place-item-img" alt=""></img>
              <h2 className="vol-name">Jonathan Higgins</h2>
              <p className="vol-star">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="flexBox-item" onClick={showBiodata}>
              <img src="./images/volunteers/Rectangle 73.png" className="place-item-img" alt=""></img>
              <h2 className="vol-name">Lynn Tanner</h2>
              <p className="vol-star">⭐⭐⭐⭐</p>
            </div>
            <div className="flexBox-item" onClick={showBiodata}>
              <img src="./images/volunteers/Rectangle 71.png" className="place-item-img" alt=""></img>
              <h2 className="vol-name">April Curtis</h2>
              <p className="vol-star">⭐⭐⭐⭐</p>
            </div>
            <div className="flexBox-item" onClick={showBiodata}>
              <img src="./images/volunteers/Rectangle 74.png" className="place-item-img" alt=""></img>
              <h2 className="vol-name">Dori Doreau</h2>
              <p className="vol-star">⭐⭐⭐⭐</p>
            </div>
            <div className="flexBox-item" onClick={showBiodata}>
              <img src="./images/volunteers/Rectangle 76.png" className="place-item-img" alt=""></img>
              <h2 className="vol-name">Kate Tanner</h2>
              <p className="vol-star">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
    );
}