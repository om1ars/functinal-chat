import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUSer(state, action) {
      state.user = action.payload;
    },
  },
});

export const {setUSer} = userSlice.actions;
export default userSlice.reducer;
