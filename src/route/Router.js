import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Write from "../pages/Write";
import Main from "../pages/Main";
import Login from "../pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/write" element={<Write />} />
      <Route path="*" element={<div>이거 404 페이지요</div>} />
    </Routes>
  );
};

export default Router;
