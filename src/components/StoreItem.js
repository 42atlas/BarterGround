import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

import Loading from "./Loading";
import ReactDOM from "react-dom";

const StoreItem = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [isAccept, setIsAccept] = useState();

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="landing">
        <h3 className="title"> Store Item </h3>
        <div className="main-container">



          <div className="nes-container is-rounded" id="store-container">
            <div className="storeitem-img">
              <img
                className="item-img"
                src={require("../images/logo.webp")} /* get img */
                alt="barter pixel art"
              />
              <div className="main-container">
                <label>
                  <input type="checkbox" className="nes-checkbox" />
                  <span>Is Listed</span>
                </label>
                <label className="nes-btn">
                  <span>Upload your Image</span>
                  <input type="file" />
                </label>
              </div>

            </div>
          </div>

          <br />
          <label for="textarea_field">Description</label>
          <textarea
            id="textarea_field"
            className="nes-textarea"
            spellcheck="false"
          ></textarea>
          <br />

          <div className="internal-container">
            <select id="default_select">
              <option value="" disabled="" selected="" hidden="">
                Select...
              </option>
              <option value="0">Cat1</option>
              <option value="1">Cat2</option>
            </select>
            <br />

            <button
              type="button"
              className="nes-btn is-success"
            /* onClick={placeOffer} */
            >
              OK
            </button>
          </div>
        </div>
      </div>
      <div className="nes-container is-centered" id="landing">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/exchange")}
          >
            Exchange center
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/home")}
          >
            Home
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/items")}
          >
            Your Treasure
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
