import React from "react";
import { FaTree as Logo } from "react-icons/fa";
import { menu } from "../data/menu";
import { NavLink } from "react-router-dom";
import "../components/css/Header.css";

export default function Navigation() {
  return (
    <>
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <a href="/">
              <Logo className="logo" />
            </a>
          </div>
          <div className="navbar">
            <ul className="nav-list">
              {menu.map((item) => (
                <li className={item.className} key={item.menuItem}>
                  <NavLink to={item.menuLink}>{item.menuItem}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
