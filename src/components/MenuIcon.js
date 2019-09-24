import React from 'react';
import PropTypes from 'prop-types'

function MenuIcon(props) {
  return (
    
    <div className="icon-container">

      <div className="icon-image-container">

        <img src={props.image} className="iconImage" alt="icon1" />
      </div>

      <div style={{width:"100%" , padding:"2px"}}>

        <p className="iconName">{props.name}</p>
        
      </div>

    </div>
    
    
      
    
  );
}

MenuIcon.propTypes = {

  image: PropTypes.object,
  name: PropTypes.object
  

}

export default MenuIcon;
