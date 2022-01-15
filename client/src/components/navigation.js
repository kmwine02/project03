import React from "react";
import menu from "../data/menu";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navbar">
      <ul className="nav-list">
        {menu.map((item) => (
          <li className="nav-item" key={item.menuItem}>
            <NavLink to={item.NavLink}>{item.menuItem}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
