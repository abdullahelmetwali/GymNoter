import { useMemo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NowExercise from "./NowExercise.jsx";
import ExercisesList from "./ExercisesList.jsx";
const ExerciseContent = () => {
  const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1324&offset=0'
  const beUpdatedToState = useSelector((state) => state.exercise);
  const NowExContent = useMemo(
    () => JSON.parse(sessionStorage.getItem("exercise")) || beUpdatedToState,
    [beUpdatedToState]
  );
  const [bodyPartExercises, setBodyPartExercises] = useState([]);
  const [equipmentExercises , setEquipemtExercises] = useState([]);
  const [targetExercises , setTargetExercises] = useState([]);
  useEffect(() => {
    window.scrollTo({
      top : 0,
      behavior :'smooth'
    })
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '79d3dc995bmsh103931bd4ac29b0p1298dbjsn4d4f616ba141',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};
    const fetchData = async () => {
      try {
        const getResponse = await fetch(url , options);
        const getData = await getResponse.json();
        setBodyPartExercises(
          getData.filter((exercise) => {
            return exercise.bodyPart === NowExContent.bodyPart 
            && exercise.id !== NowExContent.id;
          })
        );
        setEquipemtExercises(
          getData.filter((exercise) => {
            return exercise.equipment === NowExContent.equipment && exercise.id !== NowExContent.id
          })
        );
        setTargetExercises(
          getData.filter((exercise) => {
            return exercise.target === NowExContent.target 
            && exercise.id !== NowExContent.id
          })
        )
      } catch (error) {
        return <h1>Error : {error.message}</h1>;
      }
    };
    fetchData();
  }, [url,NowExContent]);
  return (
    <>
      <section className="grid grid-cols-2 items-center mx-8 p-6 bg-white rounded-lg mob:grid-cols-1">
        <NowExercise Exercise={NowExContent}/>
      </section>
      <section className="my-10 px-6 text-nowrap">
        <h1 className="my-10">
          This Is Another
          <strong className="mx-1 text-red-800 uppercase">{NowExContent.bodyPart}</strong>
          You Might Want
        </h1>
        <main>
          <section className="flex gap-2 overflow-x-auto whitespace-no-wrap scroll-snap-x-mandatory slider">
            <ExercisesList exercises={bodyPartExercises} />
          </section>
        </main>
      </section>
      <section className="my-10 px-6 text-nowrap">
        <h1 className="my-10">
          This Is Another
          <strong className="mx-1 text-red-800 uppercase">{NowExContent.equipment}</strong>
          You Might Want
        </h1>
        <main>
          <section className="flex gap-2 overflow-x-auto whitespace-no-wrap scroll-snap-x-mandatory slider">
            <ExercisesList exercises={equipmentExercises} />
          </section>
        </main>
      </section>
      <section className="my-10 px-6 text-nowrap">
        <h1 className="my-10">
          This Is Another
          <strong className="mx-1 text-red-800 uppercase">{NowExContent.target}</strong>
          You Might Want
        </h1>
        <main>
          <section className="flex gap-2 overflow-x-auto whitespace-no-wrap scroll-snap-x-mandatory slider">
            <ExercisesList exercises={targetExercises} />
          </section>
        </main>
      </section>
    </>
  );
};

export default ExerciseContent;