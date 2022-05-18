import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import MageScreaming from "./characters/Merchants/MageScreaming";
import "../style/main.css";
import TextareaAutosize from "react-textarea-autosize";
import "nes.css/css/nes.min.css";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useAuth } from "../context/AuthContext";

const SendMessage = () => {
  /* const location = useLocation(); */

  const navigate = useNavigate();
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");

  /*   const [message, setMessage] = useState(location.state); */

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const { loading } = useAuth();

  const [{ title, body, reply }, setFormState] = useState({
    title: "",
    body: "",
    reply: "",
  });

  const handleMessageChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  useEffect(() => {
    if (id) {
      axios
        .get(
          `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/message/${id}`
        )
        .then((response) => {
          var result = response.data;
          setFormState({
            title: result.title,
            body: result.body,
          });
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const sendMessage = async (e) => {
    try {
      e.preventDefault();
      /* let fileObj = null; */
      /*
      if (!title || !file || !body || !category)
        return setError(true), setErrorMessage("NOTHING CAN BE LEFT EMPTY !"); */

      //TODO : Might need in future
      // if (!file) {
      //   fileObj = await getFileFromUrl(image, image.split("/").pop());
      // }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("body", body);
      await axios.put(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/message/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      navigate(`/auth/messages`);
    } catch (error) {
      console.log(error);
      return setError(true), setErrorMessage("SOMETHING IS WRONG !");
    }
  };

  /*   const handleMessageChange = (e) => {
    setMessage({
      ...message,
      message: e.target.value,
    });
  };
  console.log(message); */

  /*   const sendMessage = async () => {
    const { data, error } = await axios.put(
      `${process.env.REACT_APP_BARTERGROUND_API_URL}/messages/user/${message.id}`,
      { message }
    );
    if (data) {
      navigate("/auth/messages", true);
    } else {
      setErrorMessage(error);
    }
  }; */

  if (loading) return <Loading />;

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="middle-size">
        <h3 className="title"> Send Message </h3>
        <br />
        <div className="main-container">
          <h2 class="nes-text is-success">{title}</h2>
          <br />
          <div className="send-msg">
            <div id="fat-container">
              <MageScreaming />
            </div>
            <div class="nes-balloon from-left" id="bubble-send">
              <p>{body}</p>
            </div>
          </div>

          <div id="reply-area" class="item">
            <label for="textarea_field">Reply Here</label>
            <TextareaAutosize
              id="textarea_field"
              class="nes-textarea reply-textarea"
              spellcheck="false"
              value={reply}
              onChange={handleMessageChange}
              wrap="hard"
              placeholder="Dear Friend, lets organize the shipment, here is my phone number, call me..."
            />
          </div>
          <br />
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
