import { useEffect } from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loading from "./Loading";

const Offers = () => {
  useEffect(() => {
    const getOffers = async () => {
      const resSentOffers = await fetch(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/offers/sent`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const dataSentOffers = await resSentOffers.json();
      console.log("Sent: ", dataSentOffers);
      const resReceivedOffers = await fetch(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/offers/received`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const dataReceivedOffers = await resReceivedOffers.json();
      console.log("Received: ", dataReceivedOffers);
    };
    getOffers();
  }, []);
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
              {/* RENDER OFFERS RECEIVED

              {offers.map((offer) => (
                <div key={offer._id} className="infinite-img-x">
                  personal ITEMS Gallery
                  <button onClick={() => deleteSelectedItem(item._id)}>
                    x
                  </button>

                  <Link to={`/auth/offerreceived?id=${offer._id}`}>
                    <div
                      className="nes-container with-title"
                      id="item-img-container"
                    >
                      <h3 className="title" id="smallfont">
                        {item.title}
                      </h3>

                      <img
                        className="item-img"
                        src={item.image}
                        alt="item img"
                      />
                    </div>
                  </Link>
                </div>
              ))}  */}
            </div>
          </div>
          <div className="nes-container is-rounded with-title">
            <h3 className="title"> Offers Sent </h3>
            <div className="infinite-img-x">
              {/* RENDER OFFERS SENT

              {offers.map((offer) => (
                <div key={offer._id} className="infinite-img-x">
                  personal ITEMS Gallery
                  <button onClick={() => deleteSelectedItem(item._id)}>
                    x
                  </button>

                  <Link to={`/auth/offersent?id=${offer._id}`}>
                    <div
                      className="nes-container with-title"
                      id="item-img-container"
                    >
                      <h3 className="title" id="smallfont">
                        {item.title}
                      </h3>

                      <img
                        className="item-img"
                        src={item.image}
                        alt="item img"
                      />
                    </div>
                  </Link>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/messages")}
          >
            Messages
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
            onClick={() => navigate("/auth/home")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
