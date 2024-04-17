import React, {useState} from 'react';
import Header from "../components/header/header";
import Gallery from "../components/gallery/gallery";
import Footer from "../components/footer/footer";
import PageLayout from "../components/page-layout/page-layout";
import LoginPage from "./login-page";

function MainPage(props) {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleOpenModal = () => {
    setIsModalActive(true);
    document.body.style.overflow = 'hidden';
  }

  const handleCloseModal = () => {
    setIsModalActive(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <PageLayout>
        <Header onClick={handleOpenModal} />
        <Gallery />
        <Footer />

      {isModalActive && <LoginPage onClose={handleCloseModal} />}
    </PageLayout>

  );
}

export default MainPage;
