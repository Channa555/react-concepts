import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "ecommerce",
    initialState: [],
    reducers:{
        addToStore(state,item){
            state.push(item)
        },
        clearStore(state){
            return [];
        },
        removeItemFromStore(state,item){
            return state.filter(item => item.id !== action.payload.id); 
        }
    }
})

export const {addToStore, clearStore,removeItemFromStore} = cartSlice.actions;//These actions we can use in other component and use these methods
export default cartSlice.reducer;