import { createSlice } from "@reduxjs/toolkit";

const intialCart={
    cart:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState:intialCart,
    reducers:{
        addTocart:(state,action)=>{
            state.cart.push(action.payload);
        },

        removeFromCart:(state,action)=>{
            return state.cart.filter((item) => item.id !== action.payload);

        }
    }
})

export const {addTocart,removeFromCart}=cartSlice.actions;

export default cartSlice