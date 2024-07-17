import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addExercise } from "../../store/storeSlices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";
const NowExercise = ({ Exercise }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = localStorage.getItem("userDetails");
  const seeUser = useMemo(() => {
    return userDetails ? JSON.parse(userDetails)[0] : null;
  }, [userDetails]);
  return (
    <>
      <div>
        <img src={Exercise.gifUrl} className="w-1/2 rounded-lg mob:w-[90%]" />
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-wide text-black text-nowrap uppercase">
          {Exercise.name}
        </h1>
        <div>
          <h2 className="text-black font-semibold tracking-wide text-lg my-2">
            BODY PART :{" "}
          </h2>
          <Link
            to={`/exercises/${Exercise.bodyPart.replaceAll(" ", "")}`}
            className=" bg-black font-semibold rounded-2xl px-4 py-1 uppercase"
          >
            - {Exercise.bodyPart}
          </Link>
        </div>
        <div>
          <h2 className="text-black font-semibold tracking-wide text-lg my-2">
            SECONDARY MUSCLES :
          </h2>
          <div className="flex gap-2 mob:flex-wrap">
            {(Exercise.secondaryMuscles || []).map((muscle, index) => (
              <Link
                key={index}
                className="rounded-2xl w-fit bg-black font-semibold px-4 py-1 uppercase mob:text-wrap"
                to={`/exercises/${muscle.replaceAll(" ", "")}`}
              >
                - {muscle}
              </Link>
            ))}
          </div>
        </div>
        <div className=" bg-black p-3 my-3 rounded-2xl ">
          <h2 className=" tracking-wide text-lg my-2 font-semibold">
            INSTRUCTIONS :
          </h2>
          <div>
            <ul>
              {Exercise.instructions?.map((instruction, index) => (
                <li key={index} className="p-2">
                  {index + 1} - {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(addExercise(Exercise)),
                navigate(
                  seeUser
                    ? `/user/${seeUser.firstName}${seeUser.lastName}`
                    : `/user/BeastGuest`
                );
            }}
            className="bg-black rounded-2xl px-6 py-1 my-0"
          >
            Add Exercise
          </button>
        </div>
      </div>
    </>
  );
};

NowExercise.propTypes = {
  Exercise: PropTypes.shape({
    gifUrl: PropTypes.string,
    name: PropTypes.string,
    bodyPart: PropTypes.string,
    secondaryMuscles: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default NowExercise;
