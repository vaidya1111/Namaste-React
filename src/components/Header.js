import {LOGO_URL} from "../utils/constants";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    
    const [loginStatus,setLoginStatus]=useState("Login");
    const {loggedInUser} =useContext(UserContext);

    //Subscribing to the store using a Selector Hook
    const cartItems=useSelector((store)=> store.cart.items);
    console.log("items",cartItems)

    return(
        <div className="flex justify-between shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}/>            
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link className="font-bold" to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link className="font-bold" to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link className="font-bold" to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                         <Link className="font-bold" to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-bold">
                    <Link className="font-bold" to="/cart">Cart ({cartItems.length})</Link>
                    </li>
                    <li className="px-4 font-bold">
                    <button className="login-btn" onClick={()=>{
                        loginStatus=== "Login" ? 
                        setLoginStatus("Logout") : 
                        setLoginStatus("Login")
                    }}>
                        {loginStatus}
                    </button>
                    </li>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;