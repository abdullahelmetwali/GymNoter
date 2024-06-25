import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  exercises: [],
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getUser: (state, action) => {
      const user = [Object.assign(state.user, action.payload)];
      localStorage.setItem("userDetails", JSON.stringify(user));
    },
    addExercise: (state, action) => {
      const newExercise = action.payload;
      const storedUserDetails = localStorage.getItem("userDetails");
      const seeIfRealUser = storedUserDetails
        ? JSON.parse(localStorage.getItem("userDetails"))[0]
        : {};
      const isAlreadyAdded = state.exercises.some(
        (exercise) => exercise.id === newExercise.id
      );
      if (!isAlreadyAdded) {
        if (storedUserDetails) {
          const exercises = state.exercises;
          exercises.push(newExercise);
          const userDetails = [seeIfRealUser, exercises];
          localStorage.setItem("userDetails", JSON.stringify(userDetails));
        } else {
          const exercises = state.exercises;
          exercises.push(newExercise);
          sessionStorage.setItem("guestExercises", JSON.stringify(exercises));
        }
      }
    },
  },
});
export const { getUser, addExercise } = userSlice.actions;
export default userSlice.reducer;
