import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";




// __________________________________________________________________________________________________________________________________


// __________________________________________________________________________________________________________________________________


// Passing props(properties) to a function (is just like passing arguments to a function)
//  Always give key to component when using map 


const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}
{/* If path =/ => <Body> */}
{/* <Body /> */}
{/* If path =/about => <About> */}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[       
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
        ],
        errorElement:<Error/>,
    },
])

const root=ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)