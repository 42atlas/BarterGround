import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./bardpresenting.css";

const BardHome = () => {
  return (
    <div className="Character_bardhome">
      <img
        className="Character_spritesheet_bardhome pixelart bardhomepresenting"
        src={require("./bard_sprite_sheet.png")}
        alt="Bard"
      />
    </div>
  );
};

export default BardHome;
