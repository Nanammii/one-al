import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../../pages/main-page";
import LoginPage from "../../pages/login-page";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        {/*<Route path={"/login"} element={<LoginPage />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
