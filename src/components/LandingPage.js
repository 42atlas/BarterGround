import { useNavigate } from "react-router-dom";
import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div class="main-container">
      <div class="nes-container is-centered with-title" id="landing">
        <h3 class="title"> BarterGround </h3>
        <div class="internal-container">
          <img
            class="main-img"
            src={require("../images/exchange x10.gif")}
            alt="barter pixel art"
          />
          <div class="dimension-min">
            <div class="dimension-max">
              <button
                type="button"
                class="nes-btn is-primary"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
              <br></br>
              <button
                type="button"
                class="nes-btn"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
