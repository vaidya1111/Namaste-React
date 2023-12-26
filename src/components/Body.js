import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [listOfRes,setlistOfRes]=useState([]);
    const [filteredRes,setFilteredRes]=useState([]);

    const[searchText,setSearchText]= useState("");

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData=async ()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json= await data.json();
        const  resData=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setlistOfRes(resData);
        setFilteredRes(resData);

    
    }

    return listOfRes.length===0 ? (
    <Shimmer/>
    ) :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        const searchedRes=listOfRes.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilteredRes(searchedRes);
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={()=>{

                    const filteredList= filteredRes.filter((res)=>{
                        return res.info.avgRating > 4
                    })
                    setFilteredRes(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
              {
                filteredRes.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                })
              }
            </div>
        </div>
    )
}

export default Body;