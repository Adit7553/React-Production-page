import React,{useState} from 'react'
import './SideBar.css'
import { useSelector} from 'react-redux'



export default function SideBar() {

  const sideBarStatus = useSelector((state)=> state.sideBarToggleBox.sidebar)

  const [dropdown, setDropdown] = useState("subMenu1")
  
/// logic for showing sub menu in dropdown list
  const handleDropDownBtn = ()=>{
    var status =  dropdown;
    status === "subMenu2" ? setDropdown("subMenu1") : setDropdown("subMenu2"); 
  }


  return (
  <>
      <aside id="mainSidebar" className={sideBarStatus ? "mainSidebar" : "compactView"}>
    <div id="mainMenu" >
        <div className="list-group panel">
            <a  className="list-group-item" data-parent="#mainMenu"><i className="fa fa-home"></i><span>Home</span></a>
            <a href="resourceplanning" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-users"></i><span>Resource Allocation</span></a>
            <a href="productionPlanning" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-cubes"></i><span>Production Planning</span></a>
            <a onClick={()=> handleDropDownBtn()} className="list-group-item" data-toggle="collapse" data-parent="#mainMenu"><i className="fa fa-car"></i><span>Auto Production Planning</span><i className="fa fa-angle-down"></i></a>
            <div  className="collapse subMenu" id={dropdown} >
                <a id="autoPplanning" href="autoPplanning" className="list-group-item"><i className="fa fa-circle"></i><span>Customer Schedule</span></a>
                <a id="applanroutes" href="applanroutes" className="list-group-item"><i className="fa fa-circle"></i><span>Routing</span></a>
                <a id="applanConstraints" href="applanConstraints" className="list-group-item"><i className="fa fa-circle"></i><span>Constraints</span></a>
                <a id="applanInventory" href="applanInventory" className="list-group-item"><i className="fa fa-circle"></i><span>Inventory</span></a>
                <a id="applanProdSched" href="applanProdSched" className="list-group-item"><i className="fa fa-circle"></i><span>Production Schedule</span></a></div>
            <a href="downtime" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-clock"></i><span>Downtime</span></a>
            <a href="machine" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-tools"></i><span>Machine</span></a>
            <a href="i4settings" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-wrench"></i><span>Settings</span></a>
            <a href="manageUsers" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-users"></i><span>User Management</span></a>
            <a href="testDev3" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-wrench"></i><span>Settings Generic</span></a>
            <a href="cbmDashboard" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-clock"></i><span>CBM Dashboard</span></a>
            <a href="quality" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-search"></i><span>Quality Control</span></a>
             <a href="ems" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-plug"></i><span>Energy Manegement</span></a>
            <a href="cncAnalysis" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-cogs"></i><span>CNC Machines</span></a>
            <a href="leaderboardP" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-chart-pie"></i><span>Leaderboards</span></a>
            <a href="mis" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-chart-line"></i><span>MIS</span></a>
            <a href="toolpart" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-th"></i><span>Andons</span></a>
            <a href="weldAnalysis" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-chart-bar"></i><span>Generic Machine Analysis</span></a>
            <a href="testDev" className="list-group-item" data-parent="#mainMenu"><i className="fa fa-car"></i><span>Generic Production Planning</span></a>
            <a href="/rx/base/downtime" className="notify" id="downtime"><small>Downtime RX</small></a>
        </div>
    </div>
</aside>

  </>
  )
}
