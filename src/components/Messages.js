import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useAuth } from "../context/AuthContext";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import axios from "axios";

const Messages = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { user, loading } = useAuth();

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/user/${user._id}`
        );
        console.log(data);
        setMessages(data);
      } catch (error) {
        console.log(error.response?.data.error || error.message);
        setError(true);
        setErrorMessage("SOMETHING WENT WRONG !");
      }
    };
    user && getMessages();
  }, [user]);

  const deleteSelectedMessage = async (id) => {
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
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/${user._id}`
      );
      console.log(data);
      setMessages(data);
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
        <h3 className="title"> Messages </h3>

        <div className="internal-container">
          <div className="infinite-msg-y">
            {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {messages.map((message) => (
              <div key={message._id} className="infinite-msg-y">
                {/*offered ITEMS Gallery*/}
                <Link to={`/auth/sendmessage?id=${message._id}`}>
                  <div
                    className="nes-container with-title"
                    id="msg-img-container"
                  >
                    <h3 className="title" id="smallfont">
                      {message.title}
                    </h3>
                    {message.body}
                    <button onClick={() => deleteSelectedMessage(message._id)}>
                      x
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/Home")}
          >
            Home
          </button>
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
            onClick={() => navigate("/auth/exchange")}
          >
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
