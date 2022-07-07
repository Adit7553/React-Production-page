import React,{useEffect, useState} from 'react'
import '../Style/MainStyle.css'
import SelectPlantApiCall from '../ApiCalls/SelectPalntApiCall';
import SelectLineApiCall from '../ApiCalls/SelectLineApiCall';
import StartTime from '../DateAndTimePicker/StartTime';
import EndTime from '../DateAndTimePicker/EndTime';

export default function FilterDataBox() {
  return (
  <>
    <StartTime/>
    <EndTime/>
    <SelectPlantApiCall/>
    <SelectLineApiCall/>
  </>
  )
}



