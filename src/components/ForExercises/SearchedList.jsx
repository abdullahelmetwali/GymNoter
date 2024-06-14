import PropTypes from "prop-types";

const SearchedList = ({ searchedProducts }) => {
  return (
    <section>
      {searchedProducts.map((pro, ind) => (
        <>
          <div key={ind}>
            <img src={pro.images[0] || pro.images} className="w-1/2 h-1/2" />
            <h1>{pro.title}</h1>
          </div>
        </>
      ))}
    </section>
  );
};
export default SearchedList;

SearchedList.propTypes = {
  searchedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};
