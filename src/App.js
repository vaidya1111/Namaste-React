import React,{ lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import User from "./components/User";

//import Grocery from "./components/Grocery";

const Grocery=lazy(()=> import("./components/Grocery"));

const Applayout=()=>{   
    const [userName,setUserName]=useState(null);

    useEffect(()=>{
        //authentication API Call with username and password
        const data={
            name:"Sagarnath Vaidya"
        };
        setUserName(data.name)

    },[])

    return (
        <UserContext.Provider value={{loggedInUser:userName}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
        
    )
}
const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resID", 
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery", 
                element:<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement:<Error/>
    },
   
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

