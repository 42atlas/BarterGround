import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./minerpresenting.css";

const MinerPresenting = () => {
  return (
    <div className="Character_miner">
      <img
        className="Character_spritesheet_miner pixelart minerpresenting"
        src={require("./miner-sprite-sheet.png")}
        alt="Miner"
      />
    </div>
  );
};

export default MinerPresenting;
