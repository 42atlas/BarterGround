import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./oldladypresenting.css";

const OldLadyPresenting = () => {
  return (
    <div className="Character_oldlady">
      <img
        className="Character_spritesheet_oldlady pixelart oldladypresenting"
        src={require("./old-lady-sprite-sheet.png")}
        alt="OldLady"
      />
    </div>
  );
};

export default OldLadyPresenting;
