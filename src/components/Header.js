import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnName,setbtnName]=useState("Login");
    return(
        <div className="header">
        <div className="logo_container">
        <img src={LOGO_URL}
        className="logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
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