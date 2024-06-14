/* eslint-disable react/prop-types */
import { useState } from "react";
const CaseBody = ({ Routines, handleClick, kilograms, reps }) => {
  const [divNums, setDivNums] = useState(1);
  return (
    <div>
      {Routines.map((routine, routineIndex) => (
        <div key={routineIndex} className="py-10 ml-10">
          <div>
            <img src={routine.images[0]} className="w-1/3 h-1/3" />
          </div>
          <h1>{routine.brand}</h1>
          <p>{routine.title}</p>
          <div>
            <div className="grid bg-white text-black">
              {routine.allSets.length ? (
                routine.allSets.map((set, setIndex) => (
                  <div key={setIndex} className="flex gap-4">
                    <p>{setIndex + 1}</p>
                    <input
                      type="number"
                      className="w-[5rem]"
                      placeholder={set.playedKilograms}
                      onChange={(e) => {
                        const valueToNumber = parseInt(e.target.value);
                        kilograms.current = isNaN(valueToNumber)
                          ? null
                          : valueToNumber;
                      }}
                    />
                    <input
                      type="number"
                      className="w-[5rem]"
                      placeholder={set.playedReps}
                      onChange={(e) => {
                        const valueToNumber = parseInt(e.target.value);
                        reps.current = isNaN(valueToNumber)
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
                ))
              ) : (
                <div>
                  {Array.from({ length: divNums }, (_, normalIndex) => (
                    <div
                      key={normalIndex}
                      className="flex gap-3 bg-white text-black"
                    >
                      <p>{normalIndex + 1}</p>
                      <input
                        type="number"
                        placeholder="kgs"
                        className="w-[5rem]"
                        onChange={(e) => {
                          const valueToNumber = parseInt(e.target.value);
                          kilograms.current = isNaN(valueToNumber)
                            ? null
                            : valueToNumber;
                        }}
                      />
                      <input
                        type="number"
                        placeholder="reps"
                        className="w-[5rem]"
                        onChange={(e) => {
                          const valueToNumber = parseInt(e.target.value);
                          reps.current = isNaN(valueToNumber)
                            ? null
                            : valueToNumber;
                        }}
                      />
                      <button
                        className="bg-red-600 px-1"
                        onClick={() => handleClick(routine)}
                      >
                        click to save
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <button
                onClick={() => {
                  setDivNums(divNums + 1);
                }}
              >
                click to add
              </button>
            </div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CaseBody;
