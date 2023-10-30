import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appstore from "./utils/appStore";
import Cart from "./components/Cart";
import LogIn from "./components/Login";

const AppLayout=()=>{
    const [userName,setUserName] = useState();

    useEffect(()=>{
        const data = {
            name:"Manasa shetty",
        };
        setUserName(data.name);
    },[])
    //overriding default value
    return ( 
        <Provider store={appstore }>
        <userContext.Provider value={{ loggedInUser: userName, setUserName }}> 
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
        </userContext.Provider>
        </Provider>
    );
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element :<Body/>
            },
            {
                path:"/contact",
                element :<Contact />
            },
            {
                path:"/restaurants/:resid",
                element :<RestaurantMenu />
            },
            {
                path:"/cart",
                element :<Cart />
            },
            {
                path:"/login",
                element:< LogIn />
            }
            
        ],
        errorElement : <Error />,
       
      
        
    },
    
        
])
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);