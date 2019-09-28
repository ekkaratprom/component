import React from 'react'
import PropTypes from 'prop-types'

const SideBar = ({ app, template, setting, onClick, children }) => (

  <div className="sidebar-container" style={{width:"100px"}}>
    {children}
  </div>

)

export default SideBar;
