import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./merchantspresenting.css";

const FatMerchantSelling = () => {
  return (
    <div className="Character_fatmerchantselling">
      <img
        className="Character_spritesheet_fatmerchantselling pixelart fatmerchantselling"
        src={require("./merchants-sprite-sheet.png")}
        alt="Fat Merchant Selling"
      />
    </div>
  );
};

export default FatMerchantSelling;
