import React from 'react'
import PropTypes from 'prop-types'

const SideBar = ({ app, template, setting, onClick, children }) => (

  // <div className="side-bar" >

  //   <div className="menu-container">
  //     <div>
  //       <img src={app} className="icon-container" alt="app-icon" onClick={onClick} />
  //     </div>
  //   </div>


  //   <div class="list-container">
  //     <button className="button-sidebar" onClick={onClick} >
  //         {children}
  //     </button>

  //   </div>



  // </div>

  <div className="body">
    <div className="container">
      <div className="nav">
        <div className="site-name">
          <span>Codeless</span>
          <span className = "app-name">Application</span>
        </div>

        <div>
          <span className="left-side">        
              Application
            

          </span>

          <span className="right-side">
            
              right
            
          </span>
        </div>



      </div>

     
    </div>
  </div>








)







// SideBar.propTypes = {



// }

export default SideBar;
