import { createSlice } from "@reduxjs/toolkit";

const initial = {
    isCollectionPop:false,
    isNewCollectionPop:false,
}

const PopSlice = createSlice({
    name:"Pop",
    initialState:initial,
    reducers:{
        toggleCollectionPop: (state) => {
            state.isCollectionPop = !state.isCollectionPop;
        },
        toggleNewCollectionPop: (state) => {
            state.isNewCollectionPop =!state.isNewCollectionPop;
        }
    }
})

export const { toggleCollectionPop, toggleNewCollectionPop } = PopSlice.actions;
export default PopSlice.reducer;