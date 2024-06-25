import PropTypes from "prop-types";
import ExerciseBox from "./ExerciseBox";
const SearchedList = ({ searchedExercises , searchVal}) => {
  return (
    <>
      { searchedExercises.length ?
      searchedExercises.map((ex, index) => (
        <ExerciseBox exercise={ex} key={index}/>
      )) : (
      <div >
       NO SEARCH FOR <span className="text-red-600">{searchVal}</span>
      </div>
    )}
</>
  );
};
export default SearchedList;

SearchedList.propTypes = {
  searchedExercises: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      gifUrl: PropTypes.string,
    })
  ),
  searchVal : PropTypes.string
};
