import { createReducer } from "@reduxjs/toolkit";

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const deletefroncart = 'deletefroncart'
const calculateprice = 'calculateprice'

// Action Creators
// export const addToCart = (item) => ({
//   type: ADD_TO_CART,
//   payload: item,
// });

export const cartReducer = createReducer(
    {
    cartItems: [],
    Subtotal: 0,
    tax: 0,
    total: 0
}
, (builder) => {
    builder
    .addCase(ADD_TO_CART, (state, action) => {
        const item = action.payload;
        // console.log(item);
        const isItemexist = state.cartItems.find((i)=> i.id === item.id);
        if(isItemexist){
            state.cartItems.forEach((i)=>{
                if(i.id === item.id ) {i.quantity+= 1;}
            })
        } else{
            state.cartItems.push(item);
        }
    })
    .addCase(REMOVE_FROM_CART, (state, action) => {
        const item = state.cartItems.find((i)=> i.id === action.payload);
        if(item.quantity > 1){
            state.cartItems.forEach((i)=>{
                if(i.id === item.id ) i.quantity-= 1;
        })
    }

    })

    .addCase(deletefroncart, (state, action)=>{
        const item = state.cartItems.find((i)=> i.id === action.payload);
        console.log(item);
        if(item){
            state.cartItems = state.cartItems.filter
            ((i)=> i.id !== action.payload);
            console.log(state.cartItems = state.cartItems.filter
                ((i)=> i.id !== action.payload));
        }

    })

    .addCase(calculateprice, (state)=>{
        let sum = 0;
        state.cartItems.forEach((i)=>{
            sum += i.price * i.quantity;
        })
        state.Subtotal = sum;
        state.tax = state.Subtotal * 0.18;
        state.total = state.Subtotal + state.tax;

    })
    
});