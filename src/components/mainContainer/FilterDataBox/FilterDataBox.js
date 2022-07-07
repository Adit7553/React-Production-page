import React,{useEffect, useState} from 'react'
import '../MainContainer.css'
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios'
import { useDispatch} from 'react-redux';
import { loaderBoxReducer } from '../../../Redux/reducers/loaderDataBoxReducer';
import {FromDate, ToDate, SelectedPlant, SelectedLine} from '../../../Redux/reducers/filterDataBoxReducer';

export default function FilterDataBox() {
    const dispatch = useDispatch()


/////////////* Date&Time logic for input field value *////////////////////
var fromT = new Date()
fromT.setHours(0)
fromT.setMinutes(0)
fromT.setSeconds(0)
fromT.toLocaleString("sv-SE");

var toT = new Date()
toT.setHours(23)
toT.setMinutes(59)
toT.setSeconds(59)
toT.toLocaleString("sv-SE");

    const [fromDate, setFromDate] = useState(fromT)
    const [toDate, setToDate] = useState(toT)

//**********////////API call for Plant and line
////initially value of plantData and line data is an empty array , when Api data is fetched then Api data will be set 
///in PlantData and line data.
  const [plantData, setPlantData] = useState([])
  const [lineData, setLineData] = useState([])
   

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
/// To get input selection value of plant and line on select any value from plant or line 
// by default this value is null
const [selectedPlant, setSelectedPlant] = useState("")
const [selectedLine, setSelectedLine] = useState("")

const getSelectedPlantFunc = (e)=>{
    const getPlantId = e.target.value
    setSelectedPlant(getPlantId)
    dispatch(SelectedPlant(getPlantId))
}

///// calling Line api whenever page loaded and when user select any plant
    useEffect(()=>{
        const getLineApi = async()=>{
            try {
                dispatch(loaderBoxReducer(false)) 
                const response = await axios.get(`http://mm.thirdeye-ai.com/machine/info?companyId=JBMGroup&plantId=${selectedPlant}`)
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
    },[selectedPlant])




/////to get input selection value of line
const getSelectedLineFunc = (e)=>{
    const getLineId = e.target.value
    setSelectedLine(getLineId)
    dispatch(SelectedLine(getLineId))
}

  return (
  <>
    <div className="col-lg-3 col-md-3">
            <div className="form-group">
                <label>From</label>
                <DateTimePicker
                format="dd-MM-y HH:mm:ss "
                isClockOpen={false}
                value={fromDate}
               onChange={(e)=> {
                setFromDate(e)
                const DateAndTime = e.toLocaleString("sv-SE")
                    const correctedStartDate = DateAndTime.slice(0,10);
                    const correctedStartTime = DateAndTime.slice(11,19)
                    const finalFormatStartTimeForApi = `${correctedStartDate}T${correctedStartTime}.00Z`
                    dispatch(FromDate(finalFormatStartTimeForApi))
               }}
                clearIcon={null}
                calendarAriaLabel="Toogle celender"
                calendarIcon={<i className="fa fa-calendar-o" aria-hidden="true"></i>}
                // maxDate ={}
                // minDate ={}
                monthPlaceholder = "mm"
                dayPlaceholder = "dd"
                yearPlaceholder='yyyy'
                />
            </div>
        </div>
        <div className="col-lg-3 col-md-3">
            <div className="form-group">
                <label>To</label>
                <DateTimePicker
                format="dd-MM-y HH:mm:ss"
                isClockOpen={false}
                value={toDate}
                onChange={(e)=> {
                    setToDate(e)
                    const DateAndTime = e.toLocaleString("sv-SE")
                    const correctedEndDate = DateAndTime.slice(0,10);
                    const correctedEndTime = DateAndTime.slice(11,19)
                    const finalFormatEndTimeForApi = `${correctedEndDate}T${correctedEndTime}.00Z`
                    dispatch(ToDate(finalFormatEndTimeForApi))
                   }}
                clearIcon={null}
                calendarAriaLabel="Toogle celender"
                calendarIcon={<i className="fa fa-calendar-o" aria-hidden="true"></i>}
                //maxDate ={date}
                // minDate ={}
                monthPlaceholder = "mm"
                dayPlaceholder = "dd"
                yearPlaceholder='yyyy'
                />
            </div>
        </div>
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
  </>
  )
}



