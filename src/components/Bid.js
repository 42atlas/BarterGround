import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loading from "./Loading";

const Bid = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [items, SetItems] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [makeOffer, setMakeOffer] = useState(false);

  const doOffer = setMakeOffer(true);

  const handleSubmit = () => {
    if (!items) {
      setError(true);
      setErrorMessage("NO NO NO YOU HAVE TO OFFER SOMETHING!");
      return;
    } else {
      setError(false);
    }
  };

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Make an Offer </h3>
        <div className="internal-container">
          <div className="nes-container is-rounded">
            <img
              className="main-img"
              src={require("../images/logo.webp")}
              alt="barter pixel art"
            />
          </div>
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
          <div className="infinite-img-x">
            {/* select / type user */}
            {/* creare elemento per immagini e collegarlo ad API / msg-containers click on msg go to msg send/edit*/}
          </div>
          <button
            type="button"
            className="nes-btn is-success"
            onClick={doOffer}
          >
            Make the Offer
          </button>
        </div>
        {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={navigate("/sendmessage")}
          >
            Send a Message to (name of the user in case)
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={navigate("/exchange")}
          >
            Back to Exchange
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={navigate("/items")}
          >
            Your Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bid;
