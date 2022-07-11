import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    SelectedPlantInAddBoxByUser : "",
    SelectedLineInAddBoxByUser : "",
    SelectedMachineInAddBoxByUser : "",
    SelectedPartInAddBoxByUser : "",
    SelectedFormFielInAddBoxByUser : {
        selectedPlanningDate : "",
        selectedQuantity : "",
        selectedFromDate : "",
        selectedToDate : "",
        selectedStatus : ""
    }
    
}

export const AddNewDataBoxReducer = createSlice({
    name : 'AddNewFormData',
    initialState,
    reducers : {
        SelectedPlantInAddBox : (state, actions) =>{
            state.SelectedPlantInAddBoxByUser = actions.payload
        },
        SelectedLineInAddBox : (state, actions) =>{
            state.SelectedLineInAddBoxByUser = actions.payload
        },
        SelectedMachineInAddBox : (state, actions) =>{
            state.SelectedMachineInAddBoxByUser = actions.payload
        },
        SelectedPartInAddBox : (state, actions) =>{
            state.SelectedPartInAddBoxByUser = actions.payload
        },
        SelectedFormField : (state, actions) =>{
            state.SelectedFormFielInAddBoxByUser = actions.payload
        }

    }

})

export const {SelectedPlantInAddBox, SelectedLineInAddBox, SelectedMachineInAddBox, SelectedPartInAddBox, SelectedFormField} = AddNewDataBoxReducer.actions
export default AddNewDataBoxReducer.reducer