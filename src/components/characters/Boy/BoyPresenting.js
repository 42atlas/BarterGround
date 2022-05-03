import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./boypresenting.css";

const BoyPresenting = () => {
  return (
    <div class="Character_boy">
      <img
        class="Character_spritesheet_boy pixelart boypresenting"
        src={require("./boy-sprite-sheet.png")}
        alt="Boy"
      />
    </div>
  );
};

export default BoyPresenting;
