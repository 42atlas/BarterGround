import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./icons.css";

const Ocarina = () => {
  return (
    <div className="Icon_ocarina">
      <img
        className="Icon_spritesheet_ocarina pixelart ocarina"
        src={require("./icons-sprite-sheet.png")}
        alt="ocarina"
      />
    </div>
  );
};

export default Ocarina;
