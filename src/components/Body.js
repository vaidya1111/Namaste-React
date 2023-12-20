import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{
    const [listOfRes,setlistOfRes]=useState(resList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList= listOfRes.filter((res)=>{
                        return res.info.avgRating > 4.4
                    })
                    console.log(filteredList)
                    setlistOfRes(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
              {
                listOfRes.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                })
              }
            </div>
        </div>
    )
}

export default Body;