import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./oldmanpresenting.css";

const OldManPointing = () => {
  return (
    <div className="Character_oldmanpointing">
      <img
        className="Character_spritesheet_oldmanpointing pixelart oldmanpointing"
        src={require("./old-man-sprite-sheet.png")}
        alt="OldMan Pointing"
      />
    </div>
  );
};

export default OldManPointing;
