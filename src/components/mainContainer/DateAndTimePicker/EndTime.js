import React,{useState} from 'react'
import DateTimePicker from 'react-datetime-picker';
import {useSelector, useDispatch} from 'react-redux';
import { ToDate } from '../../../Redux/reducers/filterDataBoxReducer';

export default function EndTime() {

    
const dispatch = useDispatch() //To dispatch end date provided by user

////***Date and time logic (Date will be update but time will 23:59:59 as default)
    const defaultEndTime = new Date()
    defaultEndTime .setHours(23)
    defaultEndTime .setMinutes(59)
    defaultEndTime .setSeconds(59)
    defaultEndTime .toLocaleString("sv-SE");
    
    ///state to manage user input in ToDate field
const [toDate, setToDate] = useState(defaultEndTime)
    

  return (
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
  )
}
