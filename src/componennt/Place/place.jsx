import "./place.css";

// IMPORTING MATERIAL UI COMPONENTS
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// IMPORTING CUSTOM COMPONENTS AND DATA
import ShiftNavBar from "../ShiftBar/shiftBar.jsx";
import DocFlexbox from "./docFlexbox.jsx";
import VolFlexbox from "./volFlexbox.jsx";
import ClusterFlexbox from "./clusterFlexbox.jsx";
import ProgramFlexbox from "./programFlexbox.jsx";
import BioData from "./biodata.jsx";

function Place() {

  // STYLING FOR CUSTOM PROGRESS BAR
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.mode = "#6B6B6B",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode = '#76F9C4',
    },
  }));

  // FUNCTION TO AUTO CLOSE DROP DOWN NAV DIV
  window.addEventListener('resize', function (event) {
    var width = window.innerWidth;
    if (width > 690)
      document.getElementById("dropDiv").style.display = "none"
  });

  return (
    <div className="place-section" id="placeSection">
      <div className="place-circle"></div>
      <div className="info-div">
        <div className="place-img-div">
          <img src="./images/SliderTwo/Rectangle 28.png" className="place-img" alt=""></img>
        </div>
        <div className="place-info-div">
          <h1 className="place-name">JAWA BARAT</h1>
          <p className="place-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea libero viverra dolor amet try
            vulputate. Nunc eleifend ut tincidunt sagittis sit ultrices enim dolor. Sit cras nisi, gravidafghh
            donec est lobortis massa viverra.</p>
          <div className="slidebar-div">
            <p id="donasi">Donasi</p>
            <h4 id="donasi">80% / <h5> 100%</h5></h4>
            <BorderLinearProgress variant="determinate" value={80} className="custom-progress" />
          </div>
          <p>Total</p>
          <h3>Rp. 8.000.000, -/ <h6 id="rp-break">Rp. 10.000.000,-</h6></h3>
        </div>
      </div>

      {/* DIV FOR BEHIND BLUR EFFECT */}
      <div className="place-circle-two"></div>
      <div className="design-wrapper-embed">
        <div className="embedded-div">
          <ShiftNavBar />
          <DocFlexbox />
          <VolFlexbox />
          <ClusterFlexbox />
          <ProgramFlexbox />
          <BioData />
        </div>
      </div>



    </div>
  );
}

export default Place;