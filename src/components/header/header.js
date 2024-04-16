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
        <button className="header__button" onClick={props.onClick}>
          <span className="header__button-text">Sign in</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
