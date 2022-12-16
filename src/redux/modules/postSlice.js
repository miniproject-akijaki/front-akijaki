import { createSlice } from "@reduxjs/toolkit";

// import {

// } from "../thunk/thunk";

let initialState = {
  post: [],
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder.addCase(__getPosts.pending, (state, action) => {
  //       state.isLoading = true;
  //     });
  //     builder.addCase(__getPosts.fulfilled, (state, action) => {
  //       state.post = action.payload;
  //       state.isLoading = false;
  //     });
  //     builder.addCase(__getPosts.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  //     builder.addCase(__postPosts.fulfilled, (state, action) => {
  //       state.post.push(action.payload);
  //     });
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
  //   },
});

export const {} = postSlice.actions;

const postReducer = postSlice.reducer;

export default postReducer;
