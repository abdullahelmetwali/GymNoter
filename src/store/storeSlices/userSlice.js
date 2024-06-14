import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  routines: [],
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
      const isAlreadyAdded = state.routines.some(
        (exercise) => exercise.id === newExercise.id
      );
      if (!isAlreadyAdded) {
        if (storedUserDetails) {
          const routines = state.routines;
          routines.push(newExercise);
          const userDetails = [seeIfRealUser, routines];
          localStorage.setItem("userDetails", JSON.stringify(userDetails));
        } else {
          const routines = state.routines;
          routines.push(newExercise);
          sessionStorage.setItem("guestRoutines", JSON.stringify(routines));
        }
      }
    },
  },
});
export const { getUser, addExercise } = userSlice.actions;
export default userSlice.reducer;
