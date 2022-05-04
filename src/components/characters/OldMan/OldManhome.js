import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./oldmanpresenting.css";

const OldManHome = () => {
  return (
    <div className="Character_oldmanhome">
      <img
        className="Character_spritesheet_oldmanhome pixelart oldmanhome"
        src={require("./old-man-sprite-sheet.png")}
        alt="OldMan Home"
      />
    </div>
  );
};

export default OldManHome;
