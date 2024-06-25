import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import CaseBody from "./CaseBody";
import { useNavigate } from "react-router-dom";

const RealBeast = () => {
  const navigate = useNavigate()
  const beUptadedToRoutines = useSelector((state) => state.user.exercises);
  const beUpdateToUser = useSelector((state) => state.user.user);
  const storedDetails = localStorage.getItem("userDetails");
  const [userExercises, setUserExercises] = useState([]);
  useEffect(() => {
    storedDetails
      ? setUserExercises(JSON.parse(storedDetails)[1]) || beUptadedToRoutines
      : [];
  }, [storedDetails, beUptadedToRoutines]);

  const RealUser = useMemo(() => {
    return storedDetails ? JSON.parse(storedDetails)[0] || beUpdateToUser : {};
  }, [storedDetails, beUpdateToUser]);

  const deleteExercise = (index) => {
    const updatedExercises = [...userExercises];
    updatedExercises.splice(index, 1);
    localStorage.setItem(
      "userDetails",
      JSON.stringify([RealUser, updatedExercises])
    );
    setUserExercises(updatedExercises);
  };
  return (
    <section className="px-8 py-6">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold tracking-wide">
          Welcome {RealUser.gender === "" ? "" : RealUser.gender === "male" ? 'Mr' : 'Mrs'}
          <strong className="mx-1">
            {RealUser.firstName} {RealUser.lastName}
          </strong>
        </h1>
        <button
          className="px-4 py-1 rounded-2xl bg-red-600"
          type="button"
          onClick={() => {
            navigate(`/user/BeastGuest`),
            localStorage.clear(), 
            location.reload();
          }}
        >
          Log Out
        </button>
      </div>
      <CaseBody Exercises={userExercises} deleteExercise={deleteExercise} />
    </section>
  );
};

export default RealBeast;
