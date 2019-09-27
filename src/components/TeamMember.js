import React from 'react'
import PropTypes from 'prop-types'

const TeamMember = ({ image, name, role }) => (
  <div className="team-member-container">

    <div className="image-container">
      <img src={image} className="teamImage" alt="member1" />
    </div>

    <div style={{ width: "100%", backgroundColor: "white", padding: "2px" }}>

      <p className="teamMemberName">{name}</p>
      <p className="teamMemberPosition">{role}</p>

    </div>

  </div>
)

TeamMember.propTypes = {

  image: PropTypes.object,
  name: PropTypes.object,
  role: PropTypes.object
  
}

export default TeamMember
