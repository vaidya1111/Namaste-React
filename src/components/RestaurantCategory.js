import ItemList from "./ItemList"

const RestaurantCategory=({category})=>{
    
    const {title,itemCards} = category?.card?.card
    return(
        <div className="w-8/12 mx-auto">
            
            <div className="w-full p-3 bg-gray-200 shadow-lg border my-4">
                <div className="flex justify-between">
                    <span className="p-1 font-bold">{title} ({itemCards.length})</span> 
                    <span className="p-1">▼</span>
                </div>
                <ItemList items={itemCards}/>
            </div>
            
        
        </div>
        
    )
}

export default RestaurantCategory;