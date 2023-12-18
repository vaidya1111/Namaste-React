import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent=()=>(
    <h1 id="heading">
        Namaste React using JSX
    </h1>
);

//React Functional component
const HeadingComponent=()=>{
    return (<div id="container">
                <TitleComponent/>
                <h1>Namaste React functional component </h1>
                
           </div>)
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);