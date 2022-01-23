import React, { useState, useContext } from "react";
import { FaTree as Logo } from "react-icons/fa";
import { menu } from "../data/menu";
import { NavLink } from "react-router-dom";
import Lights from "./Lights";
import "../components/css/Header.css";
import AuthService from "../utils/auth";

export default function Navigation() {
  const [isLoggedIn, setLoggedIn] = useState(AuthService.loggedIn());
  const user = AuthService.getProfile();

  const navItems = isLoggedIn
    ? // ? [{ className: "option", menuItem: "LoggedIn", menuLink: "/" }]
      // : [{ className: "option", menuItem: "LoggedOut", menuLink: "/" }];
      menu.filter((item) => item.loginView === true)
    : menu.filter((item) => item.logoutView === true);
  console.log(isLoggedIn);
  console.log(navItems);
  return (
    <>
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <a href="/">
              <Logo className="logo" />
            </a>
          </div>
          <div className="user-name-header">{user.data.username}</div>
          <div className="navbar">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li className={item.className} key={item.menuItem}>
                  <NavLink to={item.menuLink}>{item.menuItem}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Lights />
    </>
  );
}
