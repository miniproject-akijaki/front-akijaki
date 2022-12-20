import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import sweetAlert from "../../core/utils/sweetAlert";
import { useInputChange } from "../../core/hooks/useInputChange";
import { postLogin } from "../../core/api/login";
import Visibility from "../material/VisibilityIcon";
import { useCustomNavigate } from "../../core/hooks/useCustomNavigate";
import axios from "axios";
import UserForm from "./UserFomr";
import { Token } from "@mui/icons-material";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  const [customNavigate] = useCustomNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("id"));
  }, []);

  const { visibil } = useSelector((state) => state.visibil);
  const [inputs, onChangeInput, clearInput] = useInputChange();
  const { userId, password } = inputs;
  const onClickLogin = () => {
    const user = {
      username: userId,
      password: password,
    };
    postLogin(user)
      .then((res) => {
        // console.log("res결과", res.headers.authorization);
        // console.log("res결과", axios.defaults.headers.authorization);
        localStorage.setItem("id", res.headers.authorization);
        const localToken = localStorage.getItem("id");
        setToken(localToken);
        clearInput();
      })
      .catch((error) => sweetAlert(1000, "error", error.response.data.msg));
  };
  return (
    <>
      <div className="form-wrapper">
        <div className="login_form">
          {token ? (
            <UserForm token={token} setToken={setToken} />
          ) : (
            <>
              <p className="login_title">로그인</p>
              <div className="login_input">
                <label id="login_id">아이디 : </label>
                <input
                  type="text"
                  name="userId"
                  value={userId}
                  placeholder={"아이디를 입력해주세요"}
                  onChange={onChangeInput}
                />

                <br></br>
                <label>비밀번호 :</label>
                {visibil ? (
                  <input
                    type="text"
                    name="password"
                    value={password}
                    placeholder={"비밀번호를 입력해주세요"}
                    onChange={onChangeInput}
                  />
                ) : (
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder={"비밀번호를 입력해주세요"}
                    onChange={onChangeInput}
                  />
                )}

                <div id="login_visibil">
                  <Visibility />
                </div>
              </div>
              <div className="login_btn">
                <button onClick={onClickLogin}>확인</button>
                <button
                  onClick={() => {
                    customNavigate("/signup");
                  }}
                >
                  회원가입
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
