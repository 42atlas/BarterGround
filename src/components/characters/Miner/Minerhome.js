import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./minerpresenting.css";

const MinerHome = () => {
  return (
    <div className="Character_minerhome">
      <img
        className="Character_spritesheet_minerhome pixelart minerhome"
        src={require("./miner-sprite-sheet.png")}
        alt="Miner Home"
      />
    </div>
  );
};

export default MinerHome;
