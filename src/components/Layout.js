import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useAuth } from "../context/AuthContext";
import { Link, NavLink, Outlet } from "react-router-dom";
import ButtonContact from "./ButtonContact";
import Player from "./Player";
import CookieBanner from "react-cookie-banner";

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
          {user ? `Welcome back, ${user.character} ${user.name}` : "v.0.2.1"}
        </NavLink>
        <br />
        <CookieBanner
          message="We use only one cookie. We need it to authenticate your account when you login!"
          onAccept={() => {}}
          cookie="user-has-accepted-cookies"
        />
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
        <NavLink to={`/impressum`} className="nav-link" id="small-margin-imp">
          Impressum - Privacy & Data
        </NavLink>
      </div>
    </>
  );
};

export default Layout;
