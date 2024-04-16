import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./upload.scss";

function Upload(props) {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/");
  }

  return (
    <div className="upload">
      <div className="upload__wrapper">
        <div className="upload__button-wrapper">
          <button className="upload__button button" onClick={handleClickBack}>Go back</button>
        </div>
        <div className="upload__image-wrapper">
          <img className="upload__image" src="./img/1379727302410.jpg" alt="Фото"/>
        </div>
        <div className="upload__actions">
          <Link className="upload__link" to={"/result"}>
            <img className="upload__icon" src="./img/image-square-svgrepo-com.svg" alt="Choose photo from gallery"/>
            <span className="upload__text"> Choose photo from gallery</span>
          </Link>
          <Link className="upload__link" to={"/result"}>
            <img className="upload__icon" src="./img/photo-camera-svgrepo-com.svg" alt="Take photo with camera"/>
            <span className="upload__text">Take photo with camera</span>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Upload;
