import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

    // Local state variable- Super powerful variable;
    let [ListofRestaurant,setListofRestaurant]=useState([]);

    // USE Effect - ITS 2 arguments callback and an dependency list
    // Its callback function call after components rendered

    useEffect(()=>{
        fetchData();
    },[]);
    
    // Using Swiggy APi to get data (USE CORS Extension)
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        // Optional Chaining 
        setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    //Filter Button 
    const FilterButton=()=>(
        <button className="filter-btn" 
                onClick={()=>{
                    let filterList=ListofRestaurant.filter((res)=>res.info.avgRating>4);
                setListofRestaurant(filterList);
            }}>Top rated Restaurants</button>)

    //
    const ResetButton=()=>
        <button className="Reset-btn" 
                onClick={()=>{
                    if(ListofRestaurant.length!=resObj.length){
                        setListofRestaurant(resObj);
                    }
            }}>All Restaurants</button>

    
    // can be used to Show loading screen to user until data is not fetching 
    // if(ListofRestaurant === 0){
    //     // Loader animation
    // }

    
    // Condintional Rendering
    if(ListofRestaurant == 0){
       return <Shimmer/>;
    }
    return(
        <div className="body">
            <div className="filter">
            <FilterButton/>
            <ResetButton/>
            </div>
            <div className="res-container">
            {
            ListofRestaurant.map(
                (Restaurant)=>
            <RestaurantCard key={Restaurant.info.id} resData={Restaurant}/>
            )}
   
            </div>
        </div>
    )
}

export default Body;