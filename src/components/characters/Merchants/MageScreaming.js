import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./merchantspresenting.css";

const MageScreaming = () => {
  return (
    <div className="Character_magescreaming">
      <img
        className="Character_spritesheet_magescreaming pixelart magescreaming"
        src={require("./merchants-sprite-sheet.png")}
        alt="Mage Screaming"
      />
    </div>
  );
};

export default MageScreaming;
