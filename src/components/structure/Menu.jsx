import React, { Fragment, useState, useRef } from "react";
import { Offcanvas } from "react-bootstrap";
import { Player } from "@lordicon/react";
import AVATAR from "../../assets/avatar.json";
import "./Menu.css";

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
    setOpenState((prevState) => !prevState);
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
      <Offcanvas show={openState} onHide="" scroll="true" backdrop="false">
        <Offcanvas.Header>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebarTopContent">
            <i className="fa-solid fa-gamepad"></i>
          </div>
          <div className="sidebarBottomContent">
            <i
              onMouseEnter={() => handleHover(avatarRef)}
              style={{ width: 10 }}
            >
              <Player ref={avatarRef} size={50} icon={AVATAR} />
            </i>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

export default Menu;
