import React from 'react';
import "./button-close.scss";


function ButtonClose(props) {
  return (
    <div className="button__wrapper">
      <button className="button-close" onClick={props.onClick}></button>
    </div>

  );
}

export default ButtonClose;
