import { useCustomNavigate } from "../../core/hooks/useCustomNavigate";

const UserForm = ({ setToken }) => {
  const [customNavigate] = useCustomNavigate();
  const onClickLogOut = () => {
    localStorage.removeItem("id");
    setToken(null);
  };
  return (
    <div className="user_form">
      <p className="user_title">
        어서오세요!<br></br> 준님
      </p>
      <div className="user_btn">
        <button
          onClick={() => {
            customNavigate("/main");
          }}
        >
          메인으로
        </button>
        <button onClick={onClickLogOut}>로그아웃</button>
        {/* <button>회원탈퇴</button> */}
      </div>
    </div>
  );
};

export default UserForm;
