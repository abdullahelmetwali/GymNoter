import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const nowExerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    add: (state, action) => {
      sessionStorage.setItem(
        "exercise",
        JSON.stringify(Object.assign(state, action.payload))
      );
    },
  },
});

export const { add, subct } = nowExerciseSlice.actions;
export default nowExerciseSlice.reducer;
