import React from 'react'
import SelectLineApiCall from '../ApiCalls/SelectLineApiCall'
import SelectMachineApiCall from '../ApiCalls/SelectMachineApiCall'
import SelectPlantApiCall from '../ApiCalls/SelectPalntApiCall'
import '../Style/MainStyle.css'
import FormField from './FormField'

export default function AddNewDataBox({CloseModel}) {
    
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
                    <SelectPlantApiCall/> 
                    <SelectLineApiCall/>
                    <SelectMachineApiCall/>
                </div>
                   <FormField />
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
