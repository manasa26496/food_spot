import { createSlice } from "@reduxjs/toolkit"

//createSlice will return an object
const cartSlice=createSlice({
name:"cart",
initialState :{
    items:[]
},
//reducer function, 
//we can modify the state by action
reducers:{
    addItem:(state,action)=>{
        state.items.push(action.payload);
    },
    removeItem:(state)=>{
        state.items.pop();
    },
    clearItem:(state)=>{
        state.items.length=0;
    },
},
});
//export actions and reducers
export const{addItem,removeItem,clearItem}= cartSlice.actions;
export default cartSlice.reducer;