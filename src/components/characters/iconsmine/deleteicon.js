import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./iconsm.css";

const Delete = () => {
  return (
    <div className="dela">
      <img
        className="Icon_spritesheet_del pixelart del"
        src={require("./delete.png")}
        alt="Del"
      />
    </div>
  );
};

export default Delete;
