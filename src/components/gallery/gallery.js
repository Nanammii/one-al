import React from 'react';
import "./gallery.scss";


function Gallery(props) {
  return (
    <section className="gallery container">
      <div className="gallery__wrapper">
        <ul className="gallery__list">
          <li className="gallery__item">
            <img className="gallery__image" src="./img/1379727083461.jpg"/>
            <span className="gallery__text">Lego</span>
          </li>
          <li className="gallery__item">
            <img className="gallery__image" src="./img/1379727294060.jpg"/>
            <span className="gallery__text">Lego</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
