import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loaderBoxReducer } from '../../../../Redux/reducers/loaderDataBoxReducer'
import { SelectedMachineInAddBox } from '../../../../Redux/reducers/AddNewDataBoxReducer'
import axios from 'axios'



export default function SelectMachineAddBox() {

    const dispatch = useDispatch()

    // const startTime = useSelector((state)=> state.filterFormData.startTime)
    //  const endTime = useSelector((state)=> state.filterFormData.endTime)
    // const SelectedPlantByUser = useSelector((state)=> state.filterFormData.SelectedPlantByUser)
    // const SelectedLineByUser = useSelector((state)=> state.filterFormData.SelectedLineByUser)
    const SelectedPlantInAddnewBox = useSelector((state)=> state.AddNewFormData.SelectedPlantInAddBoxByUser)
    const SelectedLineInAddnewBox = useSelector((state)=> state.AddNewFormData.SelectedLineInAddBoxByUser)

    const [addmachineData, setAddMachineData] = useState([])
    const [addselectedMachine, setAddSelectedMachine] = useState("")

///// calling Line api whenever page loaded and when user select any plant
    useEffect(()=>{
        const getLineApi = async()=>{
            try {
                dispatch(loaderBoxReducer(false)) 
                const response = await axios.get(`http://mm.thirdeye-ai.com/pplan?startDate=2022-06-30T00:00:01.000Z&endDate=2022-06-30T23:59:59.000Z&plantId=${SelectedPlantInAddnewBox}&lineId=${SelectedLineInAddnewBox}`)
                const getMachineData = response.data;
                const getUniqueMachineOnly = [...new Map(getMachineData.map((item)=> [item["lineId"], item])).values()]; /// to get unique valu of line
                setAddMachineData(getUniqueMachineOnly)
                dispatch(loaderBoxReducer(false))
            } catch (error) {
                alert("An error occured while feching Line API");
                dispatch(loaderBoxReducer(false))
            }
        }
        getLineApi();
    },[SelectedPlantInAddnewBox, SelectedLineInAddnewBox])

/////to get input selection value of line
    const getSelectedMachineFunc = (e)=>{
        const getLineId = e.target.value
        setAddSelectedMachine(getLineId)
        dispatch(SelectedMachineInAddBox(getLineId))
    }

    //console.log(search);

  return (
    <div className=" col-md-3">
            <div className="form-group">
                <label>Select Machine</label>
                
                <select onChange={getSelectedMachineFunc} value={addselectedMachine} className="form-control">
                   <option value="" >all</option>
                   {
                    addmachineData.map((data) => (
                        <option key={data._id} value={data.machineId}>{data.machineId}</option>
                    ))
                    
                } 
                </select>
                
            </div>
        </div> 
  )
}