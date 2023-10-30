import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header=()=>{
    const [BtnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
   const {loggedInUser} = useContext(userContext);
   const navigate = useNavigate();
//subsribing to the store using selector and getting access to items
   const cartItems = useSelector((store)=>store.cart.items);
    return (
        <div className = "flex justify-between  shadow-sm">
            <div className = "logo-container">
                <img className = " w-24"
                src={LOGO_URL} />
            </div>
            <div className = "flex items-center space-x-3">
            <ul className="flex space-x-8">
                <li className="px-4  font-semibold text-base">
                    Online Status :{onlineStatus? "✔️" :"❌"}
                </li>
                <li className="px-4 font-semibold">
                    <Link to="/">Home</Link></li>
                <li className="px-4 font-semibold">
                    <Link to = "/contact">Contact us</Link>
                    </li>
                <li className="px-4 font-bold text-xl">
                   <Link to="/cart"> Cart ({cartItems.length} items)</Link>
                   </li>
                  
                <button className="px-4 font-semibold"
                onClick={()=>{navigate('/login')
                BtnNameReact==="Login"? setBtnNameReact("Logout"):
                    setBtnNameReact("Login"); 
                }}>
                {BtnNameReact}
              
                </button>
            </ul>
            </div>
        </div>
    )
    };

    export default Header;