import React,{useState} from 'react'
import './MainContainer.css'
import ReactLoaderOverlay from './TableDataBox/ReactTablePlugin/ReactLoaderOverlay';
import { useSelector, useDispatch } from 'react-redux'
import PathAddressTopBox from './PathAddressTopBox'
import MainPageTopHeader from './MainPageTopHeader/MainPageTopHeader'
import AddNewDataBox from './AddNewDataBox/AddNewDataBox'
import FilterDataBox from './FilterDataBox/FilterDataBox'
import MainTablePlugin from './TableDataBox/ReactTablePlugin/MainTablePlugin'
import axios from 'axios'
import { fetchedDataReducer } from '../../Redux/reducers/fetchedDataBoxReducer'

export default function MainContainer() {

    const dispatch = useDispatch()

    /// user input data in filter section(FROM REDUX REDUCER) , these perameters will be used in table API
    const SelectedPlantByUser = useSelector((state)=> state.filterFormData.SelectedPlantByUser)
     const SelectedLineByUser = useSelector((state)=> state.filterFormData.SelectedLineByUser)
     const startTime = useSelector((state)=> state.filterFormData.startTime)
    const endTime = useSelector((state)=> state.filterFormData.endTime)


    /////When user filter data and click on fetch button
    const handleFatchBtn = async()=>{
        if(startTime || endTime || SelectedPlantByUser || SelectedLineByUser){
            const fetchedResponse = await axios.get(`http://mm.thirdeye-ai.com/pplan?startDate=${startTime}&endDate=${endTime}&plantId=${SelectedPlantByUser}&lineId=${SelectedLineByUser}`)
            const fetchedData = fetchedResponse.data;
            dispatch(fetchedDataReducer(fetchedData))
            if(fetchedData.length === 0 || fetchedData.length > 0){
                
            }  
        }
    }


//////State to open and close Add data modal box
    const [openAddNewModel, setOpenAddNewModel] = useState(false);
   
    // if sidebar is in compactMode , then maincontect bar truns into expendview
    const sideBarStatus = useSelector((state)=> state.sideBarToggleBox.sidebar)
    
  return (
   
   <>
  <section id="mainContent" className={sideBarStatus ? "mainContent" : "expendView"}>
         <PathAddressTopBox/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="box box-default">
                    <div className="box-header">
                        <div className="row">    
                        <MainPageTopHeader/>
                        <div className="col-md-6 text-right">
                            <button onClick={()=> setOpenAddNewModel(true)} className="btn btn-primary"><i className="fa fa-plus"></i> Add New</button>
                        </div>
                        </div>
                    </div>
                    <div className="box-body">
                      <div className="row">
                        <div className="col-lg-10 col-md-10">
                            <div className="row">
                            <FilterDataBox/>                           
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2">
                            <label>&nbsp;</label>
                            <button onClick={handleFatchBtn} className="btn btn-primary btn-block">Fetch</button>
                        </div>
                        </div>
                        <MainTablePlugin/>  
                        <ReactLoaderOverlay/> 
                    </div>
                </div>
            </div>
        </div>
    </div>   
    
    {openAddNewModel && <AddNewDataBox CloseModel={setOpenAddNewModel} />}
  </section>
  
</>



  )
}
