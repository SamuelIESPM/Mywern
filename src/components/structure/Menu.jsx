import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lordicon/react";
import useUserContext from "../../hooks/useUserContext";
import AVATAR from "../../assets/avatar.json";
import JOISTICK from "../../assets/joistick.json";
import GLOBE from "../../assets/globe.json";
import EDIT from "../../assets/edit.json";
import "./Menu.css";

const Menu = () => {
  const { openModal } = useUserContext();

  const [openState, setOpenState] = useState(false);
  const playerRef = useRef(null);
  const wikiRef = useRef(null);
  const editRef = useRef(null);
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
      <div className="sidebar" id="main-sidebar">
        <div className="sidebarTopContent">
          <Link to="/game">
            <i
              onMouseEnter={() => handleHover(playerRef)}
              style={{ width: 10 }}
            >
              <Player ref={playerRef} size={50} icon={JOISTICK} />
            </i>
          </Link>
          <Link to="/wiki">
            <i onMouseEnter={() => handleHover(wikiRef)} style={{ width: 10 }}>
              <Player ref={wikiRef} size={50} icon={GLOBE} />
            </i>
          </Link>
        </div>
        <div className="sidebarBottomContent">
          <i
            onMouseEnter={() => handleHover(editRef)}
            style={{ width: 10 }}
            onClick={() => {}}
          >
            <Player ref={editRef} size={50} icon={EDIT} />
          </i>
          <i
            onMouseEnter={() => handleHover(avatarRef)}
            style={{ width: 10 }}
            onClick={async () => await openModal()}
          >
            <Player ref={avatarRef} size={50} icon={AVATAR} />
          </i>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
