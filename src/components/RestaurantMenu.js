import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = ()=>{
        
    const [resInfo,setresInfo]=useState(null);
    useEffect(()=>{
    Fetchdata();    
    },[])

    const {resId} = useParams();
    const Fetchdata=async()=>{
        const data =await fetch(MENU_API+resId);
        const json=await data.json();
        console.log(json);
        setresInfo(json?.data);
    }

    if(resInfo == null){
        return <Shimmer/>;
    }

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item)=>
                <li key={item?.card?.info?.id}>{item?.card?.info?.name}  ----- price = {item?.card?.info?.defaultPrice/100  || item?.card?.info?.price/100} RS</li>
                )}
            </ul>
        </div>
    )
}
export default RestaurantMenu;