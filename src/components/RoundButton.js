import React from 'react';
import PropTypes from 'prop-types'

function RoundButton(props) {
  return (
    <button className="roundButton" onClick={props.onClick} style={props.style}>
        {props.children}
    </button>
  );
}

RoundButton.propTypes = {

    onClick: PropTypes.func,
    style: PropTypes.object

}

export default RoundButton;