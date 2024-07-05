import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{
    
    const [resInfo,setresInfo]=useState(null);
    useEffect(()=>{
    Fetchdata();    
    },[])

    const Fetchdata=async()=>{
        const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.66500&lng=77.44770&restaurantId=89916&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        // console.log(json);
        console.log(json.data.cards[2].card.card.info)
        setresInfo(json.data.cards[2].card.card.info);
    }

    if(resInfo == null){
        return <Shimmer/>;
    }

    const {name,cuisines,costForTwoMessage} = resInfo;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                <li>Burgers</li>
                <li>Biryani</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;