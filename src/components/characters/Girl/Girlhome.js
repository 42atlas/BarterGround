import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./girlpresenting.css";

const GirlHome = () => {
  return (
    <div class="Character_girlhome">
      <img
        class="Character_spritesheet_girlhome pixelart girlhome"
        src={require("./girl-sprite-sheet.png")}
        alt="Girl Home"
      />
    </div>
  );
};

export default GirlHome;
