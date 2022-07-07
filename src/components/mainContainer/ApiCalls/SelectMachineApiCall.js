import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loaderBoxReducer } from '../../../Redux/reducers/loaderDataBoxReducer'
import { SelectedMachine } from '../../../Redux/reducers/filterDataBoxReducer'

import axios from 'axios'


export default function SelectMachineApiCall() {

    const dispatch = useDispatch()

    const SelectedPlantByUser = useSelector((state)=> state.filterFormData.SelectedPlantByUser)

    const [machineData, setMachineData] = useState([])
    const [selectedMachine, setSelectedMachine] = useState("")

///// calling Line api whenever page loaded and when user select any plant
    useEffect(()=>{
        const getLineApi = async()=>{
            try {
                dispatch(loaderBoxReducer(false)) 
                const response = await axios.get(`http://mm.thirdeye-ai.com/machine/info?companyId=JBMGroup&plantId=${SelectedPlantByUser}`)
                const getMachineData = response.data;
                const getUniqueMachineOnly = [...new Map(getMachineData.map((item)=> [item["lineId"], item])).values()]; /// to get unique valu of line
                setMachineData(getUniqueMachineOnly)
                dispatch(loaderBoxReducer(false))
            } catch (error) {
                alert("An error occured while feching Line API");
                dispatch(loaderBoxReducer(false))
            }
        }
        getLineApi();
    },[SelectedPlantByUser])

/////to get input selection value of line
    const getSelectedMachineFunc = (e)=>{
        const getLineId = e.target.value
        setSelectedMachine(getLineId)
        dispatch(SelectedMachine(getLineId))
    }

  return (
    <div className="col-lg-3 col-md-3">
            <div className="form-group">
                <label>Select Line</label>
                <select onChange={getSelectedMachineFunc} value={selectedMachine} className="form-control">
                   <option value="" >all</option>
                   {
                    machineData.map((data) => (
                        <option key={data._id} value={data.machineName}>{data.machineName}</option>
                    ))
                    
                } 
                </select>
            </div>
        </div> 
  )
}