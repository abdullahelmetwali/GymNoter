import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addExercise } from "../../store/storeSlices/userSlice";
import { NavLink } from "react-router-dom";
const NowExercise = ({ Exercise }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <img
          src={Exercise.images[0] || Exercise.images}
          className="w-[10rem]"
        />
      </div>
      <div>
        <h1 className="text-xl font-bold tracking-wide">{Exercise.title}</h1>
        <div className="category">
          <h2>This is category : </h2>
          <NavLink
            to={`/exercises/${Exercise.category}`}
            className="active px-4 py-1"
          >
            {Exercise.category}
          </NavLink>
        </div>
        <div className="secondary muscles">
          <h2>this is Secondary Muscles</h2>
          <div className="flex gap-2">
            {(Exercise.tags || []).map((tag, index) => (
              <p key={index} className="active px-4 py-1">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div>
          <button
            onClick={() => dispatch(addExercise(Exercise))}
            className="bg-red-700 mt-7"
          >
            addExercise
          </button>
        </div>
      </div>
    </>
  );
};

NowExercise.propTypes = {
  Exercise: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    tags: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string,
  }),
};

export default NowExercise;
