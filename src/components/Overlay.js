import React from 'react'
import PropTypes from 'prop-types'

const Overlay = ({ style , children , event }) => (

  <div className="overlay-container" {...event} style={style}>
    {children}
  </div>

)

export default Overlay;
