import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../../pages/main-page";
import UploadPage from "../../pages/upload-page";
import ResultPage from "../../pages/result-page";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/upload"} element={<UploadPage />} />
        <Route path={"/result"} element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
