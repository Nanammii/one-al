import React from 'react';
import "./footer.scss";

function Footer(props) {
  return (
    <footer className="footer container">
      <div className="footer__wrapper">
        <p className="footer__text footer__text--contacts">Get help at support@avgen.me</p>
        <p className="footer__text footer__text--copyright">Copyright © 2024 Mook Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
