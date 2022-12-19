import sweetAlert from "../utils/useSweet";
import { instance } from "../axios/axios";
import Swal from "sweetalert2";

export const postLogin = async (post) => {
  try {
    const data = await instance.post("/api/login", post);
    sweetAlert(1000, "success", "로그인 성공");
    return data;
  } catch (error) {
    sweetAlert(1000, "error", error.response.data.msg);
  }
};

export const postSignup = async (post) => {
  try {
    const data = await instance.post("/api/signup", post);
    sweetAlert(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    sweetAlert(1000, "error", error.response.data.msg);
  }
};
