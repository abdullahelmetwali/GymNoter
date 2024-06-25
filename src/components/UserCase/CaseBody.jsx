import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../../store/storeSlices/nowExerciseSlice";
/* eslint-disable react/prop-types */
const CaseBody = ({ Exercises, deleteExercise, saveNote }) => {
  window.scrollTo({
    top : 0,
    behavior : 'smooth'
  })
  const dispatch = useDispatch();
  return (
    <main className="bg-white my-8 rounded-xl grid grid-cols-3 mob:grid-cols-1">
      {Exercises?.map((exercise, exerciseIndex) => (
        <div
          key={exerciseIndex}
          className="flex flex-col justify-items-center py-10 px-6"
        >
          <Link
            to={`/exercises/${exercise.bodyPart.replaceAll(' ','')}/${exercise.id}`}
            onClick={() => dispatch(add(exercise))}
          >
            <div>
              <img
                src={exercise.gifUrl}
                className="w-1/3 h-1/2 rounded-xl mob:w-full mob:h-auto"
                alt={`Exercise NO.${exerciseIndex + 1}`}
              />
            </div>
          </Link>
          <div className="w-full text-black bg-[#b9b9b9b5] p-4 rounded-xl">
            <Link
              className="font-bold tracking-wide text-lg"
              to={`/exercises/${exercise.bodyPart.replaceAll(' ','')}/${exercise.id}`}
              onClick={() => dispatch(add(exercise))}
            >
              {exercise.name}
            </Link>
           <div>
            <textarea name="note" id="note" cols={45} rows={3} className={`rounded-lg p-2 text-md font-medium outline-none w-auto my-2 NOTE${exerciseIndex + 1}`} placeholder={exercise.note ? exercise.note : "Write Your Notes Here"}></textarea>
           </div>
           <div>
            <button className="bg-green-600  text-white mr-2 px-6 py-1 rounded-3xl" onClick={() => saveNote(Exercises , exerciseIndex , document.querySelector(`.NOTE${exerciseIndex + 1}`).value )}>
              Save Note
            </button>
             <button
              onClick={() => deleteExercise(exerciseIndex)}
              className="bg-red-600  text-white px-6 py-1 rounded-3xl "
            >
              Delete
            </button>
           </div>
          </div>
          <hr className="mx-3 mt-20 hidden mob:block" />
        </div>
      ))}
    </main>
  );
};

export default CaseBody;
