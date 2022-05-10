import React from "react";
/* import "../../../style/main.css"; */
/* import "nes.css/css/nes.min.css"; */
import "./merchantspresenting.css";

const FatMerchantStall = () => {
  return (
    <div className="Character_fatmerchantstall">
      <img
        className="Character_spritesheet_fatmerchantstall pixelart fatmerchantstall"
        src={require("./Stalls.png")}
        alt="Fat Merchant Stall"
      />
    </div>
  );
};

export default FatMerchantStall;
