import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import MageScreaming from "./characters/Merchants/MageScreaming";
import "../style/main.css";
import "../style/sendmessage.css";
import "nes.css/css/nes.min.css";

const SendMessage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState(location.state);
  const [errorMessage, setErrorMessage] = useState("");
  const handleMessageChange = (e) => {
    setMessage({
      ...message,
      title: e.target.value,
    });
  };
  console.log(message);
  const sendMessage = async () => {
    const { data, error } = await axios.put(
      `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/user/${message.author}`,
      { message }
    );
    if (data) {
      navigate("/auth/messages", true);
    } else {
      setErrorMessage(error);
    }
  };

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="middle-size">
        <h3 className="title"> Send Message </h3>

        <div className="main-container">
          <div className="send-msg">
            <div id="fat-container">
              <MageScreaming />
            </div>
            <div id="speech-bubble" onChange={handleMessageChange}>
              <textArea
                className="text-area-message"
                /* id="p" */
                onChange={handleMessageChange}
                rows={5}
              >
                {/*  <p contenteditable="true"> */}
                {message.title}
                <hr />
                {message.body}
                {/* </p> */}
              </textArea>
            </div>
          </div>
          <div className="main-container">
            <button
              type="button"
              className="nes-btn is-success"
              id="smaller-btn"
              onClick={sendMessage}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="nes-container is-centered" id="middle-size">
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
            onClick={() => navigate("/auth/messages")}
          >
            Messages
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
