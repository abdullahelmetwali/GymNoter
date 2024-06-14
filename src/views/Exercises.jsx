import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchedList from "../components/ForExercises/SearchedList";
import ExercisesList from "../components/ForExercises/ExercisesList";

const Exercises = () => {
  const { category } = useParams();
  const url = "https://dummyjson.com/products";
  const [searchVal, setSearchVal] = useState("");
  const [products, setProducts] = useState([]);
  const [searchedPro, setSearchedPro] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(
    category.toLocaleLowerCase()
  );
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const getResponse = await fetch(url);
        const getData = await getResponse.json();
        selectedProducts === "allexercises"
          ? setProducts(getData.products)
          : setProducts(
              getData.products.filter(
                (product) => product.category === selectedProducts
              )
            );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [url, selectedProducts]);

  useEffect(() => {
    const getSearch = () => {
      if (searchVal) {
        const searchedResults = products.filter((pro) => {
          return pro.title.toLocaleLowerCase().includes(searchVal);
        });
        setSearchedPro(searchedResults);
      } else {
        setSearchedPro([]);
      }
    };
    getSearch();
  }, [searchVal, products]);

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
            src="/public/imgs/arnold1.jpg"
            className="w-full brightness-[0.3] h-1/2"
            alt="Background"
          />
          <h1 className="absolute text-[5vw] font-black tracking-wider">
            ARE YOU READY BEAST
          </h1>
        </div>
      </div>
      <section className="mt-10">
        <div className="flex gap-4">
          {[
            "all exercises",
            "beauty",
            "fragrances",
            "groceries",
            "furniture",
          ].map((category) => (
            <div
              key={category}
              className="p-2 bg-stone-500 cursor-pointer"
              onClick={() =>
                setSelectedProducts(
                  category.replace(" ", "").toLocaleLowerCase()
                )
              }
            >
              {category}
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="search for an exercise"
          className="searchInput bg-gray-600 text-white"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value.toLocaleLowerCase())}
        />
      </section>
      <main className="products and search">
        {searchVal && searchedPro ? (
          <SearchedList searchedProducts={searchedPro} />
        ) : (
          <ExercisesList products={products} />
        )}
      </main>
    </main>
  );
};
export default Exercises;
