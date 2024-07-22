/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { add } from "../../store/storeSlices/nowExerciseSlice"
const ExerciseBox = ({ exercise }) => {
    const dispatch = useDispatch();
    return(
        <div className="grid justify-items-center justify-center items-end cursor-pointer bg-white rounded-2xl p-4 text-black w-full hover:bg-[#ddddddee] transition-colors">
        <NavLink
          to={`/exercises/${exercise.bodyPart.replaceAll(' ','')}/${exercise.id}`}
          onClick={() => {
            dispatch(add(exercise));
          }}
          className={`w-full`}
        >
          <div>
            <img src={exercise.gifUrl} className="h-fit rounded-lg" />
          </div>
        </NavLink>
        <NavLink
        className={` font-semibold text-wrap tracking-wide text-center`}
          to={`/exercises/${exercise.bodyPart.replaceAll(' ','')}/${exercise.id}`}
          onClick={() => dispatch(add(exercise))}
        >
          <h1 className="w-[13rem]">{exercise.name}</h1>
        </NavLink>
      </div>
    )
}
export default ExerciseBox