import { useDispatch } from "react-redux";
import { ITEM_IMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList=({items})=>{
    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        //dispatch an action
        dispatch(addItem(item))
    }

    return (
        <div>
            {
                items.map((item)=>{
                    return (
                        <div className="border-b-4 border-gray-50 p-2 m-2" key={item.card.info.id}>
                            {
                                (item.card.info.hasOwnProperty("isVeg"))? <div className="text-left pt-1">🟢</div>: <div className="text-left pt-1">🔴</div>
                            }

                            <div className="flex justify-between">
                                <div className="">
                                    <div className="text-left font-bold">{item.card.info.name}</div>
                                    <div className="text-left font-bold">₹{item.card.info.price/100}</div>
                                </div>
                                <div className="border rounded-lg bg-white">
                                    <img className="text-right w-28 p-3" src={ITEM_IMAGE_URL+item.card.info.imageId}/>
                                    <button className="text-green-600 border border-gray-200 px-6 py-2 rounded-lg font-bold shadow-lg text-xs"
                                    onClick={()=> handleAddItem(item) }>
                                        ADD +
                                    </button>
                                </div>
                               
                            </div>
                            <p className="text-xs m-3">{item.card.info.description}</p>
                           
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList;