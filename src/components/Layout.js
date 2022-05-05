import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useAuth } from "../context/AuthContext";
import { Link, NavLink, Outlet } from "react-router-dom";
import ButtonContact from "./ButtonContact";
import Player from "./Player";

const Layout = () => {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <>
      <div className="layout-container">


        <NavLink to="/auth/home" className="nav-link">
          {user ? `Welcome back, ${user.character} ${user.name}` : "v.0.1.9"}
        </NavLink>
        <br />

        {isAuthenticated ? (
          <button type="text" className="nes-btn is-warning" onClick={logout}>
            Quit
          </button>
        ) : (
          <i class="nes-icon is-small star"></i>
        )}
      </div>

      <Outlet />
      <div className="main-container">
        <ButtonContact />

        {/* <Player url="https://drive.google.com/uc?export=view&id=1lEPt0OJplw7MNHa09k9d4EmmNrT7DP3r" /> */}
      </div>
    </>
  );
};

export default Layout;
