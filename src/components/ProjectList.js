import React from 'react'
import PropTypes from 'prop-types'

const ProjectItem = (props) => {
    return(
        <div className="project-list-item">
            <div className="front-item">
                {/* replace with icon */}
                <button>t</button>
                <span>{props.item.title}</span>
            </div>
            <div className="back-item">
                <button onClick={() => props.onSelect(props.id , props.item)}>select</button>
                <button onClick={() => props.onMore(props.id , props.item)}>more</button>
            </div>
        </div>
    )
}

const ProjectList = ({items , onSelect , onMore}) => (

  <div className="project-list-container">
    <div className="project-list-header">
        <div>Project Name</div>
        <div>test</div>
    </div>

    { items && items.map((item, index) => <ProjectItem key={index} id={index} item={item} onSelect={onSelect} onMore={onMore} /> )}

  </div>

)

export default ProjectList;
