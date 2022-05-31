import { Navigate, useNavigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../context/AuthContext";
import "../style/main.css";
import "nes.css/css/nes.min.css";

const LandingPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  if (isAuthenticated) return <Navigate to="/auth/home" replace />;
  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="landing">
        <h1 className="title"> BarterGround </h1>
        <div className="internal-container">
          <img
            className="main-img"
            src={require("../images/exchange x10.gif")}
            alt="barter pixel art"
          />
          <div className="dimension-min">
            <div className="dimension-max">
              <button
                type="button"
                className="nes-btn is-primary"
                onClick={() => navigate("register")}
              >
                Register
              </button>
              <br></br>
              <button
                type="button"
                className="nes-btn"
                onClick={() => navigate("login")}
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
