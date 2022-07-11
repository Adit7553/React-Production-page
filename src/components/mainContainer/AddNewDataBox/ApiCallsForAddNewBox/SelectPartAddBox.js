import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loaderBoxReducer } from '../../../../Redux/reducers/loaderDataBoxReducer'
import { SelectedPartInAddBox } from '../../../../Redux/reducers/AddNewDataBoxReducer'
import axios from 'axios'


export default function SelectPartAddBox() {

    const dispatch = useDispatch()

    // const startTime = useSelector((state)=> state.filterFormData.startTime)
    // const endTime = useSelector((state)=> state.filterFormData.endTime)
    // const SelectedPlantByUser = useSelector((state)=> state.filterFormData.SelectedPlantByUser)
    // const SelectedLineByUser = useSelector((state)=> state.filterFormData.SelectedLineByUser)
    const SelectedPlantInAddnewBox = useSelector((state)=> state.AddNewFormData.SelectedPlantInAddBoxByUser)
    const SelectedLineInAddnewBox = useSelector((state)=> state.AddNewFormData.SelectedLineInAddBoxByUser)
    

    const [addpartData, setAddPartData] = useState([])
    const [addselectedPart, setAddSelectedPart] = useState("")

///// calling Line api whenever page loaded and when user select any plant
    useEffect(()=>{
        const getLineApi = async()=>{
            try {
                dispatch(loaderBoxReducer(false)) 
                const response = await axios.get(`http://mm.thirdeye-ai.com/pplan?startDate=2022-06-30T00:00:01.000Z&endDate=2022-06-30T23:59:59.000Z&plantId=${SelectedPlantInAddnewBox}&lineId=${SelectedLineInAddnewBox}`)
                const getPartData = response.data;
                const getUniquePartOnly = [...new Map(getPartData.map((item)=> [item["lineId"], item])).values()]; /// to get unique valu of line
                setAddPartData(getUniquePartOnly)
                dispatch(loaderBoxReducer(false))
            } catch (error) {
                alert("An error occured while feching Line API");
                dispatch(loaderBoxReducer(false))
            }
        }
        getLineApi();
    },[SelectedPlantInAddnewBox, SelectedLineInAddnewBox])

/////to get input selection value of line
    const getSelectedPartFunc = (e)=>{
        const getPartId = e.target.value
        setAddSelectedPart(getPartId)
        dispatch(SelectedPartInAddBox(getPartId))
    }

  return (
    <div className="col-md-6">
            <div className="form-group">
                <label>Select Part</label>
                <select onChange={getSelectedPartFunc} value={addselectedPart} className="form-control">
                   <option value="" >all</option>
                   {
                    addpartData.map((data) => (
                        <option key={data._id} value={data.partId}>{data.partId}</option>
                    ))
                    
                } 
                </select>
            </div>
        </div> 
  )
}