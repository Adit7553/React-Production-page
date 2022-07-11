import React,{useState} from 'react'
import '../Style/MainStyle.css'
import FormField from './FormField'
import { useSelector } from 'react-redux'
import SelectPlantAddBox from './ApiCallsForAddNewBox/SelectPlantAddBox'
//import SelectPartAddBox from './ApiCallsForAddNewBox/SelectPartAddBox'
import SelectLineAddBox from './ApiCallsForAddNewBox/SelectLineAddBox'
import SelectMachineAddBox from './ApiCallsForAddNewBox/SelectMachineAddBox'


export default function AddNewDataBox({CloseModel}) {


const SelectedPlantInAddnewBox = useSelector((state)=> state.AddNewFormData.SelectedPlantInAddBoxByUser)
const SelectedLineInAddnewBox = useSelector((state)=> state.AddNewFormData.SelectedLineInAddBoxByUser)
const SelectedMachineInAddnewBox = useSelector((state)=> state.AddNewFormData.SelectedMachineInAddBoxByUser)
const SelectedPartInAddnewBox = useSelector((state)=> state.AddNewFormData.SelectedPartInAddBoxByUser)
const SelectedFormFiledByUser = useSelector((state)=> state.AddNewFormData.SelectedFormFielInAddBoxByUser)
const {selectedPlanningDate, selectedQuantity, selectedFromDate,selectedToDate,selectedStatus} = SelectedFormFiledByUser

const testSave = ()=>{
        console.log("congratulation , your form is reday to post");
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
                    <SelectPlantAddBox/>
                    <SelectLineAddBox/>
                    <SelectMachineAddBox/>
                </div>
                   <FormField/>
                </div>
            <div className="modal-footer">
                <div className="row form-group">
                    <div className="col-12">
                        <button onClick={()=> CloseModel(false)} className="btn btn-default">Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
   
    </>
  )
}
