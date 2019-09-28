import React from 'react'
import PropTypes from 'prop-types'

const SelectionField = ({title , active}) => (
    <div className={"selection-field-container " + (active ? "active" : "")}>
        <div>{title}</div>
    </div>
)

export default SelectionField