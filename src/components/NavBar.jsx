import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostsList from "./PostsList";
import "./navBar.css";
import App from "../App";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div>
          <button className="btn">
            <Link to="/">Home</Link>
          </button>
        </div>

        <div>LogoPlaceHolder</div>
        <div>
          <button className="btn">
            <Link to="/login">Login</Link>
          </button>
          <button className="btn">
            <Link to="/signup">Sign Up</Link>
          </button>
          <button className="btn">
            <Link to="/posts">Posts</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
