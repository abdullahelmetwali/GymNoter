/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { add } from "../../store/storeSlices/nowExerciseSlice"
const ExerciseBox = ({ exercise }) => {
    const dispatch = useDispatch();
    return(
        <div className="grid justify-items-center items-end cursor-pointer bg-white rounded-2xl p-4 text-black w-full hover:bg-[#ddddddee] transition-colors">
        <NavLink
          to={`/exercises/${exercise.bodyPart.replaceAll(' ','')}/${exercise.id}`}
          onClick={() => {
            dispatch(add(exercise));
          }}
        >
          <div>
            <img src={exercise.gifUrl} className=" w-[9rem] h-fit rounded-lg" />
          </div>
        </NavLink>
        <NavLink
        className={` font-semibold tracking-wide text-center`}
          to={`/exercises/${exercise.bodyPart.replaceAll(' ','')}/${exercise.id}`}
          onClick={() => dispatch(add(exercise))}
        >
          <h1>{exercise.name}</h1>
        </NavLink>
      </div>
    )
}
export default ExerciseBox