import { createSlice } from "@reduxjs/toolkit";

export const challengeSlice = createSlice({
  name: "challengeSelector",
  initialState: {
    value: 0,
  },
  reducers: {
    setChallenges: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setChallenges } = challengeSlice.actions;

export default challengeSlice.reducer;
