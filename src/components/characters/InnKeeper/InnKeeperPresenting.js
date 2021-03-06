import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./Innkeeperpresenting.css";

const InnKeeperPresenting = () => {
  return (
    <div className="Character_innkeeper">
      <img
        className="Character_spritesheet_innkeeper pixelart innkeeperpresenting"
        src={require("./inn-keeper-sprite-sheet.png")}
        alt="Inn-Keeper"
      />
    </div>
  );
};

export default InnKeeperPresenting;
