import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./oldmanpresenting.css";

const OldManPresenting = () => {
  return (
    <div class="Character_oldman">
      <img
        class="Character_spritesheet_oldman pixelart oldmanpresenting"
        src={require("./old-man-sprite-sheet.png")}
        alt="OldMan"
      />
    </div>
  );
};

export default OldManPresenting;
