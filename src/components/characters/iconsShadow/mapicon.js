import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./icons.css";

const MapIcon = () => {
  return (
    <div className="Icon_map">
      <img
        className="Icon_spritesheet_map pixelart map"
        src={require("./icons-sprite-sheet.png")}
        alt="map"
      />
    </div>
  );
};

export default MapIcon;
