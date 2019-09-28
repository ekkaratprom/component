import React from 'react'
import PropTypes from 'prop-types'

const SchemaItemHeader = (props) => {

    return(
        <tr>
            {props.cols.map((col,index) => <th key={index}>{col}</th>)}
        </tr>
    )

}

const SchemaHeader = () => {

    return(
        <thead>
            <SchemaItemHeader cols={[<div>Name</div>,<div>Type</div>,<input placeholder="search" />]} />
        </thead>
    )

}

const SchemaBody = ({items , onClickAdd}) => {

    return(
        <tbody>
            <tr onClick={onClickAdd}><td className="create-button" colSpan={3}><div><button>t</button> <span>Create New Project</span></div></td></tr>
            {items && items.map((item , index) => <SchemaItem key={index} cols={item} />)}
        </tbody>
    )

}

const SchemaItem = ({cols}) => {

    return(
        <tr>
            {cols && cols.map((col,index) => <td key={index}>{col}</td>)}
        </tr>
    )

}

const SchemaTable = ({items , onClickAdd}) => {

    return(
        <table className="schema-table">
            <SchemaHeader />
            <SchemaBody onClickAdd={onClickAdd} items={items} />
        </table>
    )

}


export default SchemaTable