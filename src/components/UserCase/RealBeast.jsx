import { useSelector } from "react-redux";
import { useMemo, useRef } from "react";
import CaseBody from "./CaseBody";

const RealBeast = () => {
  const beUptadedToRoutines = useSelector((state) => state.user.routines);
  const beUpdateToUser = useSelector((state) => state.user.user);
  const storedDetails = localStorage.getItem("userDetails");
  const userDetails = storedDetails ? JSON.parse(storedDetails) : null;

  const Routines = useMemo(() => {
    const routinesFromStorage = storedDetails
      ? userDetails[1] || beUptadedToRoutines
      : [];
    return routinesFromStorage;
  }, [storedDetails, userDetails, beUptadedToRoutines]);

  const RealUser = useMemo(() => {
    return storedDetails ? userDetails[0] || beUpdateToUser : {};
  }, [storedDetails, beUpdateToUser, userDetails]);

  const handleClick = (routine) => {
    const KilogramsAndReps = {
      playedKilograms: kilograms.current,
      playedReps: reps.current,
    };
    const sameExercise = Routines.some(
      (exercise) => exercise.id === routine.id
    );
    if (!sameExercise) {
      Routines.push(Object.assign(routine, KilogramsAndReps));
      const updatedUserDetails = userDetails
        ? [RealUser, Routines]
        : [RealUser];
      localStorage.setItem("userDetails", JSON.stringify(updatedUserDetails));
    }
  };

  const kilograms = useRef([]);
  const reps = useRef([]);

  return (
    <>
      <p>hello {RealUser.firstName}</p>
      <div>
        {/* {Routines.map((routine, index) => (
          <div key={index} className="py-10 ml-10">
            <div>
              <img
                src={routine.images || routine.images[0]}
                className="w-1/3 h-1/3"
              />
            </div>
            <h1>{routine.brand}</h1>
            <p>{routine.title}</p>
            <div>
              <div className="grid bg-white text-black">
                {Array.from({ length: divNums }, (_, index) => (
                  <div key={index} className="flex gap-3 bg-white text-black">
                    <p>{index + 1}</p>
                    <input
                      type="number"
                      className="w-[5rem] bg-transparent"
                      placeholder="kg"
                      onChange={(e) => {
                        const valueToNumber = parseInt(e.target.value);
                        kilograms.current[index] = isNaN(valueToNumber)
                          ? null
                          : valueToNumber;
                      }}
                    />
                    <input
                      type="number"
                      className="w-[5rem] bg-transparent"
                      placeholder="reps"
                      onChange={(e) => {
                        const valueToNumber = parseInt(e.target.value);
                        reps.current[index] = isNaN(valueToNumber)
                          ? null
                          : valueToNumber;
                      }}
                    />
                    <button
                      className="bg-red-600 px-1"
                      onClick={() => handleClick(routine)}
                    >
                      save reps
                    </button>
                  </div>
                ))}
                <button onClick={() => setDivNums(divNums + 1)}>
                  click to add
                </button>
              </div>
            </div>
          </div>
        ))} */}
      </div>
      <div>
        <CaseBody
          Routines={Routines}
          handleClick={handleClick}
          kilograms={kilograms}
          reps={reps}
        />
      </div>
    </>
  );
};

export default RealBeast;
