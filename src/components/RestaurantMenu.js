import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu =()=>{
    const {resID}=useParams();
    const resInfo=useRestaurantMenu(resID);
    const [showIndex,setShowIndex]=useState(null);

    if(resInfo === null){
        return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage} = (resInfo?.cards[0]?.card?.card?.info);
    const {itemCards}=(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);


    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>{
        return item.card?.card?.["@type"].includes("ItemCategory")
    })

    return (

        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl" >{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
            {
                categories.map((item,index)=>{
                    //RestaurantCategory is a controlled component.RestaurantMenu is controlling it by passing the prop of "setShowIndex"
                    return <RestaurantCategory 
                            key={item?.card?.card?.title} 
                            category={item}
                            showItems={index===showIndex? true :false }
                            index={index}
                            setShowIndex={(index)=>{
                                setShowIndex(index)
                            }}
                            />
                })
            }

        </div>
    )
}
export default RestaurantMenu;