import { useContext }  from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";


const RestaurantCard=(props)=>{
    const {resData} = props;
    const {loggedInUser}=useContext(userContext);
    const {
        cloudinaryImageId, 
        name, 
        cuisines,
        costForTwo,
         avgRating,
         sla:{deliveryTime=""},
         } = resData;
    return (
        <div className = "flex flex-col overflow-hidden m-3 p-3 w-60  rounded-sm hover:shadow-xl duration-300 font-poppins bg-white shadow-sm">
            <img
            className="w-full border rounded-sm"
            alt="food-logo" 
            src={CDN_URL+cloudinaryImageId} />
            <span className="block font-bold text-md mt-3 ">
        {name?.length > 20 ? name.slice(0, 20) + "..." : name}
      </span>
      <span className="mt-3 text-gray-600 text-xs">{cuisines?.join(", ")}</span>
      <div className="mt-3 mb-3 flex items-center justify-between">
        <span
          className="w-12 text-center border rounded-md text-white text-xs mr-2"
          style={
            avgRating >= 4
              ? { backgroundColor: "#1db458" }
              : avgRating >= 3
              ? { backgroundColor: "#DB7C38" }
              : avgRating === "--"
              ? { backgroundColor: "#1db458" }
              : { backgroundColor: "#E31837" }
          }
        >
          {avgRating} &#9733;
        </span>
        <span className="text-xs">{costForTwo}</span>
        <span className="text-xs ">{deliveryTime} MINS</span>
      </div>
            {/* <h3 className=" blockfont-bold text-md mt-3">{name}</h3>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{avgRating}</h4>
            <h4>{slaString}</h4>
            <h4>{costForTwo}</h4> */}
        </div>
    );
};
//Higher order functions is a normal JS function and returns another component(Js function) and this comp returns JSX 
export const withPromotedLabel = (RestaurantCard) =>{
return (props)=>{ // props used to recive the resdata sent by RestaurantpromotedCard // ...props will recieve all data sent and ... spread operator is used
 return (
    <div>
    <label className=" absolute bg-black text-white m-2 p-2 rounded-lg">Open Now!</label>
    <RestaurantCard {...props}/>
    </div>
 );
};
};
export default RestaurantCard;