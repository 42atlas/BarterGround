import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./builderpresenting.css";

const BuilderHome = () => {
  return (
    <div class="Character_builderhome">
      <img
        class="Character_spritesheet_builderhome pixelart builderhome"
        src={require("./builder-sprite-sheet.png")}
        alt="Builder Home"
      />
    </div>
  );
};

export default BuilderHome;
