import React, { Fragment, useState, useRef } from "react";
import { Player } from "@lordicon/react";
import "react-router-dom";
import "./Menu.css";

const ICON = require("./avatar.json");

const Menu = () => {
  const [openState, setOpenState] = useState(false);
  const playerRef = useRef(null);
  const avatarRef = useRef(null);

  const openNav = () => {
    document.getElementById("main-sidebar").style.width = "81px";
    document.getElementById("menu-button").style.marginLeft = "81px";
    document.getElementById("main-sidebar").classList.add("active");
  };

  const closeNav = () => {
    document.getElementById("main-sidebar").style.width = "0";
    document.getElementById("menu-button").style.marginLeft = "0";
    document.getElementById("main-sidebar").classList.remove("active");
  };

  const manageNav = () => {
    setOpenState(() => {
      !openState;
    });
    const openbtn = document.querySelector(".openbtn");
    openbtn.classList.toggle("active", openState);
    openState ? openNav() : closeNav();
  };

  const handleHover = (ref) => {
    if (ref.current) ref.current.playFromBeginning();
  };

  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      ></link>
      <div className="sidebar" id="main-sidebar">
        <div className="sidebarTopContent">
          <i className="fa-solid fa-gamepad"></i>
        </div>
        <div className="sidebarBottomContent">
          <i onMouseEnter={() => handleHover(avatarRef)} style={{ width: 10 }}>
            <Player ref={avatarRef} size={100} icon={ICON} />
          </i>
        </div>
      </div>

      <div id="menu-button">
        <button
          className="openbtn"
          onClick={() => {
            manageNav();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </Fragment>
  );
};

export default Menu;
