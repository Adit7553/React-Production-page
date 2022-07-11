import { createSlice } from "@reduxjs/toolkit";

    var offset = 5.5
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000 * offset));
    let year = (nd.getFullYear() < 10) ? "0" + nd.getFullYear() : "" + nd.getFullYear();
    let month = ((nd.getMonth() + 1) < 10) ? "0" + (nd.getMonth() + 1) : "" + (nd.getMonth() + 1);
    let day = (nd.getDate() < 10) ? "0" + nd.getDate() : "" + nd.getDate();
    let hours = (nd.getHours() < 10) ? "0" + nd.getHours() : "" + nd.getHours();
    let minutes = (nd.getMinutes() < 10) ? "0" + nd.getMinutes() : "" + nd.getMinutes();
    let seconds = (nd.getSeconds() < 10) ? "0" + nd.getSeconds() : "" + nd.getSeconds();
    let isoString = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + '.000Z';
    let fromToday = isoString.split("T")[0] +"T00:00:00.000Z";
    let toToday = isoString.split("T")[0] +"T23:59:59.000Z";

const initialState = {
    startTime : fromToday,
    endTime : toToday,
    SelectedPlantByUser : "",
    SelectedLineByUser : "",
    SelectedMachineByUser : "",
    SelectedPartByUser : ""
}

export const filterDataBoxReducer = createSlice({
    name : 'filterFormData',
    initialState,
    reducers : {
        FromDate : (state, actions) =>{
            state.startTime = actions.payload
        },
        ToDate : (state, actions) =>{
            state.endTime = actions.payload
        },
        SelectedPlant : (state, actions) =>{
            state.SelectedPlantByUser = actions.payload
        },
        SelectedLine : (state, actions) =>{
            state.SelectedLineByUser = actions.payload
        }

    }

})

export const {FromDate, ToDate, SelectedPlant, SelectedLine} = filterDataBoxReducer.actions
export default filterDataBoxReducer.reducer