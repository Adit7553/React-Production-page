import React,{useState} from 'react'
import './TopBar.css'
import { useSelector ,useDispatch } from 'react-redux/es/exports'
import { sideBarToggle } from '../../Redux/reducers/sidebarToggleReducer'

export default function TopBar() {
   
const dispatch = useDispatch()

// checking than sidebar is enable or not , if enale then onclick disable it and 
// if disable then enable it
var sideBarStatus = useSelector((state)=> state.sideBarToggleBox.sidebar)
sideBarStatus ? sideBarStatus = false : sideBarStatus = true;

const [dropdown, setDropdown] = useState("subMenuBar1")
const handleDropDownBtn = ()=>{
    var status =  dropdown;
    status === "subMenuBar2" ? setDropdown("subMenuBar1") : setDropdown("subMenuBar2"); 
  }

  return (
    <>
    <header className="mainHeader">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div id="mainMenuToggleBtn" className="mainMenuToggleBtn" onClick={()=>{dispatch(sideBarToggle(sideBarStatus))}}><i className="fa fa-bars"></i></div>
        <div id="mobileMenuToggleBtn" className="mainMenuToggleBtn" onClick={()=>{dispatch(sideBarToggle(sideBarStatus))}}><i className="fa fa-bars"></i></div>
        <a className="navbar-brand" >
            <img id="companyLogoImg" src={process.env.PUBLIC_URL + 'JBM-Logo-transparent.png'} alt=""/>   
        </a>
        <ul className="navbar-nav mr-auto nav-right">
            <li className="nav-item dropdown">
                <a onClick={()=> handleDropDownBtn()} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-user"></i>
                </a>
                <div id={dropdown} className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a id="toggleTheme"  className="dropdown-item" ><span>Dark Theme</span><span className="d-none">Light Theme</span></a>
                    <a className="dropdown-item" >Logout</a>
                </div>
            </li>
        </ul>
    </nav>
</header>
    </>
  )
}




