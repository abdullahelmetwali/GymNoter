import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SearchedList from "../components/ForExercises/SearchedList";
import ExercisesList from "../components/ForExercises/ExercisesList";
const Exercises = () => {
  const { contentUrl } = useParams();
  const url = "https://exercisedb.p.rapidapi.com/exercises?limit=1324&offset=0";
  const [searchVal, setSearchVal] = useState("");
  const [exercises, setExercises] = useState([]);
  const [searchedEx, setSearchedEx] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '79d3dc995bmsh103931bd4ac29b0p1298dbjsn4d4f616ba141',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};
    const fetchExercises = async () => {
      try {
        const getResponse = await fetch(url, options);
        const getData = await getResponse.json();
        document.addEventListener("DOMContentLoaded", () => {
          console.log("loading ex");
        });
        contentUrl === "allexercises"
          ? setExercises(getData)
          : setExercises(
              getData.filter(
                (exercise) =>
                  exercise.bodyPart.replaceAll(" ", "") === contentUrl ||
                  exercise.equipment.replaceAll(" ", "") === contentUrl ||
                  exercise.target.replaceAll(" ", "") === contentUrl
              )
            );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchExercises();
  }, [url, contentUrl]);

  useEffect(() => {
    const getSearch = () => {
      if (searchVal) {
        const searchedResults = exercises.filter((ex) => {
          return (
            ex.name
              .toLocaleLowerCase()
              .includes(searchVal.toLocaleLowerCase()) ||
            ex.bodyPart
              .toLocaleLowerCase()
              .includes(searchVal.toLocaleLowerCase()) ||
            ex.target
              .toLocaleLowerCase()
              .includes(searchVal.toLocaleLowerCase())
          );
        });
        setSearchedEx(searchedResults);
      } else {
        setSearchedEx([]);
      }
    };
    getSearch();
  }, [searchVal, exercises]);

  error ? <p>Error: {error}</p> : "";

  isLoading ? (
    <div className="loader-wrapper">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="loader loader-line"></div>
      ))}
    </div>
  ) : (
    ""
  );
  return (
    <main>
      <div>
        <div className="relative flex justify-center items-center">
          <img
            src="/imgs/AS.jpg"
            className="w-full brightness-[0.3] h-1/2"
            alt="Background"
          />
          <h1 className="absolute text-[5vw] font-black tracking-wider">
            ARE YOU READY BEAST
          </h1>
        </div>
      </div>
      <section className="mt-10">
        <div className="px-4 mb-6 overflow-x-auto whitespace-no-wrap scroll-snap-x-mandatory slider">
          <div className="flex justify-start gap-4">
            {[
              "All Exercises",
              "Back",
              "Cardio",
              "Chest",
              "Lower Arms",
              "Lower Legs",
              "Neck",
              "Shoulders",
              "Upper Arms",
              "Upper Legs",
              "Waist",
              "abductors",
              "abs",
              "adductors",
              "biceps",
              "calves",
              "cardiovascular system",
              "delts",
              "forearms",
              "glutes",
              "hamstrings",
              "lats",
              "levator scapulae",
              "pectorals",
              "quads",
              "serratus anterior",
              "spine",
              "traps",
              "triceps",
              "upper back",
              "assisted",
              "band",
              "barbell",
              "body weight",
              "bosu ball",
              "cable",
              "dumbbell",
              "elliptical machine",
              "ez barbell",
              "hammer",
              "kettlebell",
              "leverage machine",
              "medicine ball",
              "olympic barbell",
              "resistance band",
              "roller",
              "rope",
              "skierg machine",
              "sled machine",
              "smith machine",
              "stability ball",
              "stationary bike",
              "stepmill machine",
              "tire",
              "trap bar",
              "upper body ergometer",
              "weighted",
              "wheel roller",
            ].map((bodyPart, index) => (
              <Link
                key={index}
                className={`py-1 px-6 text-white text-nowrap rounded-3xl uppercase cursor-pointer ${
                  contentUrl ===
                  bodyPart.replaceAll(" ", "").toLocaleLowerCase()
                    ? "bg-[#7070706b]"
                    : ""
                }`}
                to={`/exercises/${bodyPart.replaceAll(" ", "").toLocaleLowerCase()}`}
              >
                {bodyPart}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center m-4">
          <input
            type="text"
            placeholder="What You Want To Play ?"
            className="px-4 py-1 w-full rounded-xl bg-[#7070706b] border-none outline-none text-white"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value.toLocaleLowerCase())}
          />
        </div>
      </section>
      <main className="grid grid-cols-5 gap-3 mx-4 py-5 mob:grid-cols-3">
        {searchVal && searchedEx ? (
          <SearchedList searchedExercises={searchedEx} searchVal={searchVal} />
        ) : (
          <ExercisesList exercises={exercises} />
        )}
      </main>
    </main>
  );
};
export default Exercises;
