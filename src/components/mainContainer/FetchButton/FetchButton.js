import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { fetchedDataReducer } from '../../../Redux/reducers/fetchedDataBoxReducer'
import axios from 'axios'

export default function FetchButton() {

    const dispatch = useDispatch()

     /// user input data in filter section(FROM REDUX REDUCER) , these perameters will be used in table API
     const SelectedPlantByUser = useSelector((state)=> state.filterFormData.SelectedPlantByUser)
     const SelectedLineByUser = useSelector((state)=> state.filterFormData.SelectedLineByUser)
     const startTime = useSelector((state)=> state.filterFormData.startTime)
    const endTime = useSelector((state)=> state.filterFormData.endTime)

    /////When user filter data and click on fetch button
    const handleFatchBtn = async()=>{
        if(startTime || endTime || SelectedPlantByUser || SelectedLineByUser){
            const fetchedResponse = await axios.get(`http://mm.thirdeye-ai.com/pplan?startDate=${startTime}&endDate=${endTime}&plantId=${SelectedPlantByUser}&lineId=${SelectedLineByUser}`)
            const fetchedData = fetchedResponse.data;
            dispatch(fetchedDataReducer(fetchedData))  
        }
    }
  return (
    <>
    <div className="col-lg-2 col-md-2">
        <label>&nbsp;</label>
        <button onClick={handleFatchBtn} className="btn btn-primary btn-block">Fetch</button>
    </div>
    </>
  )
}
