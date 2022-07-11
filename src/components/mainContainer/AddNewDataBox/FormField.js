import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SelectPartApiCall from './ApiCallsForAddNewBox/SelectPartAddBox'
import { SelectedFormField } from '../../../Redux/reducers/AddNewDataBoxReducer'

export default function FormField() {

    const dispatch = useDispatch()

    const SelectedFormFiledByUser = useSelector((state)=> state.AddNewFormData.SelectedFormFielInAddBoxByUser)
   
    const test = (e) => {
        const {name, value} = e.target
       dispatch(SelectedFormField(({
        ...SelectedFormFiledByUser,
        [name] : value
       })))  
    }
  return (
    <>
    <div className="popUpFormFields">
                    <h6 className="text-center">Production Plan for Machine</h6><hr/>
                    <div className="row">
                        <SelectPartApiCall/>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Planning Date</label>
                                <input name='selectedPlanningDate' onChange={test} type="date" placeholder="Planning Date" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Quantity</label>
                                <input name='selectedQuantity' onChange={test}  type="text" placeholder="Quantity" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>From Date</label>
                                <input name='selectedFromDate' onChange={test} type="datetime-local" placeholder="From Date" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>To Date</label>
                                <input name='selectedToDate' onChange={test}  type="datetime-local" placeholder="To Date" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Select Status</label>
                                <select name='selectedStatus' onChange={test} className="form-control">
                                    <option value="none" selected disabled hidden>Select an Option</option>
                                    <option value={"active"}>Active</option>
                                    <option value={"inactive"}>Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}
