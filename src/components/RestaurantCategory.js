import ItemLists from "./ItemLists";
const RestaurantCategory=({data,showItems,setshowIndex})=>{
    const handleClick=()=>{
        //calls parent function
        setshowIndex();
    };
    return (
        <div>
            <div className="  bg-gray-50 w-6/12 shadow-lg mx-auto my-4 p-4">
            <div className="flex justify-between cursor-pointer"
            onClick={handleClick}> 
        <span className=" font-bold text-lg">
            {data.title} ({(data.itemCards.length)})
            </span>
        <span> ↕ </span>
        </div>
        {showItems && <ItemLists items={data.itemCards}/>}
        </div>
        </div>   
    );
};
export default RestaurantCategory;
