import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

import Loading from "./Loading";
import ReactDOM from "react-dom";
import { useRanger } from "react-ranger";

const StoreItem = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState([2]);
  const [status, setStatus] = useState("is-success");
  const [isAccept, setIsAccept] = useState();

  const acceptOffer = setIsAccept(true);
  const declineOffer = setIsAccept(false);

  const setBarColor = () => {
    if (values >= 2) {
      setStatus("is-success");
    } else if ((values = 1)) {
      setStatus("is-warning");
    } else {
      setStatus("is-error");
    }
  };

  const { getTrackProps, handles } = useRanger({
    min: 0,
    max: 4,
    stepSize: 1,
    values,
    onChange: setValues,
  });

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Offer Received </h3>
        <div className="internal-container">
          {/* insert avatar + name */}
          <div className="offers-img-container">
            <div className="nes-container is-rounded">
              <img
                class="main-img"
                src={require("../images/logo.webp")} /* get img */
                alt="barter pixel art"
              />
              <div className="main-container">
                <label>
                  <input type="checkbox" class="nes-checkbox" />
                  <span>Is Listed</span>
                </label>
                <label class="nes-btn">
                  <span>Select your Image</span>
                  <input type="file" />
                </label>
              </div>
            </div>
          </div>

          <progress
            {...getTrackProps({
              style: {
                className: `nes-progress ${status}`,
                value: `${values}`,
                max: "4",
              },
            })}
          >
            {handles.map(({ getHandleProps }) => (
              <button
                {...getHandleProps({
                  style: {
                    class: "nes-btn",
                    width: "50px",
                    height: "50px",
                    /* outline: "none", */
                  },
                })}
              />
            ))}
          </progress>

          <label for="textarea_field">Description</label>
          <textarea
            id="textarea_field"
            class="nes-textarea"
            spellcheck="false"
          ></textarea>

          <select id="default_select">
            <option value="" disabled="" selected="" hidden="">
              Select...
            </option>
            <option value="0">Cat1</option>
            <option value="1">Cat2</option>
          </select>

          <div className="acceptoffer">
            <button
              type="button"
              class="nes-btn is-success"
              /* onClick={placeOffer} */
            >
              OK
            </button>
          </div>
        </div>
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            class="nes-btn is-primary"
            onClick={navigate("/exchange")}
          >
            Exchange center
          </button>
          <button
            type="button"
            class="nes-btn is-primary"
            onClick={navigate("/home")}
          >
            Home
          </button>
          <button
            type="button"
            class="nes-btn is-primary"
            onClick={navigate("/items")}
          >
            Your Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
