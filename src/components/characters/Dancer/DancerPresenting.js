import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./dancerpresenting.css";

const DancerPresenting = () => {
  return (
    <div class="Character_dancer">
      <img
        class="Character_spritesheet_dancer pixelart dancerpresenting"
        src={require("./dancer-sprite-sheet.png")}
        alt="Dancer"
      />
    </div>
  );
};

export default DancerPresenting;
