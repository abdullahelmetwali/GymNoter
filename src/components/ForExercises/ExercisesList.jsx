import PropTypes from "prop-types";
import ExerciseBox from "./ExerciseBox";
import { useParams } from "react-router-dom";
const ExercisesList = ({ exercises }) => {
  const { contentUrl } = useParams();
  return (
    <>
      {exercises.length !== 0 ? (
        exercises.map((exercise, index) => (
          <ExerciseBox exercise={exercise} key={index} />
        ))
      ) : (
        <p className="text-nowrap">
          Sorry no exercises updated for{" "}
          <strong className="uppercase">{contentUrl}</strong>
        </p>
      )}
    </>
  );
};

ExercisesList.propTypes = {
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      gifUrl: PropTypes.string,
    })
  ),
};

export default ExercisesList;
