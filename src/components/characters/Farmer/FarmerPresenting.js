import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./farmerpresenting.css";

const FarmerPresenting = () => {
  return (
    <div className="Character_farmer">
      <img
        className="Character_spritesheet_farmer pixelart farmerpresenting"
        src={require("./farmer-sprite-sheet.png")}
        alt="Farmer"
      />
    </div>
  );
};

export default FarmerPresenting;
