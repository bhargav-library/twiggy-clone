import reslist from "./utilities.js/mockdata";
import RestaurantCard from "./restaurant component";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(reslist);

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search restaurants..." />
        <button className="search-btn">Search</button>
      </div>

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

      <div className="restaurant-list">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

