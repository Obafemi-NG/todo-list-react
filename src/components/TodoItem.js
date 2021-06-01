import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title, handleRemove, handleEdit } = this.props;
        return (
            <li className = 'list-group-item text-capitalize d-flex justify-content-between my-3'>
            <h6> {title} </h6>
            <div className = 'icons'>
                <span className = 'text-success mx-2' onClick = {handleEdit} > <i className = 'fas fa-pen'></i> </span>
                <span className = 'text-danger'> <i className = 'fas fa-trash' onClick = {handleRemove}></i> </span>
            </div>
        </li>
        )
    }
}
