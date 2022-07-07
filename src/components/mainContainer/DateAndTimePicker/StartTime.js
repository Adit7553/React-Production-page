import React,{useState} from 'react'
import DateTimePicker from 'react-datetime-picker';
import { FromDate, ToDate } from '../../../../Redux/reducers/filterDataBoxReducer';
import {useSelector, useDispatch} from 'react-redux';


export default function StartTime() {

    const dispatch = useDispatch() //To dispatch Start date provided by user

////***Date and time logic (Date will be update but time will 00:00:00 as default)
    var fromT = new Date()
    fromT.setHours(0)
    fromT.setMinutes(0)
    fromT.setSeconds(0)
    fromT.toLocaleString("sv-SE");

  ///state to manage user input in FromDate field
    const [fromDate, setFromDate] = useState(fromT)

  return (
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
                monthPlaceholder = "mm"
                dayPlaceholder = "dd"
                yearPlaceholder='yyyy'
                />
        </div>
    </div>
  )
}
