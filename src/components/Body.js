import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata";

const Body=()=>{
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
            {
            resObj.map(
                (Restaurant)=>
            <RestaurantCard key={Restaurant.info.id} resData={Restaurant}/>
            )}
   
            </div>
        </div>
    )
}

export default Body;