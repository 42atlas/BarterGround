import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./boypresenting.css";

const BoyHome = () => {
  return (
    <div class="Character_boyhome">
      <img
        class="Character_spritesheet_boyhome pixelart boyhome"
        src={require("./boy-sprite-sheet.png")}
        alt="Boy Home"
      />
    </div>
  );
};

export default BoyHome;
