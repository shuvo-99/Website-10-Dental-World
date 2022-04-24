import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navBar-container">
      <nav>
        <Link to="/home"> Home </Link>
        <Link to="/Review"> Review </Link>
        <Link to="/Dashboard"> Dashboard </Link>
        <Link to="/Blog"> Blog </Link>
      </nav>
    </div>
  );
};

export default Navbar;
