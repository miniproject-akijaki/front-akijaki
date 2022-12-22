import { useCustomNavigate } from "../../core/hooks/useCustomNavigate";
import { postSignout } from "../../core/api/login";
const UserForm = ({ setToken, msg }) => {
  const [customNavigate] = useCustomNavigate();
  const onClickLogOut = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("msg");
    setToken(null);
  };
  const onClickSingout = () => {
    if (!window.confirm("정말 회원을 탈퇴하시겠습니까?")) return;
    postSignout().then((res) => {
      customNavigate("/");
    });
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
