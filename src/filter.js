const Filter = ({ listOfRestaurants, setListOfRestaurants }) => {
  return (
    <div className="filtered-list">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
          setListOfRestaurants(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
};

