import React from 'react';
import "./result.scss";
import {useNavigate} from "react-router-dom";

function Result(props) {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/");
  }

  return (
    <div className="result">
      <div className="result__wrapper">
        <div className="result__image-container">
          <img className="result__image" src="./img/1379727302410.jpg" alt="Фото"/>
        </div>
        <div className="result__buttons">
          <button className="result__button result__button--save button">Save</button>
          <button className="result__button result__button--more button" onClick={handleClickButton}>More pics</button>
        </div>
      </div>
    </div>
  );
}

export default Result;
