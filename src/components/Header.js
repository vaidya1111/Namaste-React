import {LOGO_URL} from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    
    const [loginStatus,setLoginStatus]=useState("Login");
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
                    <li className="px-4 font-bold">Cart</li>
                    <li className="px-4 font-bold">
                    <button className="login-btn" onClick={()=>{
                        loginStatus=== "Login" ? 
                        setLoginStatus("Logout") : 
                        setLoginStatus("Login")
                    }}>
                        {loginStatus}
                    </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;