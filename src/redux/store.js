import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './sliceCard'
const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store;