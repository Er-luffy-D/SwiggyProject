import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const root=ReactDom.createRoot(document.getElementById("root"))


// __________________________________________________________________________________________________________________________________

 
// __________________________________________________________________________________________________________________________________


// Passing props(properties) to a function (is just like passing arguments to a function)
//  Always give key to component when using map 


const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}
root.render(<AppLayout/>)