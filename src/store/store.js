import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./storeSlices/counterSlice";
import userSlice from "./storeSlices/userSlice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});
export default store;
