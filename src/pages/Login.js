import Lottie from "lottie-react";
import { loginside_image } from "../assets";
import LoginForm from "../components/login/LoginForm";
import "./login.css";

const Login = () => {
  return (
    <div className="outer">
      <div className="inner">
        <div className="waviy">
          <span style={{ animationDelay: "0.1s" }}>A</span>
          <span style={{ animationDelay: "0.4s" }}>K</span>
          <span style={{ animationDelay: "0.7s" }}>I</span>
          <span style={{ animationDelay: "1.1s" }}>J</span>
          <span style={{ animationDelay: "1.3s" }}>A</span>
          <span style={{ animationDelay: "1.7s" }}>K</span>
          <span style={{ animationDelay: "2s" }}>I</span>
        </div>
        <div className="login_image">
          <Lottie animationData={loginside_image} />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
