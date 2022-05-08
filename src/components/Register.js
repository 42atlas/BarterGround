/* import { Link, NavLink, Outlet } from "react-router-dom"; */
import React, { useState } from "react";
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

import { Navigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

const Register = () => {
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [classField, setClassField] = useState("nes-input");

  const [{ character, name, email, password }, setFormState] = useState({
    character: "",
    name: "",
    email: "",
    password: "",
  });

  const { isAuthenticated, loading, registerUser } = useAuth();

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleChangeChar = (e) => {
    setFormState((prev) => ({
      ...prev,
      character:
        e.target.getAttribute("character") ||
        e.target.parentNode.parentNode.getAttribute("character"),
    }));
    setSelected(
      e.target.getAttribute("character") ||
        e.target.parentNode.parentNode.getAttribute("character")
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !character)
      return (
        setError(true),
        setErrorMessage("YOU MUST PICK A CHARACTER AND FILL IN YOUR DATA !"),
        setClassField("nes-input is-error")
      );
    await registerUser({ name, email, password, character });
  };

  if (isAuthenticated) return <Navigate to="/auth/home" replace />;
  if (loading) return <Loading />;
  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Register </h3>
        <div className="internal-container">
          Choose your character:
          <div className="char-div">
            <div
              className="nes-container is-centered with-title"
              id="char-container"
              value={character}
              character="Bard"
              onClick={handleChangeChar}
              style={{ color: selected === "Bard" ? "#92cc41" : "" }}
            >
              <h3 className="title"> Bard </h3>
              <BardPresenting />
            </div>
            <div
              className="nes-container is-centered with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={character}
              character="InnKeeper"
              style={{ color: selected === "InnKeeper" ? "#92cc41" : "" }}
            >
              <h3 className="title"> Inn Keeper </h3>
              <InnKeeperPresenting />
            </div>
            <div
              className="nes-container is-centered with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={character}
              character="Builder"
              style={{ color: selected === "Builder" ? "#92cc41" : "" }}
            >
              <h3 className="title"> Builder </h3>
              <BuilderPresenting />
            </div>
            <div
              className="nes-container is-centered with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={character}
              character="Dancer"
              style={{ color: selected === "Dancer" ? "#92cc41" : "" }}
            >
              <h3 className="title"> Dancer </h3>
              <DancerPresenting />
            </div>
            <div
              className="nes-container is-centered with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={character}
              character="Farmer"
              style={{ color: selected === "Farmer" ? "#92cc41" : "" }}
            >
              <h3 className="title"> Farmer </h3>
              <FarmerPresenting />
            </div>
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={character}
              character="Fisherman"
              style={{ color: selected === "Fisherman" ? "#92cc41" : "" }}
            >
              <h3 className="title"> Fisherman </h3>
              <FishermanPresenting />
            </div>
          </div>
          <div className="char-div">
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={character}
              character="Girl"
              style={{ color: selected === "Girl" ? "#92cc41" : "" }}
            >
              <h3 className="title"> Girl </h3>
              <GirlPresenting />
            </div>
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={character}
              character="Boy"
              style={{ color: selected === "Boy" ? "#92cc41" : "" }}
            >
              <h3 className="title"> Boy </h3>
              <BoyPresenting />
            </div>
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={character}
              character="Miner"
              style={{ color: selected === "Miner" ? "#92cc41" : "" }}
            >
              <h3 className="title"> Miner </h3>
              <MinerPresenting />
            </div>
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={character}
              character="OldLady"
              style={{ color: selected === "OldLady" ? "#92cc41" : "" }}
            >
              <h3 className="title"> Old Lady </h3>
              <OldLadyPresenting />
            </div>
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={character}
              character="OldMan"
              style={{ color: selected === "OldMan" ? "#92cc41" : "" }}
            >
              <h3 className="title"> Old Man </h3>
              <OldManPresenting />
            </div>
            <div
              className="nes-container with-title"
              id="char-container"
              onClick={handleChangeChar}
              value={character}
              character="VillageGirl"
              style={{ color: selected === "VillageGirl" ? "#92cc41" : "" }}
            >
              <h3 className="title"> Village Girl </h3>
              <VillageGirlPresenting />
            </div>
          </div>
          <br></br>
          <div className="internal-container">
            {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <div className="form-register">
              <div className="nes-field">
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
              <div className="nes-field">
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
              <div className="nes-field">
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
