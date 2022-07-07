import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loaderStatus : false
}

export const loaderBoxSlice = createSlice({
    name : 'loaderBox',
    initialState,
    reducers : {
        loaderBoxReducer : (state, actions) =>{
            state.loaderStatus = actions.payload
        }
    }

})

export const {loaderBoxReducer} = loaderBoxSlice.actions
export default loaderBoxSlice.reducer