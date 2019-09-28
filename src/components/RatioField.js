import React from 'react'
import PropTypes from 'prop-types'

const RatioField = ({title}) => (
    <label class="ratio-field-container">{title}
        <input type="radio"  name="radio" />
        <span class="checkmark"></span>
    </label>
)

export default RatioField