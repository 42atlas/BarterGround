import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./merchantspresenting.css";

const FatMerchantNo = () => {
  return (
    <div className="Character_fatmerchantno">
      <img
        className="Character_spritesheet_fatmerchantno pixelart fatmerchantno"
        src={require("./merchants-sprite-sheet.png")}
        alt="FatMerchantNo"
      />
    </div>
  );
};

export default FatMerchantNo;
