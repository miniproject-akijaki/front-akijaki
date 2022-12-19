import { useState } from "react";
import { useInputChange } from "../../core/hooks/useInputChange";
import Visibility from "../material/VisibilityIcon";
import CheckVisibility from "../material/CheckVisibilityIcon";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postSignup } from "../../core/api/login";
import { Check } from "@mui/icons-material";
import { useCustomNavigate } from "../../core/hooks/useCustomNavigate";

const SingUpForm = () => {
  const dispatch = useDispatch();
  const [customNavigate] = useCustomNavigate();

  const { visibil, checkVisibil } = useSelector((state) => state.visibil);

  const [inputs, onChangeInput] = useInputChange();
  const { userId, password, passwordCheck, nickName } = inputs;

  const onSignup = () => {
    const newUser = {
      nickname: nickName,
      username: userId,
      password: password,
    };
    postSignup(newUser).then((res) => {
      console.log(res);
      localStorage.setItem("id", res.headers.authorization);
      customNavigate("/");
    });
  };
  return (
    <div className="signup_form">
      <p className="login_title">회원가입</p>
      <div className="login_input">
        <label id="login_id">아이디 : </label>
        <input
          type="text"
          value={userId}
          name="userId"
          placeholder={"아이디를 입력해주세요"}
          onChange={onChangeInput}
        />
        <br></br>
        <label>비밀번호 :</label>
        {visibil ? (
          <input
            type="text"
            value={password}
            name="password"
            placeholder={"비밀번호를 입력해주세요"}
            onChange={onChangeInput}
          />
        ) : (
          <input
            type="password"
            value={password}
            name="password"
            placeholder={"비밀번호를 입력해주세요"}
            onChange={onChangeInput}
          />
        )}

        <div id="signup_visibil">
          <Visibility />
        </div>

        <br></br>
        <label>비밀번호확인:</label>
        {checkVisibil ? (
          <input
            id="password_check"
            type="text"
            name="passwordCheck"
            value={passwordCheck}
            placeholder={"비밀번호를 한번 더 입력해주세요"}
            onChange={onChangeInput}
          />
        ) : (
          <input
            id="password_check"
            type="password"
            name="passwordCheck"
            value={passwordCheck}
            placeholder={"비밀번호를 한번 더 입력해주세요"}
            onChange={onChangeInput}
          />
        )}

        <div id="signup_checkvisibil">
          <CheckVisibility />
        </div>
        <br></br>
        <label id="nickName">닉네임:</label>
        <input
          type="text"
          id="nickName"
          name="nickName"
          value={nickName}
          placeholder={"닉네임을 입력해주세요"}
          onChange={onChangeInput}
        />
      </div>
      <div className="login_btn">
        <button onClick={onSignup}>확인</button>
        <button
          onClick={() => {
            customNavigate("/");
          }}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default SingUpForm;
