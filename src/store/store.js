import { configureStore } from "@reduxjs/toolkit";
import nowExerciseSlice from "./storeSlices/nowExerciseSlice";
import userSlice from "./storeSlices/userSlice";
const store = configureStore({
  reducer: {
    exercise: nowExerciseSlice,
    user: userSlice,
  },
});
export default store;
