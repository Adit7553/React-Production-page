///////////////////THIS COMPONENT IS STILL PENDING TO POST DATA/////////////////////
import React, { useState } from "react";
import "../../Style/MainStyle.css";
import EditFormFiled from "./EditFormFiled";

export default function EditDataBox({ closeEditModel, editAction }) {
  return (
    <>
      <div className="ModelBoxStyle">
        <div className="" id="editProductionPlan">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Productoion Plan</h4>
                <button onClick={() => closeEditModel(false)} type="button" className="close" >&times; </button>
              </div>
              <div className="modal-body">
                <EditFormFiled editAction={editAction} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
