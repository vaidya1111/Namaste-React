import { useSelector,useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    
    //subscribing to the store
    const cartItems=useSelector((store)=>{
        return store.cart.items; //make sure you are subscribing to the right portion of the store
    })

    const dispatch=useDispatch()// get the dispatch function

    console.log(cartItems)
    const handleClearCart=()=>{
        //dispatch an action
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="border border-gray-500 px-5 py-1 rounded-lg hover:bg-slate-200"
                onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length===0 && <h1 className="font-bold m-3">Cart is empty!! Add items to the cart </h1>}
                <ItemList items={cartItems}/>
            </div>
            
        </div>
    )

}

export default Cart;