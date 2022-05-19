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
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessagesLenght, setReceivedMessagesLength] = useState("");
  const [sentMessagesLenght, setSentMessagesLength] = useState("");

  /*   useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages`
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
 */

  useEffect(() => {
    const getSentMessages = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/sent`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setSentMessages(data);
      } catch (error) {
        console.log(error.response?.data.error || error.message);
        setError(true);
        setErrorMessage("SOMETHING WENT WRONG !");
      }
    };
    user && getSentMessages();
  }, [user]);
  console.log(sentMessages);

  useEffect(() => {
    const getReceivedMessages = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/received`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setReceivedMessages(data);
      } catch (error) {
        console.log(error.response?.data.error || error.message);
        setError(true);
        setErrorMessage("SOMETHING WENT WRONG !");
      }
    };
    user && getReceivedMessages();
  }, [user]);
  console.log(receivedMessages);

  /*  useEffect(() => {
    const { data } = fetch(
      `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/received`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((resReceivedMessages) => resReceivedMessages.json())
      .then((dataReceivedMessages) => {
        console.log("Received messages: ", dataReceivedMessages);


        setReceivedMessagesLength(dataReceivedMessages.length);
      });
    setReceivedMessages(data);
    console.log(receivedMessages);
  }, [user, receivedMessages]);

  useEffect(() => {
    const { data } = fetch(
      `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/sent`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((resSentMessages) => resSentMessages.json())
      .then((dataSentMessages) => {
        console.log("Sent messages: ", dataSentMessages);
        setSentMessagesLength(dataSentMessages.length);
        setSentMessages(data);
        console.log(sentMessages);
      });
    setSentMessages(data);
    console.log(sentMessages);
  }, [user, sentMessages]); */

  const deleteSelectedMessage = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error.response?.data.error || error.message);
      setError(true);
      setErrorMessage("SOMETHING WENT WRONG !");
    }
  };

  if (loading) return <Loading />;
  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="middle-size">
        <h3 className="title"> Messages </h3>

        <div className="main-container">
          <div className="nes-container is-rounded is-centered with-title">
            <h3 className="title"> Sent Messages </h3>
            <div className="infinite-msg-y">
              {sentMessages.map((message) => (
                <div key={message._id} className="infinite-msg-y">
                  <div
                    className="nes-container with-title"
                    id="msg-img-container"
                  >
                    <h3 className="title"> {message.title} </h3>
                    <Link
                      to={`/auth/sendmessage?id=${message._id}`}
                      state={message}
                    >
                      {message.body}
                    </Link>
                  </div>

                  <span
                    id="is-error"
                    onClick={() => deleteSelectedMessage(message._id)}
                  >
                    DELETE
                  </span>
                </div>
              ))}
            </div>
          </div>
          <br></br>
          <div className="nes-container is-rounded is-centered with-title">
            <h3 className="title"> Received Messages </h3>
            <div className="infinite-msg-y">
              {receivedMessages.map((message) => (
                <div key={message._id} className="infinite-msg-y">
                  <div
                    className="nes-container with-title"
                    id="msg-img-container"
                  >
                    <h3 className="title"> {message.title} </h3>
                    <Link
                      to={`/auth/sendmessage?id=${message._id}`}
                      state={message}
                    >
                      {message.body}
                    </Link>
                  </div>

                  <span
                    id="is-error"
                    onClick={() => deleteSelectedMessage(message._id)}
                  >
                    DELETE
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>

      <div className="nes-container is-centered" id="middle-size">
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
            onClick={() => navigate("/auth/exchange")}
          >
            Exchange
          </button>

          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/offers")}
          >
            Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
