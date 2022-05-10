import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
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
import Loading from "./Loading";
import { useAuth } from "../context/AuthContext";

import ErrorMessage from "./ErrorMessage/ErrorMessage";

const Settings = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useAuth();

  const [{ character, name, email, password }, setFormState] = useState({
    character: user?.character,
    name: user?.name,
    email: user?.email,
    password: "",
  });

  const { loading, updateUser } = useAuth();
  /*
  const handleChangeChar = (e) => {
    setFormState((prev) => ({
      ...prev,
      character:
        e.target.getAttribute("character") ||
        e.target.parentNode.parentNode.getAttribute("character") ||
        e.target.parentNode.getAttribute("character"),
    }));
    setSelected(
      e.target.getAttribute("character") ||
        e.target.parentNode.parentNode.getAttribute("character") ||
        e.target.parentNode.getAttribute("character")
    );
  }; */

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const renderCharacter = (char) => {
    switch (char) {
      case "Bard":
        return <BardPresenting />;
      case "Boy":
        return <BoyPresenting />;
      case "Builder":
        return <BuilderPresenting />;
      case "Dancer":
        return <DancerPresenting />;
      case "Farmer":
        return <FarmerPresenting />;
      case "Fisherman":
        return <FishermanPresenting />;
      case "Girl":
        return <GirlPresenting />;
      case "InnKeeper":
        return <InnKeeperPresenting />;
      case "Miner":
        return <MinerPresenting />;
      case "OldLady":
        return <OldLadyPresenting />;
      case "OldMan":
        return <OldManPresenting />;
      case "VillageGirl":
        return <VillageGirlPresenting />;
      default:
        <img
          src="..\images\merchantspinning.gif"
          alt="Merchant Spinning"
        ></img>;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser({ id, name, email, password, character });
  };

  if (loading) return <Loading />;

  return (
    user && (
      <div className="main-container">
        <div className="nes-container is-centered with-title" id="landing">
          <h3 className="title"> Settings </h3>
          <div className="internal-container">
            <br></br>
            <div className="settings-char-container">
              <div>{renderCharacter(user.character)}</div>
              <h1>
                {user.character} {user.name}
              </h1>
            </div>
            <br />
            <div className="nes-field">
              <label htmlFor="name" className="form-label">
                Change Name:
              </label>
              <input
                type="text"
                id="name"
                name="username"
                value={name || user.name}
                onChange={handleChange}
                className="nes-input"
              />
            </div>
            <br></br>
            <div className="nes-field">
              <label htmlFor="email" className="form-label">
                Change email:
              </label>
              <input
                type="email"
                id="email"
                name="e-mail"
                value={email || user.email}
                onChange={handleChange}
                className="nes-input"
                disabled={true}
              />
            </div>
            <br></br>
            <div className="nes-field">
              <label htmlFor="password" className="form-label">
                Change Password:
              </label>
              <input
                type="password"
                id="password"
                name="pwd"
                value={password || user.password}
                onChange={handleChange}
                className="nes-input"
              />
            </div>
            <br />
            <br />
            <div className="nes-select">
              <select
                id="character"
                value={character || user.character}
                onChange={handleChange}
                /* character={character} */
              >
                <option value="" disabled="" hidden="yes">
                  Select Character
                </option>
                <option value={"Bard"} character="Bard">
                  Bard
                </option>
                <option value={"Boy"} character="Boy">
                  Boy
                </option>
                <option value={"Builder"} character="Builder">
                  Builder
                </option>
                <option value={"Dancer"} character="Dancer">
                  Dancer
                </option>
                <option value={"Farmer"} character="Farmer">
                  Farmer
                </option>
                <option value={"Fisherman"} character="Fisherman">
                  Fisherman
                </option>
                <option value={"Girl"} character="Girl">
                  Girl
                </option>
                <option value={"InnKeeper"} character="InnKeeper">
                  InnKeeper
                </option>
                <option value={"Miner"} character="Miner">
                  Miner
                </option>
                <option value={"OldLady"} character="OldLady">
                  OldLady
                </option>
                <option value={"OldMan"} character="OldMan">
                  OldMan
                </option>
                <option value={"VillageGirl"} character="VillageGirl">
                  VillageGirl
                </option>
              </select>
            </div>
            <div>{renderCharacter(character)}</div>
            <br />
            <button
              type="submit"
              className="nes-btn is-success"
              onClick={handleSubmit}
            >
              OK
            </button>
          </div>
        </div>

        <div className="nes-container is-centered" id="landing">
          <div className="buttons-container">
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={() => navigate("/auth/home")}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Settings;
