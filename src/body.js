import reslist from "./utilities.js/mockdata";
import RestaurantCard from "./restaurant component";
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurants..."
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list">
        {reslist.map((restaurant)=>(
          <RestaurantCard key={restaurant.info.id}  resData={restaurant}/>
        ))}
      </div>

    </div>
  );
};

export default Body;
