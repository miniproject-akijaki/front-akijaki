import { useCustomNavigate } from "../../core/hooks/useCustomNavigate";

const UserForm = ({ setToken, msg }) => {
  const [customNavigate] = useCustomNavigate();
  const onClickLogOut = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("msg");
    setToken(null);
  };
  return (
    <div className="user_form">
      <p className="user_title">{msg}</p>
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
