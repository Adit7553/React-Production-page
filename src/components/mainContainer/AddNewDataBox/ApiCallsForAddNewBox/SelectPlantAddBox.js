import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { loaderBoxReducer } from '../../../../Redux/reducers/loaderDataBoxReducer';
import { SelectedPlantInAddBox } from '../../../../Redux/reducers/AddNewDataBoxReducer';
import axios from 'axios'


export default function SelectPlantAddBox() {

    const dispatch = useDispatch()

    const [addPlantData, setAddPlantData] = useState([])
    const [addselectedPlant, setAddSelectedPlant] = useState("")

//// calling plant api whenever page loaded
    useEffect(()=>{
        const getPlantApi = async()=>{
            try {
               dispatch(loaderBoxReducer(true)) 
                const res =  await axios.get("http://mm.thirdeye-ai.com/plantInfo?i4Usage=true")
                 setAddPlantData(res.data)
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
        setAddSelectedPlant(getPlantId)
            dispatch(SelectedPlantInAddBox(getPlantId))
    }

  return (
    <>
       <div className="col-lg-3 col-md-3">
            <div className="form-group">
                <label>Select Plant</label>
                <select onChange={getSelectedPlantFunc} value={addselectedPlant} className=" form-control" >
                 <option value=""  >all</option> 
                  
                 {
                    addPlantData.map((Data) => (
                        <option key={Data._id} value={Data.plantCode}>{Data.plantName}</option>
                    ))
                } 
                </select>
                
            </div>
        </div>
    
    </>
  )
}
