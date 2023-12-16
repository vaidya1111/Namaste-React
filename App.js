import React from "react";
import ReactDOM from "react-dom/client";

const heading= React.createElement(
    "h1",
    {id:"heading"},
    "Hello world from react!"
    );

//heading is an object
console.log(heading)

/*
<div id="parent">
    <div id="child">
        <h1> I am a h1 tag </h1>
    </div>
</div>
*/

 const parent = React.createElement(
 "div",
 {id:"parent"},
 React.createElement(
    "div",
    {id:"child"},
    [React.createElement("h1",{},"i am a h1 tag"),React.createElement("h2",{},"i am a h2 tag")])
 );

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);