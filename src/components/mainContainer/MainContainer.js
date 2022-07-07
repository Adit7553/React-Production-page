import React,{useState} from 'react'
import './Style/MainStyle.css'
import ReactLoader from './ReactLoaderPlugin/ReactLoader';
import { useSelector, useDispatch } from 'react-redux'
import PathAddressTopBox from './PathAdressTopBox/PathAddressTopBox'
import MainPageTopHeader from './MainPageTopHeader/MainPageTopHeader'
import AddNewDataBox from './AddNewDataBox/AddNewDataBox'
import FilterDataBox from './FilterDataBox/FilterDataBox'
import MainTablePlugin from './TableDataBox/ReactTablePlugin/MainTablePlugin'
import FetchButton from './FetchButton/FetchButton';


export default function MainContainer() {

    const dispatch = useDispatch()

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
                        <FetchButton/>
                        </div>
                        <MainTablePlugin/>  
                        <ReactLoader/> 
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
