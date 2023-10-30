import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";


const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunts] = useState([]);
  const [filteredRestuarant,setFilteredRestuarant] = useState([]);
  const [searchText,setSearchText] = useState("");
  const RestaurantpromotedCard = withPromotedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");
  //first body component is rendered and then useeffect will be called
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    )
  

    const json = await data.json();
    // console.log("data>>"+JSON.stringify(json));

    // Optional Chaining
    //updating the UI with new data
    setListOfRestraunts(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestuarant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  //conditional rendering>>rendering based on condition
  /*binding input box to searchtext and using onchange handler to change the current value and setting it to setsearchtext*/
 
const showOnlineStatus = useOnlineStatus();
if(showOnlineStatus === false)
 return (
 <h1>no internet connection</h1>
 );
  const {loggedInUser,setUserName}=useContext(userContext);

return listOfRestaurants?.length===0? (<Shimmer /> ):(
<div className="flex flex-col">
      <div className="filter flex flex-col justify-center">
        <div className="search flex justify-center m-4 w-full">
          <input
            type="text" className=" border border-solid border-black p-2 w-2/3 md:w-1/3 rounded-lg" 
            placeholder=" Explore the restaurant name...."
            value = {searchText} 
            onChange={(e)=>{setSearchText(e.target.value);
            }}
            /> 
            <button className="p-2 px-5 bg-green-300 rounded-r-lg hover:bg-green-400" 
            onClick={()=>{
           //   console.log("listofrest>>"+JSON.stringify(listOfRestaurants));
             const filteredRestuarant= listOfRestaurants.filter((res)=> 
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
             setFilteredRestuarant(filteredRestuarant);
             
            }}>Search</button>
            </div>
        <button
          className=" pl-3 px-2 py-2 bg-gray-100  rounded-lg md:w-1/3 flex justify-center"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestuarant(filteredList);
          }}>
          <b>Top Rated Restaurants</b>
        </button>
      </div>
      {/* <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div> */}
      <div className=" flex flex-wrap">
        {filteredRestuarant?.map((restaurant) => (
          <Link key={restaurant?.info.id} to = {"/restaurants/"+restaurant?.info.id}>
            {
              restaurant?.info?.isOpen? (<RestaurantpromotedCard resData={restaurant?.info} />): //resdata are th porps passed to withpromotedLabel component
              (<RestaurantCard  resData={restaurant?.info} />
              )}
              </Link>
        ))}
      </div>
    </div>
    
 
  );
};

export default Body;