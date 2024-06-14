import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { add } from "../../store/storeSlices/counterSlice";
const ExercisesList = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <>
      {products.map((product, index) => (
        <div key={index} className="bg-white text-black w-1/2 ">
          <NavLink
            to={`/exercises/${product.category}/${product.title}`}
            onClick={() => {
              dispatch(add(product));
            }}
          >
            <div>
              <img src={product.images[0]} className=" w-1/3 h-1/4" />
            </div>
          </NavLink>
          <NavLink
            to={`/exercises/${product.category}/${product.title}`}
            onClick={() => dispatch(add(product))}
          >
            <h1>{product.title}</h1>
          </NavLink>
        </div>
      ))}
    </>
  );
};

ExercisesList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default ExercisesList;
