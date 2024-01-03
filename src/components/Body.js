import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    const [listOfRes,setlistOfRes]=useState([]);
    const [filteredRes,setFilteredRes]=useState([]);
    const[searchText,setSearchText]= useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData=async ()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json= await data.json();
        const  resData=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(resData)
        setlistOfRes(resData);
        setFilteredRes(resData);
    }

    const onlineStatus=useOnlineStatus()

    if(!onlineStatus){
        return <h1>Internet not working..Check your internet connection!!</h1>
    }

    return listOfRes.length===0 ? (
    <Shimmer/>
    ) :(
        <div className="body">
            <div className="filter flex">
                <div className="m-4 p-4">

                    <input type="text" className="border shadow-xl" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>

                    <button className="px-4 py-1 bg-green-100 m-4 shadow-lg rounded-lg" onClick={()=>{
                        const searchedRes=listOfRes.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilteredRes(searchedRes);
                    }}>search</button>

                    <button className="px-4 py-1 bg-green-100 shadow-lg m-3 rounded-lg" onClick={()=>{

                        const filteredList= filteredRes.filter((res)=>{
                            return res.info.avgRating > 4
                        })
                        setFilteredRes(filteredList);
                        }}>Top Rated Restaurant</button>
                </div>
                
            </div>
            <div className="res-container flex flex-wrap">
              {
                filteredRes.map((restaurant)=>{
                    return (
                                <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                                    {
                                        restaurant.info.isOpen ? <RestaurantCardPromoted  resData={restaurant}/> :  <RestaurantCard  resData={restaurant}/>
                                    }
                                  {/* <RestaurantCard  resData={restaurant}/> */}
                                </Link>
                            )
                })
              }
            </div>
        </div>
    )
}

export default Body;