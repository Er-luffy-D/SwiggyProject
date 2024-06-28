import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";
import { useState } from "react";

const Body=()=>{

    // Local state variable- Super powerful variable;
    let [ListofRestaurant,setListofRestaurant]=useState(resObj);

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