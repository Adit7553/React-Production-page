import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { loaderBoxReducer } from '../../../Redux/reducers/loaderDataBoxReducer';
import {SelectedPlant} from '../../../Redux/reducers/filterDataBoxReducer';
import axios from 'axios'

export default function SelectPlantApiCall() {

    const dispatch = useDispatch()

    const [plantData, setPlantData] = useState([])
    const [selectedPlant, setSelectedPlant] = useState("")

//// calling plant api whenever page loaded
    useEffect(()=>{
        const getPlantApi = async()=>{
            try {
               dispatch(loaderBoxReducer(true)) 
                const res =  await axios.get("http://mm.thirdeye-ai.com/plantInfo?i4Usage=true")
                 setPlantData(res.data)
                 dispatch(loaderBoxReducer(false))
            } catch (error) {
                alert("An error occured while feching plant api", error);
                dispatch(loaderBoxReducer(false))
            }
           }
        getPlantApi(); 
    },[])

    const getSelectedPlantFunc = (e)=>{
        const getPlantId = e.target.value
        setSelectedPlant(getPlantId)
        dispatch(SelectedPlant(getPlantId))
    }

  return (
    <>
       <div className="col-lg-3 col-md-3">
            <div className="form-group">
                <label>Select Plant</label>
                <select onChange={getSelectedPlantFunc} value={selectedPlant} className=" form-control" >
                 <option value=""  >all</option> 
                  
                 {
                    plantData.map((Data) => (
                        <option key={Data._id} value={Data.plantCode}>{Data.plantName}</option>
                    ))
                } 
                </select>
                
            </div>
        </div>
    
    </>
  )
}
