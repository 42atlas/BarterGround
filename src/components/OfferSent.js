import React, { useState, useEffect } from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";
import axios from "axios";

const OfferSent = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [sentItems, setSentItems] = useState([]);

  /*   const [values, setValues] = useState([2]);
  const [status, setStatus] = useState("is - success");

  const [isAccept, setIsAccept] = useState();

  const acceptOffer = setIsAccept(true);
  const declineOffer = setIsAccept(false);

  const setBarColor = () => {
    if (values >= 2) {
      setStatus("is - success");
    } else if ((values = 1)) {
      setStatus("is - warning");
    } else {
      setStatus("is - error");
    }
  };

  const { getTrackProps, handles } = useRanger({
    min: 0,
    max: 4,
    stepSize: 1,
    values,
    onChange: setValues,
  }); */

  //const modifyOffer =
  //const removeOffer =

  /*   useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_BARTERGROUND_API_URL}/offers/${id}`)
        .then((response) => {
      

          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]); */

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BARTERGROUND_API_URL}/offers/${id}`, {
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

  const deleteOffer = async (id) => {};

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Offer Sent</h3>
        <div className="internal-container">
          {/* insert avatar + name */}
          <div className="offers-img-container">
            <div className="nes-container is-rounded">
              <img
                className="main-img"
                src={require("../images/logo.webp")} /* get img */
                alt="barter pixel art"
              />
            </div>
          </div>

          <div className="nes-container is-rounded with-title">
            <h3 className="title"> Description </h3>
            BLA1 BLA2 {/* get description */}
          </div>
          <div className="infinite-img-x">
            {/*  {items.map((item) => (
              <div key={item._id} className="infinite-img-x">
                

                <div
                  className="nes-container with-title"
                  id="item-img-container"
                >
                  <h3 className="title" id="smallfont">
                    {item.title}
                  </h3>

                  <img className="item-img" src={item.image} alt="item img" />
                </div>
              </div>
            ))} */}
          </div>

          <div className="acceptoffer">
            <button
              type="button"
              className="nes-btn is-warning"
              /* onClick={deleteOffer} */
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/sendmessage")}
          >
            Send a Message to (name of the user in case)
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/offers")}
          >
            Back to Offers
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

export default OfferSent;
