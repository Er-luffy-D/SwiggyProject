import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local state variable- Super powerful variable;
  const [ListofRestaurant, setListofRestaurant] = useState([]);

  const [FilterRestaurant, setFilterRestaurant] = useState([]);

  const [SearchText, setSearchText] = useState("");

  // USE Effect - ITS 2 arguments callback and an dependency list
  // Its callback function call after components rendered

  useEffect(() => {
    fetchData();
  }, []);

  // Using Swiggy APi to get data (USE CORS Extension)
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Filter Button
  const FilterButton = () => (
    <button
      className="filter-btn"
      onClick={() => {
        let filterList = ListofRestaurant.filter(
          (res) => res.info.avgRating > 4
        );
        setFilterRestaurant(filterList);
      }}
    >
      Top rated Restaurants
    </button>
  );

  //Reset Button
  const ResetButton = () => (
    <button
      className="filter-btn"
      onClick={() => {
        if (FilterRestaurant.length != ListofRestaurant.length) {
          setFilterRestaurant(ListofRestaurant);
        }
      }}
    >
      All Restaurants
    </button>
  );

  // can be used to Show loading screen to user until data is not fetching
  // if(ListofRestaurant === 0){
  //     // Loader animation
  // }

  // Condintional Rendering
  if (ListofRestaurant == 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              let filterList = ListofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );

              setFilterRestaurant(filterList);
            }}
          >
            <input
              type="text"
              className="search-box"
              value={SearchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <button>Search</button>
          </form>
        </div>

        <FilterButton />
        <ResetButton />
      </div>

      <div className="res-container">
        {FilterRestaurant.map((Restaurant) => (
          <Link
            key={Restaurant.info.id}
            to={"/restaurants/" + Restaurant.info.id}
          >
            <RestaurantCard resData={Restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
