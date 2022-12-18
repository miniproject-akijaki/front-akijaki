import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { __userLogin } from "../../redux/thunk/thunk";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    userId: "",
    password: "",
  });

  const onChaangeInput = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickBtn = (event) => {
    const userInform = {
      userId: userId,
      password: password,
    };
    dispatch(__userLogin(userInform));
  };
  const { userId, password } = inputs;
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
              onChange={onChaangeInput}
            />
            <br></br>
            <label>비밀번호 :</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder={"비밀번호를 입력해주세요"}
              onChange={onChaangeInput}
            />
          </div>
          <div className="login_btn">
            <button onClick={onClickBtn}>확인</button>
            <button>취소</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
