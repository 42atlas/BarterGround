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
        <NavLink
          to={`/auth/settings/${user?._id}`}
          className="nav-link"
          id="small-margin"
        >
          {user ? `Welcome back, ${user.character} ${user.name}` : "v.0.1.9"}
        </NavLink>
        <br />

        {isAuthenticated ? (
          <button
            type="text"
            className="nes-btn is-warning"
            id="small-margin-quit"
            onClick={logout}
          >
            QUIT
          </button>
        ) : (
          <i className="nes-icon is-small star" id="small-margin"></i>
        )}
      </div>

      <Outlet />
      <div className="main-container">
        <ButtonContact />

        <Player />
      </div>
    </>
  );
};

export default Layout;
