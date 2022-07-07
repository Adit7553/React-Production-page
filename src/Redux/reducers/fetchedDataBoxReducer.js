import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetchedDataItem : []
}

export const fetchedDataSlice = createSlice({
    name : 'fetchedDataBox',
    initialState,
    reducers : {
        fetchedDataReducer : (state, actions) =>{
            state.fetchedDataItem = actions.payload
        }
    }

})

export const {fetchedDataReducer} = fetchedDataSlice.actions
export default fetchedDataSlice.reducer