import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./icons.css";

const KeysIcon = () => {
  return (
    <div className="Icon_keys">
      <img
        className="Icon_spritesheet_keys pixelart keys"
        src={require("./icons-sprite-sheet.png")}
        alt="Inn-Keeper Home"
      />
    </div>
  );
};

export default KeysIcon;
