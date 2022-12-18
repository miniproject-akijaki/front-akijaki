import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axiosApi = (url, options) => {
  const intance = axios.create({ baseURL: url, ...options });
  return intance;
};
const defaultInstance = axiosApi();

export const __userLogin = createAsyncThunk(
  "userLogin",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://localhost:3001/signup/${payload.userId}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __userSignUp = createAsyncThunk(
  "userSignUp",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/signup", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 지호매니저님 코드
// export const postSignup = async (post) => {
//   try {
//     const data = await instance.post("/api/auth/signup", post);
//     useSweet(1000, "success", "회원가입 성공");
//     return data;
//   } catch (error) {
//     useSweet(1000, "error", error.response.data.msg);
//   }
// };

export const __postPosts = createAsyncThunk(
  "postPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
