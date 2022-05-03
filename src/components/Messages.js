import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";

const Messages = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Messages </h3>

        <div className="internal-container">
          <div className="infinite-msg-y">
            {/* creare elemento per messaggi e collegarlo ad API / msg-containers click on msg go to msg send/edit*/}
          </div>
          <button
            type="button"
            class="nes-btn is-primary"
            onClick={navigate("/sendmessage")}
          >
            Send a Message
          </button>
        </div>
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            class="nes-btn is-primary"
            onClick={navigate("/Home")}
          >
            Home
          </button>
          <button
            type="button"
            class="nes-btn is-primary"
            onClick={navigate("/offers")}
          >
            Offers
          </button>
          <button
            type="button"
            class="nes-btn is-primary"
            onClick={navigate("/exchange")}
          >
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
