import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log("child constructor")
    }

    componentDidMount(){
        console.log("Child Component Did Mount")
    }

    render(){
        console.log("child render")
        const {name,location}= this.props;
        const {count,count2}=this.state;

        return (
            <div className="userCard">
                <h1>Count:{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increase Count</button>
                <h2>Name: {name} </h2>
                <h3>Location: {location}</h3>
                <h4>contact: sagar.vaidya11@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;