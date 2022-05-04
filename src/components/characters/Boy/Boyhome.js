import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./boypresenting.css";

const BoyHome = () => {
  return (
    <div className="Character_boyhome">
      <img
        className="Character_spritesheet_boyhome pixelart boyhome"
        src={require("./boy-sprite-sheet.png")}
        alt="Boy Home"
      />
    </div>
  );
};

export default BoyHome;
