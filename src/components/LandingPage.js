/* import { Link, NavLink, Outlet } from "react-router-dom"; */
import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";

const LandingPage = () => {
  return (
    <div class="main-container">
      <div class="nes-container is-centered with-title">
        <h3 class="title"> Barter RPG </h3>
        <div class="nes-brand-logo">
          <a class="nes-btn is-primary" href="#">
            Register
          </a>
          <br></br>
          <a class="nes-btn" href="#">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
