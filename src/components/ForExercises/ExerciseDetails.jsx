import { useMemo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NowExercise from "./NowExercise.jsx";
import ExercisesList from "./ExercisesList.jsx";
const ExerciseContent = () => {
  const url = "https://dummyjson.com/products";
  const beUpdatedToState = useSelector((state) => state.counter);
  const NowProduct = useMemo(
    () => JSON.parse(sessionStorage.getItem("exercise")) || beUpdatedToState,
    [beUpdatedToState]
  );
  const [likedProducts, setLikedProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getResponse = await fetch(url);
        const getData = await getResponse.json();
        const getCategory = getData.products.filter((likedProd) => {
          return likedProd.category === NowProduct.category;
        });
        setLikedProducts(
          getCategory.filter((likedProduct) => {
            return likedProduct.title !== NowProduct.title;
          })
        );
      } catch (error) {
        return <h1>Error : {error.message}</h1>;
      }
    };
    fetchData();
  }, [url, NowProduct]);
  // const bodyPartList = [
  //   "back",
  //   "cardio",
  //   "chest",
  //   "lower arms",
  //   "lower legs",
  //   "neck",
  //   "shoulders",
  //   "upper arms",
  //   "upper legs",
  //   "waist",
  // ];
  // const exercise = {
  //   bodyPart: "waist",
  //   equipment: "body weight",
  //   gifUrl: "https://v2.exercisedb.io/image/UcvY9fRgNeiV4m",
  //   id: "0001",
  //   instructions: [
  //     "Lie flat on your back with your knees bent and feet flat on the ground.",
  //     "Place your hands behind your head with your elbows pointing outwards.",
  //     "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
  //     "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
  //     "Repeat for the desired number of repetitions.",
  //   ],
  //   name: "3/4 sit-up",
  //   secondaryMuscles: ["hip flexors", "lower back"],
  //   target: "abs",
  // };
  // const equipmentList = [
  //   "assisted",
  //   "band",
  //   "barbell",
  //   "body weight",
  //   "bosu ball",
  //   "cable",
  //   "dumbbell",
  //   "elliptical machine",
  //   "ez barbell",
  //   "hammer",
  //   "kettlebell",
  //   "leverage machine",
  //   "medicine ball",
  //   "olympic barbell",
  //   "resistance band",
  //   "roller",
  //   "rope",
  //   "skierg machine",
  //   "sled machine",
  //   "smith machine",
  //   "stability ball",
  //   "stationary bike",
  //   "stepmill machine",
  //   "tire",
  //   "trap bar",
  //   "upper body ergometer",
  //   "weighted",
  //   "wheel roller",
  // ];
  // const targetList = [
  //   "abductors",
  //   "abs",
  //   "adductors",
  //   "biceps",
  //   "calves",
  //   "cardiovascular system",
  //   "delts",
  //   "forearms",
  //   "glutes",
  //   "hamstrings",
  //   "lats",
  //   "levator scapulae",
  //   "pectorals",
  //   "quads",
  //   "serratus anterior",
  //   "spine",
  //   "traps",
  //   "triceps",
  //   "upper back",
  // ];

  // const NowProduct = useMemo(
  //   () => JSON.parse(sessionStorage.getItem("exercise")) || {},
  //   []
  // );
  // useEffect(() => {
  //   console.log(anotherCategoriesLiked);
  // }, [anotherCategoriesLiked]);
  return (
    <>
      <section className="grid grid-cols-2">
        <NowExercise Exercise={NowProduct} />
      </section>
      <section className="mt-10">
        <h1 className="my-10">
          This Is Another
          <strong className="mx-1 text-red-800">Category</strong>
          You Might Like
        </h1>
        <main>
          <section className="flex gap-2">
            <ExercisesList products={likedProducts} />
          </section>
        </main>
      </section>
    </>
  );
};

export default ExerciseContent;

{
  /* <div>
          <img
            src={NowProduct.images[0] || NowProduct.images}
            className="w-[10rem]"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-wide">
            {NowProduct.title}
          </h1>
          <div className="category">
            <h2>This is category : </h2>
            <NavLink
              to={`/exercises/${NowProduct.category}`}
              className="active px-4 py-1"
            >
              {NowProduct.category}
            </NavLink>
          </div>
          <div className="secondary muscles">
            <h2>this is Secondary Muscles</h2>
            <div className="flex gap-2">
              {NowProduct.tags.map((tag, index) => (
                <p key={index} className="active px-4 py-1">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div> */
}
