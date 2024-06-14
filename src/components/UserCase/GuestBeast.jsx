import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef, useMemo, useState } from "react";
import CaseBody from "./CaseBody";
const GuestBeast = () => {
  const beUpdatedToRoutines = useSelector((state) => state.user.routines);
  const guestRoutines = sessionStorage.getItem("guestRoutines");

  const Routines = useMemo(() => {
    return guestRoutines
      ? JSON.parse(guestRoutines) || beUpdatedToRoutines
      : [];
  }, [beUpdatedToRoutines, guestRoutines]);
  const [allSets, setAllSets] = useState([]);
  const handleClick = (routine) => {
    const set = {
      playedKilograms: kilograms.current,
      playedReps: reps.current,
    };
    setAllSets((prevSet) => {
      if (set.playedKilograms === "" && set.playedReps === "") {
        ("");
      } else {
        const updatedSets = [...prevSet, set];
        const routinesArray = JSON.parse(guestRoutines);
        const indexToUpdate = routinesArray.findIndex(
          (r) => r.id === routine.id
        );
        if (indexToUpdate !== -1) {
          routinesArray[indexToUpdate].allSets = updatedSets;
          sessionStorage.setItem(
            "guestRoutines",
            JSON.stringify(routinesArray)
          );
        }
        return updatedSets;
      }
    });
  };

  const kilograms = useRef("");
  const reps = useRef("");
  return (
    <>
      <div>
        <p>Note: The routines will not be saved</p>
        <p>
          If you want to save routines, please{" "}
          <NavLink to={`/login`} className="ml-3 underline text-red-700">
            Login
          </NavLink>
        </p>
      </div>
      <p>hello</p>
      <div>
        <CaseBody
          Routines={Routines}
          kilograms={kilograms}
          reps={reps}
          handleClick={handleClick}
          allSets={allSets}
        />
      </div>
    </>
  );
};
export default GuestBeast;
