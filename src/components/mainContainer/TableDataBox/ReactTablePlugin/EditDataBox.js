

    ///////////////////THIS COMPONENT IS STILL PENDING TO POST DATA/////////////////////


import React,{useState} from 'react'
import '../../MainContainer.css'

export default function EditDataBox({closeEditModel, editAction}) {
    
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
    <div className='ModelBoxStyle'>
    <div className="" id="editProductionPlan">
    <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Edit Productoion Plan</h4>
                <button onClick={()=> closeEditModel(false)} type="button" className="close" >&times;</button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Select Plant</label>
                            <select name="selectedLine" className="form-control">
                                <option selected="selected">JBML-1</option>
                                <option>JBML-2</option>
                                <option>JBML-3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Select Line</label>
                            <select name='selectedLine' className="form-control">
                                <option selected="selected">Line-1</option>
                                <option>Line-2</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Select Machine Type</label>
                            <select name='selectedMachineType' className="form-control">
                                <option selected="selected">Press</option>
                                <option>Welding</option>
                                <option>EOT Crane</option>
                            </select>
                        </div>
                    </div>
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
            </div>
            <div className="modal-footer">
                <div className="row form-group">
                    <div className="col-12">
                        <button className="btn btn-default" onClick={()=> closeEditModel(false)}>Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}
