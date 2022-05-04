import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";

const Items = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Your Treasure </h3>
        <img
          className="main-img"
          src={require("../images/logo.webp")}
          alt="barter pixel art"
        />
        <div className="internal-container">
          <div className="infinite-img-x">
            {/* creare elemento per immagini e collegarlo ad API / img-containers */}
          </div>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={navigate("/storeitem")}
          >
            Store an Item
          </button>
        </div>
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={navigate("/offers")}
          >
            Offers
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={navigate("/exchange")}
          >
            Exchange
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={navigate("/messages")}
          >
            Messages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
