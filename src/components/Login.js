import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";

/*import { useAuth } from "../context/AuthContext"; */
/* import Loading from "./Loading"; */

const Login = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [{ email, password }, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = () => {
    if (!email || !password) {
      setError(true);
      setErrorMessage("NO NO NO THE FIELDS CANNOT BE EMPTY!");
      return;
    } else {
      setError(false);
    }
  };

  /* const handleSubmit = async e => {
        e.preventDefault();
        if (!email || !password) return
        setError(true)
        setErrorMessage("NO NO NO THE FIELDS CANNOT BE EMPTY!")
        await loginUser({ email, password });
    };  
    

    if (isAuthenticated) {
        setError(false);
        return <Navigate to='/protected/home' replace />;
    } else {
        setError(true)
        setErrorMessage("NO NO NO THIS DATA ARE INCORRECT!")
}
  
  if (loading) return <Loading />; */

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="landing">
        <h3 className="title"> Login </h3>
        <div className="internal-container">
          <h1>PLAYER DATA:</h1>
          <br></br>

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
