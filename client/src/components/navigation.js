import React from "react";
<<<<<<< HEAD
import { menu } from "../data/menu";
import { NavLink } from "react-router-dom";
=======
import menu from "../data/menu";
import {NavLink} from "react-router-dom";
>>>>>>> ea0678e12722f1ba40c4275d6561306be761ce99

export default function Navigation() {
  return (
    <div className="navbar">
      <ul className="nav-list">
        {menu.map((item) => (
          <li className="nav-item" key={item.menuItem}>
            <NavLink to={item.menuLink}>{item.menuItem}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
