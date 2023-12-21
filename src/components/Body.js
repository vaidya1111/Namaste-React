import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [listOfRes,setlistOfRes]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData=async ()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json= await data.json();
        setlistOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    }

    return listOfRes.length===0 ? (
    <Shimmer/>
    ) :(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList= listOfRes.filter((res)=>{
                        return res.info.avgRating > 4.4
                    })
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