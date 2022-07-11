import { configureStore } from '@reduxjs/toolkit'
import sidebarToggleReducer  from './reducers/sidebarToggleReducer'
import filterDataBoxReducer from './reducers/filterDataBoxReducer'
import fetchedDataBoxReducer from './reducers/fetchedDataBoxReducer'
import loaderDataBoxReducer from './reducers/loaderDataBoxReducer'
import AddNewDataBoxReducer from './reducers/AddNewDataBoxReducer'


export const store = configureStore({
    reducer : {
        sideBarToggleBox : sidebarToggleReducer,
        filterFormData : filterDataBoxReducer,
        fetchedDataBox : fetchedDataBoxReducer ,
        loaderBox : loaderDataBoxReducer ,
        AddNewFormData : AddNewDataBoxReducer
    }
})