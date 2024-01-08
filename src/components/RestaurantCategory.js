import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory=({category,showItems,index,setShowIndex})=>{
    
    const handleClick=()=>{
        showItems? setShowIndex(null): setShowIndex(index);

    }
    const {title,itemCards} = category?.card?.card
    return(
        <div className="w-8/12 mx-auto">
            
            <div className="w-full p-3 bg-gray-200 shadow-lg border my-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="p-1 font-bold">{title} ({itemCards.length})</span> 
                    {showItems ?  <span className="p-1">▲</span>:<span className="p-1">▼</span>}
                </div>
                {showItems && <ItemList items={itemCards}/>}
            </div>
            
        
        </div>
        
    )
}

export default RestaurantCategory;