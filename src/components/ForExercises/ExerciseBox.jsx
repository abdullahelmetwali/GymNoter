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
          className={`w-full`}
        >
          <div>
            <img src={exercise.gifUrl} className=" w-[9rem] h-fit rounded-lg mob:w-[20rem]" />
          </div>
        </NavLink>
        <NavLink
        className={` font-semibold text-nowrap tracking-wide text-center mob:w-[17rem] mob:text-wrap w-20rem`}
          to={`/exercises/${exercise.bodyPart.replaceAll(' ','')}/${exercise.id}`}
          onClick={() => dispatch(add(exercise))}
        >
          <h1>{exercise.name}</h1>
        </NavLink>
      </div>
    )
}
export default ExerciseBox