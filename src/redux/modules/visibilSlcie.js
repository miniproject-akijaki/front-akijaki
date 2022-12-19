import { createSlice } from "@reduxjs/toolkit";

const visibilSlice = createSlice({
  name: "longi",
  initialState: { visibil: false, checkVisibil: false },
  reducers: {
    changeVisible: (state, action) => {
      state = { ...state, visibil: !action.payload };
      return state;
    },
    changeCheckVisible: (state, action) => {
      state = { ...state, checkVisibil: !action.payload };
      return state;
    },
  },
});

export const { changeVisible, changeCheckVisible } = visibilSlice.actions;

const visibilRedcuer = visibilSlice.reducer;

export default visibilRedcuer;
