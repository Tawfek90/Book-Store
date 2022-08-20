import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">books shop</Link>
        </div>

        <ul className="links">
          <li className="link-item ">
            <Link to="/">home</Link>
          </li>

          <li className="link-item ">
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
