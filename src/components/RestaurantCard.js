import {CDN_URL} from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId}=resData?.info;
   
    return (
        <div className="m-4 p-4 w-[250px] hover:shadow-2xl bg-gray-50 h-[100%]">
            <img alt="res-img" className="rounded-lg w-[100%] h-[50%]" src={CDN_URL+cloudinaryImageId}/>
            <div className="font-sans py-4">
                <h3 className="font-bold">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} min</h4>
            </div>
        </div>
    )
}

//HigerOrderComponent
export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute font-bold text-green-600 m-4 bg-gray-200 px-4 py-1 rounded-lg">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard; 