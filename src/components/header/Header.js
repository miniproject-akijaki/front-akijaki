import { useEffect } from "react";
import "./header.css";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header">
      <div className="navbar">
        <div
          className="logo"
          onClick={() => {
            navigate("/main");
          }}
        >
          AKIJAKI
        </div>
        {location.pathname === "/write" ? (
          <button
            className="gowrite_btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            이전으로
          </button>
        ) : (
          <button
            className="gowrite_btn"
            onClick={() => {
              navigate("/write");
            }}
          >
            게시글 작성
          </button>
        )}
        {location.pathname === "/write" ? null : (
          <button
            className="goback_btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            이전으로
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
