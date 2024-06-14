import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const counterSlice = createSlice({
  name: "counter",
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

export const { add, subct } = counterSlice.actions;
export default counterSlice.reducer;
