import React, { useState, useEffect } from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate, Link } from "react-router-dom";
import Loading from "./Loading";
import axios from 'axios'
import { useAuth } from "../context/AuthContext";
import ErrorMessage from "./ErrorMessage/ErrorMessage";



const Items = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const { user, isAuthenticated, loading } = useAuth()
  const [items, setItems] = useState([]);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getItems = async () => {
      try {

        const { data } = await axios.get(`${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/user/${user._id}`)
        console.log(data)
        setItems(data);

      } catch (error) {
        console.log(error.response?.data.error || error.message);
        setError(true);
        setErrorMessage("SOMETHING WENT WRONG !");

      }
    }
    user && getItems()
  }, [user]);

  if (loading) return <Loading />;

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Your Treasure </h3>
        <br />
        <div className="main-container">
          <img
            className="gif-img"
            src={require("../images/chest x10.gif")}
            alt="chest pixel art"
          />
        </div>
        {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <div className="internal-container">
          <div className="infinite-img-x">
            {items.map(item => (

              <div key={item._id} className="infinite-img-x">


                {/*personal ITEMS Gallery*/}
                <Link to={`/auth/storeitem/${item._id}`}>
                  <div
                    className="nes-container with-title"
                    id="item-img-container"
                  >
                    <h3 className="title"> {item.title} </h3>

                    <img
                      className="item-img"
                      src={item.image}
                      alt="item img"
                    />


                  </div>
                </Link>
              </div>
            ))}
          </div>
          <br />
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/storeitem")}
          >
            Store an Item
          </button>
        </div>
      </div >
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/offers")}
          >
            Offers
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/exchange")}
          >
            Exchange
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/messages")}
          >
            Messages
          </button>
        </div>
      </div>
    </div >
  );
};

export default Items;
