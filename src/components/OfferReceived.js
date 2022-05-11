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
  const [offerData, setOfferData] = useState(null)
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
        .then((response) => {
          const { offeredProducts, ...rest } = response.data
          setOfferProducts(offeredProducts);
          setOfferData(rest)
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

  const declineOffer = async () => {
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

  const acceptOffer = async () => {
    try {
      await axios
        .post(`${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/user/${offerData.initiator}`, {
          title: 'Offer accepted', body: `Your offer for ${post.title} was accepted for ${offerProducts.map(p => p.title).join(', ')}`
        }, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }).then(() => {

          axios.delete(`${process.env.REACT_APP_BARTERGROUND_API_URL}/offers/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          })
        });
      navigate(`/auth/home`);
      /* .then((response) => {
        axios.post(`${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/`);
        console.log(response);
      }); */
      /* const { data } = await axios.get(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/user/${user._id}`
      );
      console.log(data);
      setMessages(data); */
    } catch (error) {
      console.log(error.response?.data.error || error.message);
      setError(true);
      setErrorMessage("SOMETHING WENT WRONG !");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  console.log("post", post);
  console.log("offerProducts", offerProducts);
  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="landing">
        <h3 className="title"> Offer Received</h3>
        <div className="main-container">
          {/* insert avatar + name */}

          <div className="nes-container is-rounded">
            <div className="storeitem-img">
              <img className="item-img-container" src={post.image} alt="item" />
            </div>
          </div>
          <br />
          <br />
          <div>{post.title}</div>
          <br />
          <div className="nes-container is-rounded with-title">
            <h3 className="title"> Description </h3>
            {post.body}
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
        </div>
        <div className="flexibutton">
          <button
            type="button"
            className="nes-btn is-success"
            onClick={acceptOffer}
          >
            Accept
          </button>
          <button
            type="button"
            className="nes-btn is-error"
            onClick={declineOffer}
          >
            Decline
          </button>
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
            onClick={() => navigate("/auth/Items")}
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

export default OfferReceived;
