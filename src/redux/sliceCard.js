import { createSlice } from "@reduxjs/toolkit";
import items from "../components/items";
const initialState = {
    cartItem:items,
    amount:9,
    total:0,
    isLoading:true,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
});

export default cartSlice.reducer;