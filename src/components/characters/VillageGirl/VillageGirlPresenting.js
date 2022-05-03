import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./villagegirlpresenting.css";

const VillageGirlPresenting = () => {
  return (
    <div class="Character_villagegirl">
      <img
        class="Character_spritesheet_villagegirl pixelart villagegirlpresenting"
        src={require("./village-girl-sprite-sheet.png")}
        alt="VillageGirl"
      />
    </div>
  );
};

export default VillageGirlPresenting;
