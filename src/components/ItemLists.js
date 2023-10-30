import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemLists=({items})=>{
    const dispatch = useDispatch();
    const handleItem=(item)=>{
        //dispatch an action and pizza is a payload
        dispatch(addItem(item));
    };
    return <div>
        {items.map(item=> (
        <div key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between ">
             
            <div className=" w-9/12">      
            <div className=" py-2 "> 
                <span className=" font-semibold">{item.card.info.name}</span>
                <span> - ₹{item.card.info.price? item.card.info.price/100:item.card.info.defaultPrice/100}</span>
            </div>
            <p className=" text-base">{item.card.info.description}</p>
            </div>
            <div className=" w-3/12 p-4">
            <div className=" absolute">
            <button className=" p-2  mx-20 rounded-lg shadow-lg bg-black text-white "
            onClick={()=>handleItem(item)}>Add+</button>
            </div>
            <img src={CDN_URL+ item.card.info.imageId} className="  w-32  h-auto" />    
            </div>
            </div> 
            ))}
    </div>;
};
export default ItemLists;