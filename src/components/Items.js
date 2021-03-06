import React, { useState, useEffect } from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Link } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Listed from "./characters/iconsmine/listedicon";

const Items = () => {
  const navigate = useNavigate();

  const { user, loading } = useAuth();
  const [items, setItems] = useState([]);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const deleteSelectedItem = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const { data } = await axios.get(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/user/${user._id}`
      );
      console.log(data);
      setItems(data);
      //console.log(data);
    } catch (error) {
      console.log(error.response?.data.error || error.message);
      setError(true);
      setErrorMessage("SOMETHING WENT WRONG !");
    }
  };

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
        <br />
        <img
          src={require("./characters/iconsmine/listed.png")}
          alt="is cek"
          id="cek"
        />{" "}
        = IS LISTED
        <div className="internal-container">
          <div className="infinite-img-x">
            {items.map((item) => (
              <div>
                <div key={item._id} className="infinite-img-x">
                  {/*personal ITEMS Gallery*/}

                  <Link to={`/auth/storeitem?id=${item._id}`}>
                    <div
                      className="nes-container with-title"
                      id="item-img-container"
                    >
                      <h3 className="title" id="smallfont">
                        {item.title} {item.isListed && <Listed />}
                      </h3>

                      <img
                        className="item-img"
                        src={item.image}
                        alt="item img"
                      />
                    </div>
                  </Link>
                </div>
                <div>
                  <span
                    id="is-error"
                    onClick={() => deleteSelectedItem(item._id)}
                  >
                    ERASE
                  </span>
                </div>
              </div>
            ))}
          </div>
          <br />
          <button
            type="button"
            className="nes-btn is-success"
            onClick={() => navigate("/auth/storeitem")}
          >
            Store an Item
          </button>
        </div>
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/offers")}
          >
            Offers
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

export default Items;
