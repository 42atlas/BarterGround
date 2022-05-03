/* import { Link, NavLink, Outlet } from "react-router-dom"; */
import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import BardPresenting from "./characters/Bard/BardPresenting";
import BoyPresenting from "./characters/Boy/BoyPresenting";
import BuilderPresenting from "./characters/Builder/BuilderPresenting";
import DancerPresenting from "./characters/Dancer/DancerPresenting";
import FarmerPresenting from "./characters/Farmer/FarmerPresenting";
import FishermanPresenting from "./characters/Fisherman/FishermanPresenting";
import GirlPresenting from "./characters/Girl/GirlPresenting";
import InnKeeperPresenting from "./characters/InnKeeper/InnKeeperPresenting";
import MinerPresenting from "./characters/Miner/MinerPresenting";
import OldLadyPresenting from "./characters/OldLady/OldLadyPresenting";
import OldManPresenting from "./characters/OldMan/OldManPresenting";
import VillageGirlPresenting from "./characters/VillageGirl/VillageGirlPresenting";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
/*import { useAuth } from "../context/AuthContext"; */
/* import Loading from "./Loading"; */

const Register = () => {
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [classField, setClassField] = useState("nes-input");
  const navigate = useNavigate();
  const [{ char, name, email, password }, setFormState] = useState({
    char: "",
    name: "",
    email: "",
    password: "",
  });

  /*const { isAuthenticated, loading, registerUser } = useAuth(); */

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleChangeChar = (e) => {
    setFormState((prev) => ({
      ...prev,
      char:
        e.target.getAttribute("char") ||
        e.target.parentNode.parentNode.getAttribute("char"),
    }));
    setSelected(
      e.target.getAttribute("char") ||
        e.target.parentNode.parentNode.getAttribute("char")
    );
  };

  const handleSubmit = () => {
    if (!name || !email || !password) {
      setError(true);
      setErrorMessage("NO NO NO THE FIELDS CANNOT BE EMPTY!");
      setClassField("nes-input is-error"); //jorge - or selector
      return;
    } else {
      setError(false);
    }
  };

  /*   const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) return 
      setError(true)
      setErrorMessage("NO NO NO THE FIELDS CANNOT BE EMPTY!")
     await registerUser({ name, email, password }); 
  };
  

  if (isAuthenticated) {
  setError(false);
    return <Navigate to="/protected/home" replace />;
  } else {
  setError(true)
        setErrorMessage("NO NO NO THIS EMAIL IS ALREADY REGISTERED!")
  }
  if (loading) return <Loading />; */

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Register </h3>
        <div class="internal-container">
          Choose your character:
          <div className="char-div">
            <div
              className="nes-container is-centered with-title"
              id="char-container"
              value={char}
              char="Bard"
              onClick={handleChangeChar}
              style={{ color: selected === "Bard" ? "red" : "" }}
            >
              <h3 className="title"> Bard </h3>
              <BardPresenting />
            </div>
            <div
              className="nes-container is-centered with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={char}
              char="InnKeeper"
              style={{ color: selected === "InnKeeper" ? "red" : "" }}
            >
              <h3 className="title"> Inn Keeper </h3>
              <InnKeeperPresenting />
            </div>
            <div
              className="nes-container is-centered with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={char}
              char="Builder"
              style={{ color: selected === "Builder" ? "red" : "" }}
            >
              <h3 className="title"> Builder </h3>
              <BuilderPresenting />
            </div>
            <div
              className="nes-container is-centered with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={char}
              char="Dancer"
              style={{ color: selected === "Dancer" ? "red" : "" }}
            >
              <h3 className="title"> Dancer </h3>
              <DancerPresenting />
            </div>
            <div
              className="nes-container is-centered with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={char}
              char="Farmer"
              style={{ color: selected === "Farmer" ? "red" : "" }}
            >
              <h3 className="title"> Farmer </h3>
              <FarmerPresenting />
            </div>
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={char}
              char="Fisherman"
              style={{ color: selected === "Fisherman" ? "red" : "" }}
            >
              <h3 className="title"> Fisherman </h3>
              <FishermanPresenting />
            </div>
          </div>
          <div className="char-div">
            <div
              className="nes-container with-title"
              id="char-container"
              onSelect={handleChangeChar}
              value={char}
              char="Girl"
              style={{ color: selected === "Girl" ? "red" : "" }}
            >
              <h3 className="title"> Girl </h3>
              <GirlPresenting />
            </div>
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={char}
              char="Boy"
              style={{ color: selected === "Boy" ? "red" : "" }}
            >
              <h3 className="title"> Boy </h3>
              <BoyPresenting />
            </div>
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={char}
              char="Miner"
              style={{ color: selected === "Miner" ? "red" : "" }}
            >
              <h3 className="title"> Miner </h3>
              <MinerPresenting />
            </div>
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={char}
              char="OldLady"
              style={{ color: selected === "OldLady" ? "red" : "" }}
            >
              <h3 className="title"> Old Lady </h3>
              <OldLadyPresenting />
            </div>
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={char}
              char="OldMan"
              style={{ color: selected === "OldMan" ? "red" : "" }}
            >
              <h3 className="title"> Old Man </h3>
              <OldManPresenting />
            </div>
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={char}
              char="VillageGirl"
              style={{ color: selected === "VillageGirl" ? "red" : "" }}
            >
              <h3 className="title"> Village Girl </h3>
              <VillageGirlPresenting />
            </div>
          </div>
          <br></br>
          <div class="internal-container">
            {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <div class="form-register">
              <div class="nes-field">
                <label for="name_field" htmlFor="name" className="form-label">
                  Give it a Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  className={classField}
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <br></br>
              <div class="nes-field">
                <label for="password" htmlFor="password" className="form-label">
                  You need a Super Secret Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="pwd"
                  className={classField}
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <br></br>
              <div class="nes-field">
                <label for="email" htmlFor="email" className="form-label">
                  And your favourite email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="e-mail"
                  className={classField}
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <br></br>
              <label>
                <input type="checkbox" className="nes-checkbox" />
                <span>Receive very random emails from us !?!</span>
              </label>
              <br></br>
              <button
                type="submit"
                className="nes-btn is-success"
                onClick={handleSubmit}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Register;
