import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./girlpresenting.css";

const GirlPresenting = () => {
  return (
    <div className="Character_girl">
      <img
        className="Character_spritesheet_girl pixelart girlpresenting"
        src={require("./girl-sprite-sheet.png")}
        alt="Girl"
      />
    </div>
  );
};

export default GirlPresenting;
