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

  const [isLoading, setIsLoading] = useState(true);
  const [offer, setOffer] = useState(null);
  const [offerProducts, setOfferProducts] = useState([]);
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

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_BARTERGROUND_API_URL}/offers/${id}`)
        .then(async (response) => {

          setOfferProducts(response.data.offeredProducts);
          return axios.get(
            `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${response.data.product}`
          );
        })
        .then((response) => {
          setOffer(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [id]);
  if (isLoading) {
    return <Loading />;
  }
  const deleteOffer = async () => {
    try {
      await axios
        .delete(`${process.env.REACT_APP_BARTERGROUND_API_URL}/offers/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
        });
      /* const { data } = await axios.get(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/user/${user._id}`
      );
      console.log(data);
      setMessages(data); */
      navigate(`/auth/offers`);
    } catch (error) {
      console.log(error.response?.data.error || error.message);
      setError(true);
      setErrorMessage("SOMETHING WENT WRONG !");
    }
  };

  console.log("offer", offer);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="landing">
        <h3 className="title"> Offer Sent</h3>
        <div className="main-container">
          {/* insert avatar + name */}

          <div className="nes-container is-rounded">
            <div className="storeitem-img">
              <img
                className="item-img-container"
                src={offer.image} /* get img */
                alt="item"
              />
            </div>
          </div>
          <br />
          <br />
          <div>{offer.title}</div>
          <br />
          <div className="nes-container is-rounded with-title">
            <h3 className="title"> Description </h3>
            {offer.body}
          </div>
          <br />
          <div className="infinite-img-x">
            {offerProducts.map((item) => (
              <div key={item._id} className="infinite-img-x-marg">
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
            ))}
          </div>
          <br />
          <div className="acceptoffer">
            <button
              type="button"
              className="nes-btn is-error"
              onClick={deleteOffer}
            >
              Delete the Offer
            </button>
          </div>
        </div>
      </div>
      <div className="nes-container is-centered" id="landing">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/offers")}
          >
            Back
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/items")}
          >
            Treasure
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
