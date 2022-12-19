import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, instance } from "../../core/axios/axios";
import sweetAlert from "../../core/utils/useSweet";
import axios from "axios";

export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/post");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPosts = createAsyncThunk(
  "postPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/post", payload);
      sweetAlert(1000, "success", "코디 작성 성공");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

let initialState = {
  post: [],
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    changeInputField: (state, { payload: { id, value } }) => {
      return {
        ...state,
        [id]: value,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__getPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__getPosts.fulfilled, (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
    });
    builder.addCase(__getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__postPosts.fulfilled, (state, action) => {
      state.post.push(action.payload);
    });
    //     builder.addCase(__deleteComment.fulfilled, (state, action) => {
    //       state.post = state.post.filter((post) => {
    //         return post.id !== action.payload.id;
    //       });
    //       state.post = [...state.post, action.payload];
    //     });
  },
});

export const { changeInputField } = postSlice.actions;

const postReducer = postSlice.reducer;

export default postReducer;
