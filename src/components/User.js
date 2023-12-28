import { useState } from "react";

const User=(props)=>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(1);
    
    return (
        <div className="userCard">
            <h1>count:{count}</h1>
            <h1>count2:{count2}</h1>
            <h2>Name: {props.name} </h2>
            <h3>Location: Pune</h3>
            <h4>contact: sagar.vaidya11@gmail.com</h4>
        </div>
    )
}

export default User;