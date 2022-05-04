import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./bardpresenting.css";

const BardPresenting = () => {
  return (
    <div className="Character_bard">
      <img
        className="Character_spritesheet_bard pixelart bardpresenting"
        src={require("./bard_sprite_sheet.png")}
        alt="Bard"
      />
    </div>
  );
};

export default BardPresenting;
