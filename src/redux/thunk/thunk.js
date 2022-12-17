import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const axiosApi = (url, options) => {
//   const intance = axios.create({ baseURL: url, ...options });
//   return intance;
// };
// const defaultInstance = axiosApi();

export const __postPosts = createAsyncThunk(
  "postPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3000", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
