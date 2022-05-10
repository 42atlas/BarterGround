import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loading from "./Loading";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import FatMerchantSelling from "./characters/Merchants/FatMerchantSelling";
import FatMerchantStall from "./characters/Merchants/FatMerchantStall";
import SwordMerchantNo from "./characters/Merchants/SwordMerchantNo";

const Offers = () => {
  const [received, setReceived] = useState([]);
  const [sent, setSent] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [recItems, setRecItems] = useState([]);
  const [sentItems, setSentItems] = useState([]);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /*   const getRecItems = async (product) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${product}`
      );
      var currentItems = recItems;
      currentItems.push(data);
      //console.log(data);
      setRecItems(currentItems);
    } catch (error) {
      console.log(error.response?.data.error || error.message);
      setError(true);
      setErrorMessage("SOMETHING WENT WRONG !");
    }
  }; */

  /*   const getSentItems = async (product) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${product}`
      );
      var result = sentItems;
      result.push(data);
      setSentItems(result);
      console.log(sentItems);
    } catch (error) {
      console.log(error.response?.data.error || error.message);
      setError(true);
      setErrorMessage("SOMETHING WENT WRONG !");
    }
  }; */

  // sent offers

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BARTERGROUND_API_URL}/offers/sent`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((resSentOffers) => resSentOffers.json())
      .then((dataSentOffers) => {
        console.log("Sent: ", dataSentOffers);
        var arr = [];
        dataSentOffers.forEach(async (offer, index) => {
          try {
            const { data } = await axios.get(
              `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${offer.product}`
            );
            data.offer_id = offer._id;
            arr.push(data);
            console.log(arr);
            if (arr.length === dataSentOffers.length) {
              //setSentItems([]);
              setSentItems(arr);
              console.log("Set me to state");
            }
          } catch (error) {
            console.log(error.response?.data.error || error.message);
            setError(true);
            setErrorMessage("SOMETHING WENT WRONG !");
          }
        });
      });
  }, []);

  // received offers

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BARTERGROUND_API_URL}/offers/received`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((resReceivedOffers) => resReceivedOffers.json())
      .then((dataReceivedOffers) => {
        dataReceivedOffers.forEach(async (offer) => {
          try {
            const { data } = await axios.get(
              `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${offer.product}`
            );
            data.offer_id = offer._id;
            setRecItems([...recItems, data]);
            console.log(recItems);
          } catch (error) {
            console.log(error.response?.data.error || error.message);
            setError(true);
            setErrorMessage("SOMETHING WENT WRONG !");
          }
        });
      });
  }, []);

  /*   useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${received.product}`
      )
      .then((response) => {
        var result = response.data;
        setTitle(result.title);
        setImage(result.image);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${sent.product}`
      )
      .then((response) => {
        var result = response.data;
        setTitle(result.title);
        setImage(result.image);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); */

  if (loading) return <Loading />;
  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="middle-size">
        <h3 className="title"> Trade Center </h3>
        <div className="internal-container">
          <FatMerchantStall />
          <FatMerchantSelling />
          <SwordMerchantNo />
          {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <div className="char-div">
            <div
              className="nes-container is-rounded with-title"
              id="minus-margin-top-round"
            >
              <h3 className="title"> Offers Received </h3>
              <div className="infinite-img-x">
                {recItems.map((offer, index) => (
                  <div key={index} className="infinite-img-x">
                    <Link to={`/auth/offerreceived?id=${offer.offer_id}`}>
                      <div
                        className="nes-container with-title"
                        id="item-img-container"
                      >
                        <h3 className="title" id="smallfont">
                          {offer.title}
                        </h3>

                        <img
                          className="item-img"
                          src={offer.image}
                          alt="item img"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="nes-container is-rounded with-title"
              id="margin-top-round"
            >
              <h3 className="title"> Offers Sent </h3>
              <div className="infinite-img-x">
                {sentItems.map((offer, index) => (
                  <div key={index} className="infinite-img-x">
                    <Link to={`/auth/offersent?id=${offer.offer_id}`}>
                      <div
                        className="nes-container with-title"
                        id="item-img-container"
                      >
                        <h3 className="title" id="smallfont">
                          {offer.title}
                        </h3>

                        <img
                          className="item-img"
                          src={offer.image}
                          alt="item img"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nes-container is-centered " id="middle-size">
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
            onClick={() => navigate("/auth/home")}
          >
            Home
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/exchange")}
          >
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
