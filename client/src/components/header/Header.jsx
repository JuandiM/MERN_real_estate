import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="h-wrapper">
        <div className="left">
          <div className="logo">
            <Link to="/" className="link">
              <img className="logo" src="assets/logo1d.png" />
            </Link>
          </div>
          <ul className="menu">
            <Link to="/" className="link">
              <li className="menuList effect-one">Home</li>
            </Link>
            <Link to="/properties" className="link">
              <li className="menuList effect-one">Properties</li>
            </Link>
            <li className="menuList effect-one">About us</li>

            <li className="menuList effect-one">
              <a href="#formBottom" className="link" />
              Contact
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
