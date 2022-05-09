import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BardHome from "./characters/Bard/Bardhome";
import BoyHome from "./characters/Boy/Boyhome";
import BuilderHome from "./characters/Builder/Builderhome";
import DancerHome from "./characters/Dancer/Dancerhome";
import FarmerHome from "./characters/Farmer/Farmerhome";
import FishermanHome from "./characters/Fisherman/Fishermanhome";
import GirlHome from "./characters/Girl/Girlhome";
import InnKeeperHome from "./characters/InnKeeper/InnKeeperhome";
import MinerHome from "./characters/Miner/Minerhome";
import OldLadyHome from "./characters/OldLady/OldLadyhome";
import OldManHome from "./characters/OldMan/OldManhome";
import VillageGirlHome from "./characters/VillageGirl/VillageGirlhome";
import Loading from "./Loading";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const [messages, setMessages] = useState(0);
  const [offers, setOffers] = useState(0);

  const [alertMessages, setAlertMessages] = useState("nes-text is-disabled");
  const [alertOffers, setAlertOffers] = useState("nes-text is-disabled");

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useAuth();
  //set all + api call | alert class => "nes-text is-warning"

  const renderCharacter = (character) => {
    switch (character) {
      case "Bard":
        return <BardHome />;
      case "Boy":
        return <BoyHome />;
      case "Builder":
        return <BuilderHome />;
      case "Dancer":
        return <DancerHome />;
      case "Farmer":
        return <FarmerHome />;
      case "Fisherman":
        return <FishermanHome />;
      case "Girl":
        return <GirlHome />;
      case "InnKeeper":
        return <InnKeeperHome />;
      case "Miner":
        return <MinerHome />;
      case "OldLady":
        return <OldLadyHome />;
      case "OldMan":
        return <OldManHome />;
      case "VillageGirl":
        return <VillageGirlHome />;
      default:
        <div>SOMETHING VERY WRONG</div>;
    }
  };

  if (loading) return <Loading />;

  return (
    user && (
      <div className="main-container">
        <div className="nes-container is-centered with-title" id="landing">
          <h3 className="title"> Welcome Back </h3>

          <div className="internal-container">
            <br></br>
            <h1>{user.name}</h1>
            <div className="home-container">
              <div
                className="nes-container is-rounded"
                id="alert"
                onClick={() => navigate("/auth/offers")}
              >
                <span className={alertOffers}>
                  {/* {offers} */} New Offers!!
                </span>{" "}
                {/* THIS */}
              </div>

              <div
                className="nes-container is-rounded"
                id="alert"
                onClick={() => navigate("/auth/messages")}
              >
                <span className={alertMessages}>
                  {/* {messages} */} New Messages!!
                </span>{" "}
                {/* THIS */}
              </div>
            </div>
            <div>{renderCharacter(user.character)}</div>
          </div>
        </div>
        <div className="nes-container is-centered" id="landing">
          <div className="buttons-container">
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={() => navigate("/auth/items")}
            >
              Items
            </button>
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={() => navigate("/auth/exchange")}
            >
              Exchange
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
    )
  );
};

export default Home;
