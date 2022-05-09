import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

const OfferReceived = () => {
  const navigate = useNavigate();
  const [isOffer, setIsOffer] = useState();

  /*   const [values, setValues] = useState([2]);
  const [status, setStatus] = useState("is-success");
  const [isAccept, setIsAccept] = useState();



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
  }); */

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Offer Received </h3>
        <div className="internal-container">
          {/* insert avatar + name */}
          <div className="offers-img-container">
            <div className="nes-container is-rounded">
              <img
                className="main-img"
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
            BLA1 BLA2
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
              className="nes-btn is-success"
              onClick={setIsOffer(true)}
            >
              Accept
            </button>
            <button
              type="button"
              className="nes-btn is-error"
              onClick={setIsOffer(false)}
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
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/sendmessage")}
          >
            Send a Message to (name of the user in case)
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/offers")}
          >
            Back to Offers
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/home")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferReceived;
