import { createSlice } from "@reduxjs/toolkit";

import { __postPosts, __userLogin } from "../thunk/thunk";

let initialState = {
  signup: [],
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
    builder.addCase(__userLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__userLogin.fulfilled, (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
    });
    builder.addCase(__userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__postPosts.fulfilled, (state, action) => {
      state.post.push(action.payload);
    });
    //     builder.addCase(__postComment.fulfilled, (state, action) => {
    //       state.post = state.post.filter((post) => {
    //         return post.id !== action.payload.id;
    //       });
    //       state.post = [...state.post, action.payload];
    //     });
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
