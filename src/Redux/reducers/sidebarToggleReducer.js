import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar : true
}

export const sideBarToggleSlice = createSlice({
    name : 'sideBarToggleBox',
    initialState,
    reducers : {
        sideBarToggle : (state, actions) =>{
            state.sidebar = actions.payload
        }
    }

})

export const {sideBarToggle} = sideBarToggleSlice.actions
export default sideBarToggleSlice.reducer