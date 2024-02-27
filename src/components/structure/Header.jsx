import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="page-header">
        <h1>Mywern</h1>
        <Link to="/">
          <img
            src="https://jksolcpevixdmuruklaj.supabase.co/storage/v1/object/public/Logo/logo.svg"
            className="logo"
          />
        </Link>
      </header>
    </Fragment>
  );
};

export default Header;
