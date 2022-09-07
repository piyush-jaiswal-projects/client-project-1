import React from "react";

export default function ClusterFlexbox(){
    return(
        <div className="Cluster-Flexbox" id="clusters">
            <div className="cluster-info-div">

              <button className="school-drop-btn">
                <select name="School Name" id="schl-drop">
                  <option value="volvo"><p id="bold">School Name</p></option>
                  <option value="saab">Saab School</option>
                </select>
              </button>

              <h1 style={{ color: "#FFFFFF" }}>Lorem Ipsum School</h1>

              <p><b>Bio</b></p>

             <p className="clu-desc">Lorem ipsum dolor sit amet consectetur adipisci
                elitnliquet ullamcorper bibendum. Magna natoq
                dictumst tellus eu tincidunt suspendisse lemen
                amet felis netus raesent.
             </p>

              <table id="table">
                <tr>
                  <td>Teacher</td>
                  <td>: 21</td>
                </tr>
                <tr>
                  <td>Male Student</td>
                  <td>: 331</td>
                </tr>
                <tr>
                  <td>Female Student</td>
                  <td>: 280</td>
                </tr>
                <tr>
                  <td>Curriculum</td>
                  <td>: SD 2013</td>
                </tr>
                <tr>
                  <td>School Based Management  </td>
                  <td>: Yes</td>
                </tr>
                <tr>
                  <td>Class Room</td>
                  <td>: 15</td>
                </tr>
                <tr>
                  <td>Laboratorium</td>
                  <td>: 1</td>
                </tr>
                <tr>
                  <td>Internet</td>
                  <td>: Yes</td>
                </tr>
                <tr>
                  <td>Library</td>
                  <td>: 1</td>
                </tr>
                <tr>
                  <td>Toilet</td>
                  <td>: 3</td>
                </tr>
              </table>
              
            </div>


            <div className="cluster-image-div">
              <div className="cluster-flexBox-item">
                <img src="./images/clusters/Rectangle 81.png" className="cluster-item-img" alt=""></img>
              </div>
              <div className="cluster-flexBox-item">
                <img src="./images/clusters/Rectangle 83.png" className="cluster-item-img" alt=""></img>
              </div>
              <div className="cluster-flexBox-item">
                <img src="./images/clusters/Rectangle 84.png" className="cluster-item-img" alt=""></img>
              </div>
              <div className="cluster-flexBox-item">
                <img src="./images/clusters/Rectangle 85.png" className="cluster-item-img" alt=""></img>
              </div>
              <div className="cluster-flexBox-item">
                <img src="./images/clusters/Rectangle 86.png" className="cluster-item-img" alt=""></img>
              </div>
            </div>
          </div>
    );
}