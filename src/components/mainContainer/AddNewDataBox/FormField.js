import React,{useState} from 'react'
import { useSelector } from 'react-redux'

export default function FormField() {

    const SelectedPlantByUser = useSelector((state)=> state.filterFormData.SelectedPlantByUser)
    const SelectedLineByUser = useSelector((state)=> state.filterFormData.SelectedLineByUser)
    const SelectedMachineByUser = useSelector((state)=> state.filterFormData.SelectedMachineByUser)

    const [addedNewData, setAddedNewData] = useState({
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

    const testSave = ()=>{
        // if(SelectedPlantByUser && SelectedLineByUser && SelectedMachineByUser &&  selectedPart && selectedPlanningDate && selectedQuantity && selectedFromDate &&  selectedToDate && selectedStatus){
        //     console.log("congratulation , your form is reday to post");
        // }
       }


  return (
    <>
    <div className="popUpFormFields">
                    <h6 className="text-center">Production Plan for Machine</h6><hr/>
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
    </>
  )
}
