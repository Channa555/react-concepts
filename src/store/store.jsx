import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../cartSlice/cartSlice";
import cartSlice from "../cartSlice/cartSlice";


const store = configureStore({
    reducer: {
        ecommerce: cartSlice
    },
})

export default store;