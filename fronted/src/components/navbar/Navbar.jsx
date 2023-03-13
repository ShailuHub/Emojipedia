import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="nav-items">
        <div className="logo">emojipedia</div>
        <div className="menu-container">
          <NavLink to={props.path} className="login">
            {props.text}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
