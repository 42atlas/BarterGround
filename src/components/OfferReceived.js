import React, { useState, useEffect } from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";
import axios from "axios";

const OfferReceived = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const [post, setPost] = useState(null);
  const [offerProducts, setOfferProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const id = new URLSearchParams(search).get("id");

  /*   const [values, setValues] = useState([2]);
  const [status, setStatus] = useState("is-success");
  const [isAccept, setIsAccept] = useState();



  const setBarColor = () => {
    if (values >= 2) {
      setStatus("is-success");
    } else if ((values = 1)) {
      setStatus("is-warning");
    } else {
      setStatus("is-error");
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
          const offeredProductsDetails = await Promise.all(
            response.data.offeredProducts.map(async (offeredProduct) => {
              let productDetails = await axios.get(
                `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${offeredProduct}`
              );
              return productDetails.data;
            })
          );

          setOfferProducts(offeredProductsDetails);
          return axios.get(
            `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${response.data.product}`
          );
        })
        .then((response) => {
          setPost(response.data);
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

  console.log("post", post);
  console.log("offerProducts", offerProducts);
  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Offer Sent</h3>
        <div className="internal-container">
          {/* insert avatar + name */}
          <div className="offers-img-container">
            <div className="nes-container is-rounded">
              <img
                className="item-img-container"
                src={post.image} /* get img */
                alt="barter pixel art"
              />
            </div>
          </div>

          <div className="nes-container is-rounded with-title">
            <h3 className="title"> Description </h3>
            {post.body}
          </div>
          <div className="infinite-img-x">
            {offerProducts.map((item) => (
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
            ))}
          </div>
          <div className="acceptoffer">
            <button
              type="button"
              className="nes-btn is-success"
              /* onClick={setIsOffer(true)} */
            >
              Accept
            </button>
            <button
              type="button"
              className="nes-btn is-error"
              /*  onClick={setIsOffer(false)} */
            >
              Decline
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

export default OfferReceived;
