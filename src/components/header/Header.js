import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
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
        <div className="nav_btn">
          <button
            className="write_btn"
            onClick={() => {
              navigate("/write");
            }}
          >
            게시글 작성
          </button>
          {/* <button className="mypage_btn">마이페이지</button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
