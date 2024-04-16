import React from 'react';
import Header from "../components/header/header";
import Gallery from "../components/gallery/gallery";

function MainPage(props) {
  return (
    <div className="main-page">
      <Header />
      <Gallery />
    </div>
  );
}

export default MainPage;
