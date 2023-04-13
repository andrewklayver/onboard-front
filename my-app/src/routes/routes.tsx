import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLogin from "../pages/login";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<PageLogin />} />
        {/* <Route path="/cadastro" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
