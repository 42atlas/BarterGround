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
import axios from "axios";

const Home = () => {
  const [messages, setMessages] = useState("");
  const [offers, setOffers] = useState("");

  const [alertMessages, setAlertMessages] = useState("");
  const [alertOffers, setAlertOffers] = useState("");

  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { user, loading } = useAuth();

  //set all + api call | alert |class="nes-text is-warning"| id="blinking"

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BARTERGROUND_API_URL}/offers/received`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((resReceivedOffers) => resReceivedOffers.json())
      .then((dataReceivedOffers) => {
        console.log("Received offers: ", dataReceivedOffers);
        setOffers(dataReceivedOffers.length);
        console.log(offers);
      });
  }, []);

  useEffect(() => {
    if (offers === 0) setAlertOffers("nes-text is-disabled");
    if (offers > 0) setAlertOffers("blinking");
  }, [offers]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/received`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((resReceivedMessages) => resReceivedMessages.json())
      .then((dataReceivedMessages) => {
        console.log("Received messages: ", dataReceivedMessages);
        setMessages(dataReceivedMessages.length);
        console.log(messages);
      });
  }, []);

  useEffect(() => {
    if (messages === 0) setAlertMessages("nes-text is-disabled");
    if (messages > 0) setAlertMessages("blinking");
  }, [messages]);

  /*   const alertoffers = () => {
      if (offers === 0) { setAlertOffers("nes-text is-disabled") }
      else if (offers !== 0) { setAlertOffers("blinking") }
    };
  
    const alertmessages = () => {
      if (messages === 0) { setAlertMessages("nes-text is-disabled") }
      else if (messages !== 0) { setAlertMessages("blinking") }
    };
   */

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
                <span className={alertOffers}>{offers} New Offers!!</span>
                {/* THIS */}
              </div>

              <div
                className="nes-container is-rounded"
                id="alert"
                onClick={() => navigate("/auth/messages")}
              >
                <span className={alertMessages}>{messages} New Messages!!</span>
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
