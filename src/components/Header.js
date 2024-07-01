import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName,setbtnName]=useState("Login");

    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on intial  render(just once)
    // if dependency array is [btnName] => useEffect is called everytime btnName is updated

    useEffect(()=>{
        console.log("useEffect called")
    },[btnName]);

    // Do Not use Anchor <a> tag to navigate through pages instead use Link from React router DOm

    return(
        <div className="header">
        <div className="logo_container">
        <img src={LOGO_URL}
        className="logo"/>
        </div>
        <div className="nav-items">
            <ul>

                <li><Link to={"/"}>Home</Link></li>

                <li><Link to={"/about"}>About</Link></li>

                <li>Cart</li>
                
                <button onClick={()=>{
                    if(btnName=="Login"){
                        setbtnName("Logout");
                    }
                    else {setbtnName("Login")};
                }}
                className="login" >{btnName}</button>
            </ul>
        </div>
        </div>
    )
}

export default Header;