import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./villagegirlpresenting.css";

const VillageGirlHome = () => {
  return (
    <div className="Character_villagegirlhome">
      <img
        className="Character_spritesheet_villagegirlhome pixelart villagegirlhome"
        src={require("./village-girl-sprite-sheet.png")}
        alt="VillageGirl Home"
      />
    </div>
  );
};

export default VillageGirlHome;
