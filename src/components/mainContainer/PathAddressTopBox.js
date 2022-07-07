import React from 'react'
import './MainContainer.css'

export default function PathAddressTopBox() {
  return (
    <>
    <div className="statusBar">
        <h6 className="pageTitle">
            <a href="/">Dashboard</a>
            <span className="devider">/</span>
            <span>Production Planning</span>
            <span className="devider">/</span>
            <span id="navBreadCrumb"></span>
        </h6>
    </div>
    </>
  )
}
