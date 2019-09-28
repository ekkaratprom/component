import React from 'react'
import PropTypes from 'prop-types'

const SchemaItemHeader = (props) => {

    return(
        <tr>
            {props.cols.map((col,index) => <th key={index}>{col}</th>)}
        </tr>
    )

}

const SchemaHeader = (props) => {

    return(
        <thead>
            <SchemaItemHeader cols={[<div>Name</div>,<div>Type</div>,<div>space</div>]} />
        </thead>
    )

}

const SchemaBody = (props) => {

    return(
        <tbody>
            {props.items.map((item , index) => <SchemaItem key={index} cols={item} />)}
        </tbody>
    )

}

const SchemaItem = (props) => {

    return(
        <tr>
            {props.cols.map((col,index) => <td key={index}>{col}</td>)}
        </tr>
    )

}

const SchemaTable = (props) => {

    return(
        <table className="schema-table">

            <SchemaHeader />

            <SchemaBody items={[[<div><button>t</button> <span>Create New Project</span></div>],["id" , "id" , "3"],["user" , "string" , "3"],["name" , "string" , "3"]]} />

        </table>
    )

}


export default SchemaTable