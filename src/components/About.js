
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
      constructor(props){
            super(props);
            this.state={

            }
            console.log("parent constructor")
      } 

      componentDidMount(){
           
            console.log("Parent Component Did Mount")
      }
      
      render(){
            console.log("parent render")
            return (<div>
                  <div>
                        loggedIn User:
                        <UserContext.Consumer>
                              {
                                    ({loggedInUser})=>{
                                       return <h1>{loggedInUser}</h1>
                                    }
                              }
                        </UserContext.Consumer>
                  </div>
                  <h1>About class component</h1>
                  <h2>Namaste React webseries </h2>
                  <UserClass/>
                  <UserClass/>
                  </div>
            );
      }
}

// const About=()=>{
//  return (<div>
//             <h1>About</h1>
//             <h2>Namaste React webseries </h2>
//             <UserClass name={"sagar(class)"} location={"pune(class)"}/>
//        </div>
//  );
// };

export default About;