import React from "react";
import "../style/main.css";
import "../style/sendmessage.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";
import MageScreaming from "./characters/Merchants/MageScreaming";

const SendMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="middle-size">
        <h3 className="title"> Send Message </h3>

        <div className="main-container">
          <div className="send-msg">
            <div id="fat-container">
              <MageScreaming />
            </div>
            <div id="speech-bubble">
              <p contenteditable="true">MESSAGE GO HERE XD</p>
            </div>
          </div>
          <div className="main-container">
            <button
              type="button"
              className="nes-btn is-success"
              id="smaller-btn"
              /* onClick={sendMessage} */
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="nes-container is-centered" id="middle-size">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/offers")}
          >
            Offers
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
            onClick={() => navigate("/auth/messages")}
          >
            Messages
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
