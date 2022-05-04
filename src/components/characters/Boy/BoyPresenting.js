import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./boypresenting.css";

const BoyPresenting = () => {
  return (
    <div className="Character_boy">
      <img
        className="Character_spritesheet_boy pixelart boypresenting"
        src={require("./boy-sprite-sheet.png")}
        alt="Boy"
      />
    </div>
  );
};

export default BoyPresenting;
