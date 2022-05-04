import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./boypresenting.css";

const BoyRunning = () => {
  return (
    <div className="Character_boyrunning">
      <img
        className="Character_spritesheet_boyrunning pixelart boyrunning"
        src={require("./boy-sprite-sheet.png")}
        alt="BoyRunning"
      />
    </div>
  );
};

export default BoyRunning;
