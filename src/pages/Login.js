import "./login.css";
import Lottie from "lottie-react";
import { loginside_image } from "../assets";
const Login = () => {
  return (
    <div className="inner">
      <div className="login_image">
        <Lottie animationData={loginside_image} />
      </div>
      <div className="form-wrapper">
        <div className="login_form">
          <p className="login_title">로그인</p>
          <div className="login_input">
            <label id="login_id">아이디 : </label>
            <input type="text" /> <br></br>
            <label>비밀번호 :</label>
            <input type="password" />
          </div>
          <div className="login_btn">
            <button>확인</button>
            <button>취소</button>
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </div>
  );
};

export default Login;
