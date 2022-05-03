import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";

const Exchange = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Exchange </h3>
        <div className="internal-container">
          <div class="nes-field">
            <input
              type="text"
              id="inline_field"
              class="nes-input"
              placeholder="Search"
            />
          </div>

          <select id="default_select">
            <option value="" disabled="" selected="" hidden="">
              Select...
            </option>
            <option value="0">Cat1</option>
            <option value="1">Cat2</option>
          </select>
          <div className="infinite-img-y">
            {/* creare elemento per immagini e collegarlo ad API / img-containers */}
            navigate("/bid")
          </div>
        </div>
        <div className="nes-container is-centered">
          <div className="buttons-container">
            <button
              type="button"
              class="nes-btn is-primary"
              onClick={navigate("/storeitem")}
            >
              List your Item
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
              onClick={navigate("/messages")}
            >
              Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
