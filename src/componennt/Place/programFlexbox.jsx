import React from "react";

export default function VolFlexbox(){


    function handleDownload() {
        fetch('Whitepaper.pdf').then(response => {
          response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Whitepaper.pdf';
            alink.click();
          })
        })
      }


    return(
        <div className="Programs-Flexbox" id="programs">
            <div className="program-item">
              <h3 className="program-heading">Waste Management</h3>
              <p className="program-desc">Lorem ipsum dolor sit amet consectetur adipiscing elitnliquet ullamcorper bibendum. Magna natoque
                dictumst tellus eu tincidunt suspendisse lemen tum amet felis netus raesent euismod imperdiet duis
                egestas pulvinar ullamcorper bibendum.</p>
              <p><img src="./images/pdf.png" alt=""></img>     Lorem ipsum.pdf     <button className="download-btn" onClick={handleDownload}>
                <img src="./images/downvector.png" alt="Download"></img>
              </button></p>
            </div>

            <div className="program-item">
              <h3 className="program-heading">Character Building</h3>
              <p className="program-desc">Lorem ipsum dolor sit amet consectetur adipiscing elitnliquet ullamcorper bibendum. Magna natoque
                dictumst tellus eu tincidunt suspendisse lemen tum amet felis netus raesent euismod imperdiet duis
                egestas pulvinar ullamcorper bibendum.

                dolor sit amet consectetur adipiscing elitnliquet ullamcorper bibendum. Magna natoque dictumst tellu
                eu tincidunt suspendisse lemen tum amet lemen tum amet felis.</p>
              <p><img src="./images/pdf.png" alt=""></img>     Lorem ipsum.pdf     <button className="download-btn" onClick={handleDownload}>
                <img src="./images/downvector.png" alt="Download"></img>
              </button></p>
            </div>

            <div className="program-item">
              <h3 className="program-heading">Incenerator Machine</h3>
              <p className="program-desc">Lorem ipsum dolor sit amet consectetur adipiscing elitnliquet ullamcorper bibendum. Magna natoque
                dictumst tellus eu tincidunt suspendisse lemen tum amet felis netus raesent euismod imperdiet duis
                egestas pulvinar ullamcorper bibendum.</p>
              <p><img src="./images/pdf.png" alt=""></img>     Lorem ipsum.pdf     <button className="download-btn" onClick={handleDownload}>
                <img src="./images/downvector.png" alt="Download"></img>
              </button></p>
            </div>
          </div>
    );
}