import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./villagegirlpresenting.css";

const VillageGirlPresenting = () => {
  return (
    <div className="Character_villagegirl">
      <img
        className="Character_spritesheet_villagegirl pixelart villagegirlpresenting"
        src={require("./village-girl-sprite-sheet.png")}
        alt="VillageGirl"
      />
    </div>
  );
};

export default VillageGirlPresenting;
