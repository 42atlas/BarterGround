import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import BardHome from "./characters/Bard/Bardhome";
import BoyHome from "./characters/Boy/Boyhome";
import BuilderHome from "./characters/Builder/Builderhome";
import DancerHome from "./characters/Dancer/Dancerhome";
import FarmerHome from "./characters/Farmer/Farmhome";
import FishermanHome from "./characters/Fisherman/Fishermanhome";
import GirlHome from "./characters/Girl/Girlhome";
import InnKeeperHome from "./characters/InnKeeper/InnKeeperhome";
import MinerHome from "./characters/Miner/Minerhome";
import OldLadyHome from "./characters/OldLady/OldLadyhome";
import OldManHome from "./characters/OldMan/OldManhome";
import VillageGirlHome from "./characters/VillageGirl/VillageGirlhome";
import Loading from "./Loading";

const Home = () => {
  const [messages, setMessages] = useState(0);
  const [offers, setOffers] = useState(0);
  const [alertMessages, setAlertMessages] = useState("nes-text is-disabled");
  const [alertOffers, setAlertOffers] = useState("nes-text is-disabled");
  const [char, setChar] = useState();
  const navigate = useNavigate();

  //set all + api call | alert class => "nes-text is-warning"

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Welcome Back </h3>

        <div className="internal-container">
          <br></br>
          <h1>{/* {name} */}NAME</h1>
          <div className="home-container">
            <div
              className="nes-container is-rounded"
              id="alert"
              onClick={navigate("/offers")}
            >
              <span className={alertOffers}>{offers} New Offers!!</span>
            </div>
            <div>
              {/* {char} */} <OldLadyHome />
            </div>
            <div
              className="nes-container is-rounded"
              id="alert"
              onClick={navigate("/messages")}
            >
              <span className={alertMessages}>{messages} New Messages!!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={navigate("/items")}
          >
            Items
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
            onClick={navigate("/messages")}
          >
            Messages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
