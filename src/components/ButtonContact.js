import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = () => {
  return (
    <div className="main-container">
      <Link
        to="/contact"
        /* onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }} */
      >
        {"© raffaelli.studio 2022"}
      </Link>
    </div>
  );
};

export default ButtonMailto;
