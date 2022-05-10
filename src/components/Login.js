import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import KeysIcon from "./characters/iconsShadow/keysicon";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";
/* import emailjs from "@emailjs/browser"; */

const Login = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  /*   const [pwd, setPwd] = useState(false); */
  const [{ email, password }, setFormState] = useState({
    email: "",
    password: "",
  });
  const { isAuthenticated, loading, loginUser } = useAuth();
  /*   const navigate = useNavigate(); */

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setError(true);
    setErrorMessage("WRONG DATA!");
    await loginUser({ email, password });
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  /*  const handlePasswordLost = setPwd(!pwd);
  
  const form = useRef();

    const handleSendmail = (e) => {
      e.preventDefault();
      if (!email) {
        setError(true);
        setErrorMessage("... EMAIL PLEASE!");
        return;
      } else {
        setError(false);
        emailjs
          .sendForm(
            "service_raffaelli.studio",
            "template_BarterGround",
            form.current,
            "nUZAa-lKMmk36Iq73"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            },
            navigate("/")
          );
      }
    }; */

  if (isAuthenticated) return <Navigate to="/auth/home" replace />;
  /* if (!isAuthenticated) return(
 setError(true),
 setErrorMessage("NO NO NO THIS EMAIL IS ALREADY REGISTERED!")); */

  if (loading) return <Loading />;

  /*   const handleSubmit = () => {
    if (!email || !password) {
      setError(true);
      setErrorMessage("NO DATA NO PARTY!");
      return;
    } else {
      setError(false);
    }
  }; */

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="landing">
        <h3 className="title"> Login </h3>
        <div className="internal-container">
          <h1>PLAYER DATA:</h1>
          <br></br>
          <KeysIcon />
          {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <br></br>
          {/* {!pwd ? (
          <> */}
          <label htmlFor="email" className="form-label">
            email:
          </label>
          <input
            type="email"
            id="email"
            name="e-mail"
            className="nes-input"
            value={email}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="password" className="form-label">
            Secret Password:
          </label>
          <input
            type="password"
            id="password"
            name="pwd"
            className="nes-input"
            value={password}
            onChange={handleChange}
          />
          <br></br>
          <button
            type="submit"
            className="nes-btn is-primary"
            onClick={handleSubmit}
            onKeyPress={handleKeypress}
          >
            OK
          </button>
          <br></br>

          {/* <button
              type="submit"
              className="nes-btn is-warning"
              onClick={handlePasswordLost}
            >
              PasswordLost
            </button>
          </>
           ) : (
          <>
            <label htmlFor="email" className="form-label">
              Insert email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="nes-input"
              value={email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="nes-btn is-success"
              onClick={handleSendmail}
            >
              SEND
            </button>
            <br></br>
            <button
              type="submit"
              className="nes-btn is-warning"
              onClick={handlePasswordLost}
            >
              BACK
            </button>
          </>
          )}  */}
        </div>
      </div>
    </div>
  );
};

export default Login;
