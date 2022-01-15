import React from "react";
import menu from "../data/menu";
import {NavLink} from "react-router-dom";

export default function Navigation() {
  return (
    <div class="navbar">
      <ul class="nav-list">
        {menu.map((item) => (
          <li class="nav-item">
            <NavLink to={menu.NavLink}></NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
