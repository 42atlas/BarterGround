import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./fishermanpresenting.css";

const FishermanPresenting = () => {
  return (
    <div class="Character_fisherman">
      <img
        class="Character_spritesheet_fisherman pixelart fishermanpresenting"
        src={require("./fisherman-sprite-sheet.png")}
        alt="Fisherman"
      />
    </div>
  );
};

export default FishermanPresenting;
