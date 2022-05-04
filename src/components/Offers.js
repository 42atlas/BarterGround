import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loading from "./Loading";

const Offers = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Trade Center </h3>
        <div className="internal-container">
          <img
            className="main-img"
            src={require("../images/logo.webp")}
            alt="barter pixel art"
          />

          <div className="nes-container is-rounded with-title">
            <h3 className="title"> Offers Received </h3>
            <div className="infinite-img-x">
              {/* select / onclick => details */}
            </div>
          </div>
          <div className="nes-container is-rounded with-title">
            <h3 className="title"> Offers Sent </h3>
            <div className="infinite-img-x">
              {/* select / onclick => details */}
            </div>
          </div>
        </div>
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={navigate("/messages")}
          >
            Messages
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
            onClick={navigate("/home")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
