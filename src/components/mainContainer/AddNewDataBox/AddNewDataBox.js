import React,{useState} from 'react'
import '../MainContainer.css'

export default function AddNewDataBox({CloseModel}) {
    
    const [addedNewData, setAddedNewData] = useState({
        selectedPlant : "",
        selectedLine : "",
        selectedMachine : "",
        selectedPart : "",
        selectedPlanningDate : "",
        selectedQuantity : "",
        selectedFromDate : "",
        selectedToDate : "",
        selectedStatus : ""
    })

    const test = (e) => {
        const {name, value} = e.target
       setAddedNewData({
        ...addedNewData,
        [name] : value
       })  
    }

    console.log(addedNewData);

   const testSave = ()=>{
    const {selectedPlant, selectedLine, selectedMachine, selectedPart, selectedPlanningDate, selectedQuantity, selectedFromDate,  selectedToDate, selectedStatus} = addedNewData
    if(selectedPlant && selectedLine && selectedMachine &&  selectedPart && selectedPlanningDate && selectedQuantity && selectedFromDate &&  selectedToDate && selectedStatus){
        console.log("congratulation , your form is reday to post");
    }
   }

  return (
    <>
    <div className="ModelBoxStyle" >
    <div className="modal-dialog modal-lg"> 
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Add Productoion Plan</h4>
                <button onClick={()=> CloseModel(false)} type="button" className="close" >&times;</button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group" >
                            <label>Select Plant</label>
                            <select name='selectedPlant' onChange={test} className="form-control selectable">
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value={1}>Test1</option>
                            <option value={6}>Test2</option>
                            <option value={9}>Test3</option>
                            <option value={17}>Test4</option>
                            <option value={57}>Test5</option>
                            <option value={98}>Test6</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group" >
                            <label>Select Line</label>
                            <select name='selectedLine' onChange={test} className="form-control selectable lineChoices" >
                                <option value="none" selected disabled hidden>Select an Option</option>
                                <option value={6}>Test2</option>
                                <option value={9}>Test3</option>
                                <option value={17}>Test4</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group" >
                            <label>Select Machine</label>
                            <select name='selectedMachine' onChange={test} className="form-control selectable" >
                                <option value="none" selected disabled hidden>Select an Option</option>
                                <option value={6}>Test2</option>
                                <option value={9}>Test3</option>
                                <option value={17}>Test4</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="popUpFormFields">
                    <h6 className="text-center">Production Plan for Machine</h6>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Select Part</label>
                                <select name='selectedPart' onChange={test} className="form-control selectable" >
                                    <option value="none" selected disabled hidden>Select an Option</option>
                                    <option value={67}>Test2</option>
                                    <option value={95}>Test3</option>
                                    <option value={177}>Test4</option>
                                </select>
                            </div>
                        </div>
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
            </div>
            <div className="modal-footer">
                <div className="row form-group">
                    <div className="col-12">
                        <button onClick={()=> CloseModel(false)} className="btn btn-default">Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={testSave} className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
   
    </>
  )
}
