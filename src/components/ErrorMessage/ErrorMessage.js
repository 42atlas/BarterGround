import React from "react";
import "../../style/main.css";
import "nes.css/css/nes.min.css";
import FatMerchantNo from "../characters/Merchants/FatMerchantNo";

const ErrorMessage = ({ children }) => {
  return (
    <div id="flex-row">
      <div id="fat-container">
        <FatMerchantNo />
      </div>
      <div className="nes-balloon from-left" id="error">
        {children}
      </div>
    </div>
  );
};

export default ErrorMessage;
