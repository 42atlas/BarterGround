import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./girlpresenting.css";

const GirlPresenting = () => {
  return (
    <div class="Character_girl">
      <img
        class="Character_spritesheet_girl pixelart girlpresenting"
        src={require("./girl-sprite-sheet.png")}
        alt="Girl"
      />
    </div>
  );
};

export default GirlPresenting;
