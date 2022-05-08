import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { Navigate } from "react-router-dom";
import { useState } from "react";

import KeysIcon from "./characters/iconsShadow/keysicon";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

const Login = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [{ email, password }, setFormState] = useState({
    email: "",
    password: "",
  });
  const { isAuthenticated, loading, loginUser } = useAuth();

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setError(true);
    setErrorMessage("WRONG DATA!");
    await loginUser({ email, password });
  };

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
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
