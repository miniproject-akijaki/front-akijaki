import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { use } from "../../core/utils/useSweet";
import { useInputChange } from "../../core/hooks/useInputChange";
import { postLogin } from "../../core/api/login";
import Visibility from "../material/VisibilityIcon";
import { useCustomNavigate } from "../../core/hooks/useCustomNavigate";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [customNavigate] = useCustomNavigate();

  // const { user, isLoading, error } = useSelector((state) => state.user);
  const { visibil } = useSelector((state) => state.visibil);
  const [inputs, onChangeInput] = useInputChange();
  const { userId, password } = inputs;

  const onClickLogin = () => {
    const user = {
      username: "seungyeol1",
      password: "12345678",
    };
    dispatch(postLogin(user));
  };
  return (
    <>
      <div className="form-wrapper">
        <div className="login_form">
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
        </div>
      </div>
    </>
  );
};

export default LoginForm;
