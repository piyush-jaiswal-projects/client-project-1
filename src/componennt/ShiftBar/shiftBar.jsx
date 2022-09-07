import React, { useState } from "react";
import '../PlaceNavbar/placeNavbar.css';
import "./shiftBar.css";

export default function ShiftBar() {

    // FUNCTION TO AUTO CLOSE NAVIGATION DIV
    window.addEventListener('resize', function (event) {
        var width = window.innerWidth;
        if (width > 690)
            document.getElementById("shiftDropDiv").style.display = "none"
    });

    function showDocuments() {
        document.getElementById("document").style.display = "flex";
        document.getElementById("volunteers").style.display = "none";
        document.getElementById("clusters").style.display = "none";
        document.getElementById("programs").style.display = "none";
        document.getElementById("vol-btn").style.fontSize = "15px";
        document.getElementById("vol-btn").style.borderBottom = "none";
        document.getElementById("cluster-btn").style.fontSize = "15px";
        document.getElementById("cluster-btn").style.borderBottom = "none";
        document.getElementById("program-btn").style.fontSize = "15px";
        document.getElementById("program-btn").style.borderBottom = "none";
        document.getElementById("doc-btn").style.fontSize = "20px";
        document.getElementById("doc-btn").style.borderBottom = "0.5px solid #FFFFFF";
        document.getElementById("biodata").style.display = "none";
        document.getElementById("shiftDropDiv").style.display = "none";
    }

    function showVolunteers() {
        document.getElementById("document").style.display = "none";
        document.getElementById("volunteers").style.display = "flex";
        document.getElementById("clusters").style.display = "none";
        document.getElementById("programs").style.display = "none";
        document.getElementById("vol-btn").style.fontSize = "20px";
        document.getElementById("vol-btn").style.borderBottom = "0.5px solid #FFFFFF";
        document.getElementById("cluster-btn").style.fontSize = "15px";
        document.getElementById("cluster-btn").style.borderBottom = "none";
        document.getElementById("program-btn").style.fontSize = "15px";
        document.getElementById("program-btn").style.borderBottom = "none";
        document.getElementById("doc-btn").style.fontSize = "15px";
        document.getElementById("doc-btn").style.borderBottom = "none";
        document.getElementById("biodata").style.display = "none";
        document.getElementById("shiftDropDiv").style.display = "none";
    }

    function showClusters() {
        document.getElementById("document").style.display = "none";
        document.getElementById("volunteers").style.display = "none";
        document.getElementById("clusters").style.display = "flex";
        document.getElementById("programs").style.display = "none";
        document.getElementById("doc-btn").style.fontSize = "15px";
        document.getElementById("doc-btn").style.borderBottom = "none";
        document.getElementById("vol-btn").style.fontSize = "15px";
        document.getElementById("vol-btn").style.borderBottom = "none";
        document.getElementById("program-btn").style.fontSize = "15px";
        document.getElementById("program-btn").style.borderBottom = "none";
        document.getElementById("cluster-btn").style.fontSize = "20px";
        document.getElementById("cluster-btn").style.borderBottom = "0.5px solid #FFFFFF";
        document.getElementById("biodata").style.display = "none";
        document.getElementById("shiftDropDiv").style.display = "none";
    }

    function showPrograms() {
        document.getElementById("document").style.display = "none";
        document.getElementById("volunteers").style.display = "none";
        document.getElementById("clusters").style.display = "none";
        document.getElementById("programs").style.display = "flex";
        document.getElementById("doc-btn").style.fontSize = "15px";
        document.getElementById("doc-btn").style.borderBottom = "none";
        document.getElementById("cluster-btn").style.fontSize = "15px";
        document.getElementById("cluster-btn").style.borderBottom = "none";
        document.getElementById("program-btn").style.fontSize = "20px";
        document.getElementById("program-btn").style.borderBottom = "0.5px solid #FFFFFF";
        document.getElementById("vol-btn").style.fontSize = "15px";
        document.getElementById("vol-btn").style.borderBottom = "none";
        document.getElementById("biodata").style.display = "none";
        document.getElementById("shiftDropDiv").style.display = "none";
    }


    const [state, setState] = useState("hidden");
    return (
        <div className='shift-nav-bar'>

        {/* SHIFTBAR FOR LARGE SCREENS */}
            <div className="shift-large">
                <ul className="section-list">
                    <li className="secton-item "><button
                        id="doc-btn" className="section-button" onClick={showDocuments}>Document</button></li>

                    <li className="secton-item "><button
                        id="vol-btn" className="section-button" onClick={showVolunteers}>Volunteer</button></li>

                    <li className="secton-item "><button
                        id="cluster-btn" className="section-button" onClick={showClusters}>Cluster</button></li>

                    <li className="secton-item "><button
                        id="program-btn" className="section-button" onClick={showPrograms}>Program</button></li>
                </ul>
            </div>

            {/* BUTTON TO SHOW AND HIDE SHIFTBAR DIV */}
            <button className='shift-drop-down-btn' id='shiftDropButton' onClick={
                () => {
                    if (state === "hidden") {
                        document.getElementById("shiftDropDiv").style.display = "block"
                        setState("visible");
                    }
                    else if (state === "visible") {
                        document.getElementById("shiftDropDiv").style.display = "none"
                        setState("hidden");
                    }
                }
            }>
                <img className='shift-drop-down-img' id='shiftDropImage' src='./images/more.png' alt='DropDown'></img>
            </button>

            {/* SHIFT DROP DOWN DIV */}
            <div className="shift-drop-down-div" id="shiftDropDiv">
                <h3 className="custom-section-item "><button
                    id="doc-btn" className="custom-section-button" onClick={showDocuments}>Document</button></h3>

                <h3 className="custom-section-item "><button
                    id="vol-btn" className="custom-section-button" onClick={showVolunteers}>Volunteer</button></h3>

                <h3 className="custom-section-item "><button
                    id="cluster-btn" className="custom-section-button" onClick={showClusters}>Cluster</button></h3>

                <h3 className="custom-section-item "><button
                    id="program-btn" className="custom-section-button" onClick={showPrograms}>Program</button></h3>

            </div>


        </div>
    );
}