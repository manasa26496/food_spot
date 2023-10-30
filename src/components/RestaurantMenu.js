import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu=()=>{
  
    const {resid} =useParams();
    //custom hook created as userestaurantmenu and added code of fetch api
    const resInfo=useRestaurantMenu(resid);

 const [showIndex, setshowIndex] = useState(null);   

if(resInfo===null) return <Shimmer />;
const { name , cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

const { itemCards } =
resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
((c)=> c.card?. card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

return (
    <div className = " text-center">
        <h1 className=" font-bold py-3 text-xl ">{name}</h1>
        <h2 className=" font-semibold text-lg">{cuisines.join(",")} - {costForTwoMessage}</h2>
       {
        //getting index via map function
        categories.map((category, index)=>(
          <RestaurantCategory 
          key= {category?.card?.card?.key} data= {category?.card?.card}  showItems={index === showIndex? true : false} setshowIndex={()=>setshowIndex(index)}/>
          //controlled component
         
          //passing setshowindex to children function will pass the index
        )
        )
       }
    
    </div>
)
};
export default RestaurantMenu;