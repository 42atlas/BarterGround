import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";

const SendMessage = () => {
  const navigate = useNavigate();
  /* sendMessage= something */

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Send Message </h3>

        <div className="internal-container">
          <div className="send-msg">
            {/* select / type user */}
            {/* creare elemento per messaggi e collegarlo ad API / msg-containers click on msg go to msg send/edit*/}
          </div>
          <button
            type="button"
            className="nes-btn is-success"
          /* onClick={sendMessage} */
          >
            Send Message
          </button>
        </div>
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={navigate("/auth/home")}
          >
            Home
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={navigate("/auth/offers")}
          >
            Offers
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={navigate("/auth/messages")}
          >
            Messages
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
