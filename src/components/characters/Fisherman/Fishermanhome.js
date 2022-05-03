import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./fishermanpresenting.css";

const FishermanHome = () => {
  return (
    <div class="Character_fishermanhome">
      <img
        class="Character_spritesheet_fishermanhome pixelart fishermanhome"
        src={require("./fisherman-sprite-sheet.png")}
        alt="Fisherman Home"
      />
    </div>
  );
};

export default FishermanHome;
