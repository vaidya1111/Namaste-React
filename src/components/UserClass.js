import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:""
            }
        }

        console.log("child constructor")
    }

    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/vaidya1111");
        const json=await data.json();
        this.setState({
            userInfo:json
        })
        console.log("Child Component Did Mount")
    }
     componentDidUpdate(){
        console.log("component updated")
     }

     
    render(){
        console.log("child render")
        const {name,location,avatar_url}= this.state.userInfo;
        

        return (
            <div className="userCard">
                <img src={avatar_url}/>
                <h2>Name: {name} </h2>
                <h3>Location: {location}</h3>
                <h4>contact: sagar.vaidya11@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;