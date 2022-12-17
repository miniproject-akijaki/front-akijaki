import "./login.css";
import Lottie from "lottie-react";
import { loginside_image } from "../assets";
const SingUp = () => {
  return (
    <div className="inner">
      <div className="login_image">
        <Lottie animationData={loginside_image} />
      </div>
      <div className="signup-wrapper">
        <div class="signup_form">
          <p className="login_title">회원가입</p>
          <div className="login_input">
            <label id="login_id">아이디 : </label>
            <input type="text" /> <br></br>
            <label>비밀번호 :</label>
            <input type="password" />
            <br></br>
            <label>비밀번호확인:</label>
            <input id="password_check" type="password" />
            <br></br>
            <label id="nickname">닉네임:</label>
            <input type="text" />
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

export default SingUp;
