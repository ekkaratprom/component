import React from 'react'
import PropTypes from 'prop-types'

const SideBar = ({ shadow, width, style , children }) => (

  <div className={"sidebar-container " + (shadow ? "shadow" : "")} style={{width:width ? width : "200px" , ...style}}>
    {children}
  </div>

)

export default SideBar;
