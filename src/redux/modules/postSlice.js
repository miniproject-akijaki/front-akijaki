import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, instance } from "../../core/axios/axios";
import sweetAlert from "../../core/utils/sweetAlert";
import axios from "axios";

export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get("/api/post");
      // const data = await axios.get("http://localhost:3001/post");
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
      const data = await baseURL.post("/api/post", payload);
      // const data = await axios.post("http://localhost:3001/post", payload);
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "코디 작성 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __modifyPosts = createAsyncThunk(
  "modifyPosts",
  async (payload, thunkAPI) => {
    try {
      // const data = await instance.post("/api/post", payload);
      const data = await baseURL.put(`/api/post/${payload.num}`, payload);
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "코디 수정 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteyPosts = createAsyncThunk(
  "deletePosts",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.delete(`/api/post/${payload}`);
      // const data = await axios.delete(`http://localhost:3001/post/${payload}`);
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "코디 삭제 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postComment = createAsyncThunk(
  "postComment",
  async (payload, thunkAPI) => {
    try {
      //payload 글번호
      const data = await baseURL.post(`/api/comment/${payload}`);
      // const data = await axios.delete(`http://localhost:3001/post/${payload}`);
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "댓글 작성 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __modifyComment = createAsyncThunk(
  "modifyComment",
  async (payload, thunkAPI) => {
    try {
      // payload 댓글번호임
      const data = await baseURL.put(`/api/comment/${payload}`);
      // const data = await axios.delete(`http://localhost:3001/post/${payload}`);
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "댓글 수정 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      // payload 댓글번호임
      const data = await baseURL.delete(`/api/comment/${payload}`);
      // const data = await axios.delete(`http://localhost:3001/post/${payload}`);
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "댓글 삭제 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  postList: [],
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
      console.log(action, "get");
      state.postList = action.payload.postList;
      state.isLoading = false;
    });
    builder.addCase(__getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__postPosts.fulfilled, (state, action) => {
      console.log(action, "post");
      state.postList.push(action.payload);
    });
    // builder.addCase(__modifyPosts.fulfilled, (state, action) => {
    //   state.post.push(action.payload);
    // });
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
