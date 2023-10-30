import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//building store
//adding slice to the store
//reducer is responsible to modifying appstore
const appstore = configureStore({
    reducer:{
        //each slice will have its own reducer
     cart:cartReducer
    },

}

);
export default appstore;