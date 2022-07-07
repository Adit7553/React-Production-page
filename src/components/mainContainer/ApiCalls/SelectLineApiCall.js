import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loaderBoxReducer } from '../../../Redux/reducers/loaderDataBoxReducer'
import { SelectedLine } from '../../../Redux/reducers/filterDataBoxReducer'

import axios from 'axios'


export default function SelectLineApiCall() {

    const dispatch = useDispatch()

    const SelectedPlantByUser = useSelector((state)=> state.filterFormData.SelectedPlantByUser)

    const [lineData, setLineData] = useState([])
    const [selectedLine, setSelectedLine] = useState("")

///// calling Line api whenever page loaded and when user select any plant
    useEffect(()=>{
        const getLineApi = async()=>{
            try {
                dispatch(loaderBoxReducer(false)) 
                const response = await axios.get(`http://mm.thirdeye-ai.com/machine/info?companyId=JBMGroup&plantId=${SelectedPlantByUser}`)
                const getLineData = response.data;
                const getUniqueLineOnly = [...new Map(getLineData.map((item)=> [item["lineId"], item])).values()]; /// to get unique valu of line
                setLineData(getUniqueLineOnly)
                dispatch(loaderBoxReducer(false))
            } catch (error) {
                alert("An error occured while feching Line API");
                dispatch(loaderBoxReducer(false))
            }
        }
        getLineApi();
    },[SelectedPlantByUser])

/////to get input selection value of line
    const getSelectedLineFunc = (e)=>{
        const getLineId = e.target.value
        setSelectedLine(getLineId)
        dispatch(SelectedLine(getLineId))
    }

  return (
    <div className="col-lg-3 col-md-3">
            <div className="form-group">
                <label>Select Line</label>
                <select onChange={getSelectedLineFunc} value={selectedLine} className="form-control">
                   <option value="" >all</option>
                   {
                    lineData.map((data) => (
                        <option key={data._id} value={data.lineId}>{data.lineId}</option>
                    ))
                    
                } 
                </select>
            </div>
        </div> 
  )
}
