import React from 'react';
import {Link} from "react-router-dom";
import "./header.scss";

function Header(props) {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <Link className="header__link" to={"/"}>
          <span className="header__logo">OneAI</span>
        </Link>
        <Link className="header__button" to={"/login"}>
          <span className="header__button-text">Sign in</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
