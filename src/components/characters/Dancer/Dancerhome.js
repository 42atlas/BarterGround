import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./dancerpresenting.css";

const DancerHome = () => {
  return (
    <div className="Character_dancerhome">
      <img
        className="Character_spritesheet_dancerhome pixelart dancerhome"
        src={require("./dancer-sprite-sheet.png")}
        alt="Dancer Home"
      />
    </div>
  );
};

export default DancerHome;
