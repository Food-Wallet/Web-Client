import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import MainPage from "../pages/common/MainPage";
import SalesPage from "../pages/sale/SalesPage";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}>
            <Route path="store" element={null}/>
            <Route path="sales" element={<SalesPage />}/>
            <Route path="mypage" element={null}/>
          </Route>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;