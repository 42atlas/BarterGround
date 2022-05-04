import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./oldladypresenting.css";

const OldLadyHome = () => {
  return (
    <div className="Character_oldladyhome">
      <img
        className="Character_spritesheet_oldladyhome pixelart oldladyhome"
        src={require("./old-lady-sprite-sheet.png")}
        alt="OldLady Home"
      />
    </div>
  );
};

export default OldLadyHome;
