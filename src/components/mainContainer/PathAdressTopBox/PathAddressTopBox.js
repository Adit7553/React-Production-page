import React from 'react'
import '../Style/MainStyle.css'

export default function PathAddressTopBox(props) {
  return (
    <>
    <div className="statusBar">
        <h6 className="pageTitle">
            <a href="/">{props.parentAddress}</a>
            <span className="devider">/</span>
            <span>{props.mainAddress}</span>
            <span className="devider">/</span>
            <span id="navBreadCrumb"></span>
        </h6>
    </div>
    </>
  )
}
