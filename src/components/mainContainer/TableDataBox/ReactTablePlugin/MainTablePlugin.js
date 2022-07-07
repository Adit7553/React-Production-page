import React,{useState, useEffect} from 'react'
import { loaderBoxReducer } from '../../../../Redux/reducers/loaderDataBoxReducer';
import '../../Style/MainStyle.css'
import DataTable from 'react-data-table-component';
import axios from 'axios';
import EditDataBox from '../EditDataBoxModal/EditDataBox';
import { useSelector, useDispatch } from 'react-redux';

export default function MainTablePlugin() {

     const dispatch = useDispatch()

    ///// user input value in filter box to get specific data in table (FROM REDUX REDUCER)
     const SelectedPlantByUser = useSelector((state)=> state.filterFormData.SelectedPlantByUser)
     const SelectedLineByUser = useSelector((state)=> state.filterFormData.SelectedLineByUser)
     const startTime = useSelector((state)=> state.filterFormData.startTime)
     const endTime = useSelector((state)=> state.filterFormData.endTime)
   
   //// if user apply any filter and fetch data (FROM REDUX REDUCER)
     const fetchedData = useSelector((state)=> state.fetchedDataBox.fetchedDataItem)

   //// state to manage recieved data whenever table API called 
    const [data, setData] = useState([])

    ////state to get input value of search field 
    const [search, setSearch] = useState("")

    //// state to manage matched data and show matched data in the table 
    const [searchedData, setSearchedData] = useState([])

    /// state to open Edit modal box
    const [openEditModel, setOpenEditModel] = useState(false)
   

    //// useEffect to show data whenever we refresh our page or whenever user apply any filter and
    /// click on fetch button
    useEffect(()=>{
        const getData = async()=>{
            try {
                dispatch(loaderBoxReducer(true))
                const response = await axios.get(`http://mm.thirdeye-ai.com/pplan?startDate=${startTime}&endDate=${endTime}&plantId=${SelectedPlantByUser}&lineId=${SelectedLineByUser}`)
                    if(fetchedData.length > 0){
                        setData(fetchedData)
                        setSearchedData(fetchedData)
                        dispatch(loaderBoxReducer(false))
                    }else{
                        setData(response.data)
                        setSearchedData(response.data)
                        dispatch(loaderBoxReducer(false))
                    }     
            } catch (error) {
                console.log(error);
                dispatch(loaderBoxReducer(false))
            }
        }
       getData();
    },[fetchedData])

    //useEffect for search result,  whenever user reload the page it will show all data
     //and when user search something it will show matched result in table
    useEffect(() => {
        const searchResult = data.filter((recievedData) => { 
               return  (String(recievedData.toolId).toLowerCase().match(search.toLowerCase())) || 
                        recievedData.planningId.toLowerCase().match(search.toLowerCase()) ||
                        recievedData.partId.toLowerCase().match(search.toLowerCase()) ||
                        recievedData.quantityPlanned.toString().match(search.toLowerCase()) ||
                        (String(recievedData.machineId).toLowerCase().match(search.toLowerCase())) ||
                        recievedData.startDate.toLowerCase().match(search.toLowerCase()) ||
                        recievedData.endDate.toLowerCase().match(search.toLowerCase())        
          }); 
          setSearchedData(searchResult)
       },[search])

    
       //// state to send default values in Edit modal for every related row
       const [editAction, setEditAction] = useState({
        planningNum : "",
        station : "",
        part : "",
        tool : "",
        planningDate : "",
        qty : "",
        startDate : "",
        endDate : "",
        status : ""

     })

     ///// react data-table-plugin columns row logic
        const columns = [
                {
                    name: 'Planning Number',
                    selector: row => row.planningId,
                    width: "200px",
                    sortable : true,
                },
                {
                    name: 'Station',
                    selector: row => row.machineId,
                    sortable : true
                },
                {
                    name: 'Part',
                    selector: row => row.partId,
                    sortable : true
                },
                {
                    name: 'Tool',
                    selector: row => row.toolId,
                    sortable : true
                },
                {
                    name: 'Planning Date',
                    selector: row => (new Date(row.startDate)).toLocaleString("sv-SE"),
                    width:"200px"
                },
                {
                    name: 'Qty',
                    selector: row => row.quantityPlanned,
                    width:"100px",
                    sortable : true
                },
                {
                    name: 'Start Date',
                    selector: row => (new Date(row.startDate)).toLocaleString("sv-SE"),
                    sortable : true,
                    width:"200px"
                },
                {
                    name: 'End Date',
                    selector: row => (new Date(row.endDate)).toLocaleString("sv-SE"),
                    sortable : true,
                    width:"200px"
                },
                {
                    name: 'Status',
                    selector: row => '-',
                    width : "100px"
                },
                {
                    name: 'Modified By',
                    selector: row => 'admin'
                },
                {
                    name: 'action',
                    selector : row => <i className="fa fa-pencil-square-o" onClick={()=> {
                        setOpenEditModel(true)
                         setEditAction({
                            planningNum : row.planningId,
                            station : row.machineId,
                            part : row.partId,
                            tool : row.toolId,
                            planningDate : (new Date(row.startDate)).toLocaleString("sv-SE"),
                            qty : row.quantityPlanned,
                            startDate : (new Date(row.startDate)).toLocaleString("sv-SE"),
                            endDate : (new Date(row.endDate)).toLocaleString("sv-SE"),
                            status : '-'
                         })
                    }} aria-hidden="true"></i>
                },
        ]; 
         
  return (
<>
    {/* REACT DATA-TABLE-PLUGIN FEATURES */}
<div>
<DataTable
    columns={columns}
    data={searchedData}
    pagination
    striped ={true}
    className='table'
    // fixedHeader
    fixedHeaderScrollHeight='450px'
    subHeader
    subHeaderComponent={
        <input type="text"
         placeholder='Search' 
         className='w-25 form-control'
         value={search}
         onChange={(e)=> setSearch(e.target.value)} />
    }
    />   
</div> 

{/* ///// logic to open edit modal box when user click on edit icon in action section for any row */}
<div style={{top : '5px'}}>
{openEditModel && <EditDataBox 
closeEditModel={setOpenEditModel}
editAction = {editAction}
/>}
</div> 
</>
  )
}
