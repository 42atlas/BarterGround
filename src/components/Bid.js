import React, { useState, useEffect } from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";
import axios from "axios";

const Bid = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedForBid, setSelectedForBid] = useState([]);
  const [image, setImage] = useState(null);
  const [isOffer, setIsOffer] = useState(false);
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const { user, loading } = useAuth();

  const [{ title, body, owner }, setFormState] = useState({
    title: "",
    body: "",
    owner: "",
  });

  /*   const handleInput = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value })); */

  /*   const handleSubmit = () => {
    if (!items) {
      setError(true);
      setErrorMessage("NO NO NO YOU HAVE TO OFFER SOMETHING!");
      return;
    } else {
      setError(false);
    }
  }; */

  //get data of the item

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${id}`)
      .then((response) => {
        var result = response.data;
        setFormState({
          title: result.title,
          body: result.body,
          owner: result.author._id,
        });

        setImage(result.image);

        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //get your items

  useEffect(() => {
    const getItems = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/user/${user._id}`
        );
        console.log(data);
        setItems(data);
      } catch (error) {
        console.log(error.response?.data.error || error.message);
        setError(true);
        setErrorMessage("SOMETHING WENT WRONG !");
      }
    };
    user && getItems();
  }, [user]);

  const doOffer = async (e) => {
    try {
      e.preventDefault();

      if (!selectedForBid.length)
        return setError(true), setErrorMessage("PLEASE ADD SOME ITEMS!");

      await axios.post(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/offers`,
        {
          owner,
          product: id,
          offeredProducts: selectedForBid.map((prod) => prod._id),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      /* 
      - Router for offers (offersRouter) 
      - All methods should be protected 
      - Model for Offers 
      {
        product: product id  of product to bid for,
        offers: [
          productids 
        ],
        initiator: userid
      }
      - POST /offers 
  
      */
      navigate(`/auth/offers`);
    } catch (error) {
      return setError(true), setErrorMessage("SOMETHING IS WRONG !");
    }
  };

  const handleInputItem = (e) =>
    setSelectedForBid((prev) => [...new Set([...prev, items[e.target.value]])]);

  /*
  <div className="infinite-img-x">
       personal ITEMS Gallery
         <button onClick={() => deleteSelectedItem(item._id)}>x</button> 

        <div className="nes-container with-title" id="item-img-container">
          <h3 className="title" id="smallfont">
            {titleI}
          </h3>

          <img className="item-img" src={imageI} alt="item img" />
        </div>
      </div >
        */

  if (loading) return <Loading />;

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="landing">
        <h3 className="title"> Make an Offer </h3>
        <div className="main-container">
          <div className="nes-container is-rounded">
            <div className="storeitem-img">
              <img className="item-img" src={image} alt="Item" />
              <br />
            </div>
          </div>
          <br />
          <br />
          <div>{title}</div>
          <br />
          <div className="nes-container is-rounded with-title">
            <h3 className="title"> Description </h3>
            {body}
          </div>
          <br />
          <br />
          <label>Select one or more Items to add to the offer</label>
          <div className="nes-select">
            <select id="item" onChange={handleInputItem}>
              {items.map((item, index) => (
                <option key={index} value={index}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div className="infinite-img-x">
            {/* personal ITEMS Gallery */}
            {selectedForBid.map((item) => (
              <div className="infinite-img-x-marg">
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
            {/* <button onClick={() => deleteSelectedItem(item._id)}>x</button>  */}
          </div>

          <br />
          {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <button
            type="button"
            className="nes-btn is-success"
            onClick={doOffer}
          >
            Make the Offer
          </button>
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
            onClick={() => navigate("/auth/exchange")}
          >
            Back to Exchange
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/items")}
          >
            Your Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bid;
