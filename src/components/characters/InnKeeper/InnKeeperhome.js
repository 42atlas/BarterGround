import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./Innkeeperpresenting.css";

const InnKeeperHome = () => {
  return (
    <div class="Character_innkeeperhome">
      <img
        class="Character_spritesheet_innkeeperhome pixelart innkeeperhome"
        src={require("./inn-keeper-sprite-sheet.png")}
        alt="Inn-Keeper Home"
      />
    </div>
  );
};

export default InnKeeperHome;
