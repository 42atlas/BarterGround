import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./builderpresenting.css";

const BuilderPresenting = () => {
  return (
    <div class="Character_builder">
      <img
        class="Character_spritesheet_builder pixelart builderpresenting"
        src={require("./builder-sprite-sheet.png")}
        alt="Builder"
      />
    </div>
  );
};

export default BuilderPresenting;
