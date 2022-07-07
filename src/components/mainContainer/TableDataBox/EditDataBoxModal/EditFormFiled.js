import React,{useState} from 'react'
import SelectLineApiCall from '../../ApiCalls/SelectLineApiCall'
import SelectMachineApiCall from '../../ApiCalls/SelectMachineApiCall'
import SelectPlantApiCall from '../../ApiCalls/SelectPalntApiCall'

export default function EditFormFiled({closeEditModel, editAction}) {

    const [editData, setEditData] = useState({

        selectedTool : editAction.tool ,
        selectedPlanningDate : editAction.planningDate, 
        selectedQuility : editAction.qty,
        selectedStartDate : editAction.startDate,
        selectedEndDate : editAction.endDate,
        selectedStatus : editAction.status
    })
     

const handleOnChange =(e)=>{
   const {name, value} = e.target
   setEditData({
    ...editData,
    [name] : value
   })
}

  return (
   <>
     <div className="row">
                    <SelectPlantApiCall/>
                    <SelectLineApiCall/>
                    <SelectMachineApiCall/>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>&nbsp;</label>
                            <button className="btn btn-primary btn-block">Apply Filter</button>
                        </div>
                    </div>
                </div>
             <div className="popUpFormFields">
                    <h6 className="text-center">Production Plan for Press Machine</h6>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Select Tool</label>
                                <select name='selectedTool' onChange={handleOnChange} className="form-control">
                                    <option selected="selected">{editAction.tool}</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Planning Date</label>
                                <input name='selectedPlanningDate' onChange={handleOnChange} type="datetime-local" placeholder="Planning Date" value={editAction.planningDate} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Quantity</label>
                                <input name='selectedQuility' onChange={handleOnChange} type="text" placeholder="Quantity" value={editAction.qty} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>From Date</label>
                                <input name='selectedStartDate' onChange={handleOnChange} type="datetime-local" placeholder="From Date" value={editAction.startDate} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>To Date</label>
                                <input name="selectedEndDate" onChange={handleOnChange} type="datetime-local" placeholder="To Date" value={editAction.endDate} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Select Status</label>
                                <select name='selectedStatus' onChange={handleOnChange} className="form-control">
                                    <option selected="selected">Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="modal-footer">
                <div className="row form-group">
                    <div className="col-12">
                        <button className="btn btn-default" onClick={()=> closeEditModel(false)}>Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div> 
   </>
  )
}
