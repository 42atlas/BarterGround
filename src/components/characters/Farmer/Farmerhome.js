import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./farmerpresenting.css";

const FarmerHome = () => {
  return (
    <div className="Character_farmerhome">
      <img
        className="Character_spritesheet_farmerhome pixelart farmerhome"
        src={require("./farmer-sprite-sheet.png")}
        alt="FarmerHome"
      />
    </div>
  );
};

export default FarmerHome;
