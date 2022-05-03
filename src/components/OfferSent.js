import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

import Loading from "./Loading";
import ReactDOM from "react-dom";
/* import { useRanger } from "react-ranger"; */

const OfferSent = () => {
  const navigate = useNavigate();
  /*   const [values, setValues] = useState([2]);
  const [status, setStatus] = useState("is - success");
  const [isAccept, setIsAccept] = useState();

  const acceptOffer = setIsAccept(true);
  const declineOffer = setIsAccept(false);

  const setBarColor = () => {
    if (values >= 2) {
      setStatus("is - success");
    } else if ((values = 1)) {
      setStatus("is - warning");
    } else {
      setStatus("is - error");
    }
  };

  const { getTrackProps, handles } = useRanger({
    min: 0,
    max: 4,
    stepSize: 1,
    values,
    onChange: setValues,
  }); */

  //const modifyOffer =
  //const removeOffer =

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Offer Sent</h3>
        <div className="internal-container">
          {/* insert avatar + name */}
          <div className="offers-img-container">
            <div className="nes-container is-rounded">
              <img
                class="main-img"
                src={require("../images/logo.webp")} /* get img */
                alt="barter pixel art"
              />
              <div className="infinite-img-x">
                {/* creare elemento per immagini e collegarlo ad API */}
              </div>
            </div>
          </div>

          <progress>{/* get progress api */}</progress>

          <div className="nes-container is-rounded with-title">
            <h3 className="title"> Description </h3>
            BLA1 BLA2 {/* get description */}
          </div>
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
              class="nes-btn is-warning"
              /* onClick={modifyOffer} */
            >
              Modify
            </button>
            <button
              type="button"
              class="nes-btn is-error"
              /* onClick={removeOffer} */
            >
              Decline
            </button>
          </div>
        </div>
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            class="nes-btn is-primary"
            onClick={navigate("/sendmessage")}
          >
            Send a Message to (name of the user in case)
          </button>
          <button
            type="button"
            class="nes-btn is-primary"
            onClick={navigate("/offers")}
          >
            Back to Offers
          </button>
          <button
            type="button"
            class="nes-btn is-primary"
            onClick={navigate("/home")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferSent;
