import { CDN_URL } from "../utils/constants";

const styleCard={
    backgroundColor : "#f0f0f0"
}
const RestaurantCard=(props)=>{
    const {resData}=props
        const {name,cloudinaryImageId,cuisines,costForTwo,avgRating}=resData.info
    return(
        <div className="res-card" style={styleCard}>
            <img src={CDN_URL+cloudinaryImageId} 
            className="res-logo"
            alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}
export default RestaurantCard;