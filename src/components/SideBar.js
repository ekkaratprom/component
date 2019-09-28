import React from 'react'
import PropTypes from 'prop-types'

const SideBar = ({ style , children }) => (

  <div className="sidebar-container" style={{width:"200px" , ...style}}>
    {children}
  </div>

)

export default SideBar;
