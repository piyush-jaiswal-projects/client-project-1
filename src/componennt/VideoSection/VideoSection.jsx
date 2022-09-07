import { useEffect, useState } from "react";
import Contribute__PopUp from "../Contribute/Contribute__PopUp";
import video from "../../video/video-nvroio.mp4";
function VideoSection() {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("popup")) {
        setShowVideo((prev) => !prev);
      }
    });
  });
  return (
    <>
      {showVideo && <Contribute__PopUp />}
      <section id="contribute" className="section">
        <div className="section__wrapper">
          <div className="video-wrapper">
            <a className="video">
              <video
                className="video__background"
                poster="/images/video-bg.png"
                controls
              >
                <source src={video} type="video/mp4" />
                Your browser doesn't support the video tag!
              </video>
            </a>
            <a />
          </div>
          <button
            className="button"
            onClick={() => setShowVideo((prev) => !prev)}
          >
            Contribute
          </button>
        </div>
      </section>
    </>
  );
}

export default VideoSection;
