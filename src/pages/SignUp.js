import "./login.css";
import Lottie from "lottie-react";
import { loginside_image } from "../assets";
import SingUpForm from "../components/login/SignupForm";
const SingUp = () => {
  return (
    <div className="outer">
      <div className="inner">
        <div className="title_akijaki">AKIJAKI</div>
        <div className="login_image">
          <Lottie animationData={loginside_image} />
        </div>
        <SingUpForm />
      </div>
    </div>
  );
};

export default SingUp;
